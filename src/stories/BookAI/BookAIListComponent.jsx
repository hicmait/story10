"use client";
import React, { useEffect, useState, useMemo } from "react";
import cn from "classnames";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Slider from "react-slick";

import BookAI from "./BookAI";
import style from "./BookAI.module.scss";
import { getAuthAccess, getProducts } from "./api";
import { getAiUrl, getApiUrl, isEmpty } from "../../utils";
import { TTPSlider } from "../../common/components/sliders/ttp-slider";
import { useResponsive } from "../../common/hooks/useResponsive";
import Checkbox from "../common/Checkbox";
import { I18N } from "../../i18n";
import { fetchOrganizations, getUser } from "../../api/user";
import IconClose from "../Icons/IconClose";

export const BookAIListComponent = ({
  language,
  token,
  organization,
  organizationImage = "",
  user,
  env,
  showFiduciareModal = true,
  viewType = "slider", // list | slider
  showDetailsModal = false,
  id = "book-ai-list",
  scrollOffset = 80,
}) => {
  const translate = (text) => {
    return I18N[language][text];
  };
  const [products, setProducts] = useState(null);
  const [isFetchingProduct, setIsFetchingProduct] = useState(false);
  const [error, setError] = useState(null);

  const [fiduciaires, setFiduciaires] = useState([]);
  const [isFetchingFiduciaires, setIsFetchingFiduciaires] = useState(false);

  const [isFetchingAuth, setIsFetchingAuth] = useState(false);
  const [userAccess, setUserAccess] = useState([]);
  const { isMobile } = useResponsive();
  localStorage.removeItem("book_step");
  const [search, setSearch] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

  useEffect(() => {
    if (!token) return;

    const fetchProducts = async () => {
      setIsFetchingProduct(true);
      setError(null);

      try {
        const data = await getProducts(token, getAiUrl(env), organization);
        setProducts(data);
        //setProducts([data[0], data[1], data[0], data[1], data[1], data[0]]);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetchingProduct(false);
      }
    };

    const fetchUserAccess = async () => {
      if (isEmpty(user) || !user?.id) {
        setUserAccess([]);
        return;
      }

      setIsFetchingAuth(true);
      try {
        const data = await getAuthAccess(token, getAiUrl(env), user?.id);
        setUserAccess(data);
      } catch (err) {
        setError(err);
        setUserAccess([]);
      } finally {
        setIsFetchingAuth(false);
      }
    };

    const fetchOrganization = async () => {
      setIsFetchingFiduciaires(true);
      try {
        const data = await fetchOrganizations(getApiUrl(env), token, user?.id);
        const organizationsData = data?.data?.data ?? [];
        const organizations = organizationsData.filter(
          (org) => org.membershipOrder?.hasFiduciaryPlan,
        );
        setFiduciaires([organizations[0], organizations[1], organizations[2]]);
        setFiduciaires(organizations);
      } finally {
        setIsFetchingFiduciaires(false);
      }
    };

    fetchUserAccess();
    fetchProducts();
    fetchOrganization();
  }, [token, organization, user, env]);

  useEffect(() => {
    if (!products || products?.length == 0 || !id) return;
    if (window.location.hash === `#${id}`) {
      const el = document.getElementById(id);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [products, id]);

  const filteredProducts = useMemo(() => {
    if (!products) return products;
    let tab = selectedAuthors.length === 0 ? [...products] : [];
    products.forEach((item) => {
      if (item?.authors?.length > 0) {
        const matchedAuthors = item.authors.filter((i) =>
          selectedAuthors.includes(i.id),
        );
        if (matchedAuthors.length > 0) {
          tab.push(item);
        }
      }
    });

    if (!search) return tab;
    return tab.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search, selectedAuthors]);

  const authorsList = useMemo(() => {
    if (!products) return [];
    let authors = [];
    products.forEach((item) => {
      if (item?.authors?.length > 0) {
        item.authors.forEach((i) => {
          if (!authors.some((author) => author.id === i)) {
            authors.push(i);
          }
        });
      }
    });
    return authors;
  }, [products]);

  if (isFetchingProduct || isEmpty(products) || !Array.isArray(products)) {
    return <></>;
  }

  const productsLength = products.length;

  const renderBooks = () =>
    products.map((product) => (
      <div
        className="m-b-s"
        key={product?.id}
        style={
          !isMobile && productsLength > 1
            ? {
                marginRight: "1rem",
                width: productsLength == 2 ? 595 : 390,
                height: 400,
              }
            : {}
        }
      >
        {/* <BookAI
          viewType={viewType}
          product={product}
          productsLength={productsLength}
          isBought={
            !isFetchingAuth &&
            Array.isArray(userAccess) &&
            userAccess.length > 0 &&
            userAccess.some(
              (userAuth) =>
                (userAuth.collection?.id ?? userAuth.silo?._id) ===
                  (product?.collection_id ?? 0) &&
                (new Date(userAuth.expire_at).getTime() >=
                  new Date().getTime() ||
                  userAuth.expire_at === null),
            )
          }
          expireAt={
            !isFetchingAuth && Array.isArray(userAccess)
              ? (() => {
                  const expireAtStr = userAccess.filter(
                    (userAuth) =>
                      (userAuth.collection?.id ?? userAuth.silo?._id) ===
                        (product?.collection_id ?? 0) &&
                      new Date(userAuth.expire_at).getTime() >=
                        new Date().getTime(),
                  )[0]?.expire_at;
                  if (expireAtStr) {
                    const expireDate = new Date(expireAtStr);
                    return `${expireDate
                      .getDate()
                      .toString()
                      .padStart(2, "0")}/${(expireDate.getMonth() + 1)
                      .toString()
                      .padStart(2, "0")}/${expireDate.getFullYear()}`;
                  }
                  return null;
                })()
              : ""
          }
          organizationImage={
            isEmpty(organizationImage)
              ? (product?.issuer?.avatarUrl ?? "")
              : organizationImage
          }
          token={token}
          user={user}
          env={env}
          fiduciaires={fiduciaires}
          showFiduciareModal={showFiduciareModal}
          showDetailsModal={showDetailsModal}
        /> */}
      </div>
    ));

  const renderListBooks = () => {
    return (
      <div className={style.listContainer}>
        {filteredProducts.map((product) => (
          <div
            className={style.listItem}
            key={product?.id}
            style={
              !isMobile && productsLength > 1
                ? {
                    // marginRight: "1rem",
                    // width: productsLength == 2 ? 595 : 390,
                    // height: 400,
                  }
                : {}
            }
          >
            <BookAI
              viewType={viewType}
              product={product}
              productsLength={productsLength}
              isBought={
                !isFetchingAuth &&
                Array.isArray(userAccess) &&
                userAccess.length > 0 &&
                userAccess.some(
                  (userAuth) =>
                    (userAuth.collection?.id ?? userAuth.silo?._id) ===
                      (product?.collection_id ?? 0) &&
                    (new Date(userAuth.expire_at).getTime() >=
                      new Date().getTime() ||
                      userAuth.expire_at === null),
                )
              }
              expireAt={
                !isFetchingAuth && Array.isArray(userAccess)
                  ? (() => {
                      const expireAtStr = userAccess.filter(
                        (userAuth) =>
                          (userAuth.collection?.id ?? userAuth.silo?._id) ===
                            (product?.collection_id ?? 0) &&
                          new Date(userAuth.expire_at).getTime() >=
                            new Date().getTime(),
                      )[0]?.expire_at;
                      if (expireAtStr) {
                        const expireDate = new Date(expireAtStr);
                        return `${expireDate
                          .getDate()
                          .toString()
                          .padStart(2, "0")}/${(expireDate.getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}/${expireDate.getFullYear()}`;
                      }
                      return null;
                    })()
                  : ""
              }
              organizationImage={
                isEmpty(organizationImage)
                  ? (product?.issuer?.avatarUrl ?? "")
                  : organizationImage
              }
              token={token}
              user={user}
              env={env}
              fiduciaires={fiduciaires}
              showFiduciareModal={showFiduciareModal}
              showDetailsModal={showDetailsModal}
            />
          </div>
        ))}
      </div>
    );
  };

  const onSelectAuthor = (item) => {
    if (selectedAuthors.includes(item.id)) {
      setSelectedAuthors([
        ...selectedAuthors.filter((element) => element !== item.id),
      ]);
    } else {
      setSelectedAuthors([...selectedAuthors, item.id]);
    }
  };

  const renderFilters = () => {
    return (
      <>
        <div className={style.filter_box}>
          <h4 className={style.filter_box_title}>Auteurs</h4>
          {authorsList?.length > 0 && (
            <ul>
              {authorsList.map((author) => (
                <li key={`auth${author.id}`}>
                  <Checkbox
                    checked={selectedAuthors.includes(author.id)}
                    onClick={() => onSelectAuthor(author)}
                  />{" "}
                  <label>{author.firstName + " " + author.lastName}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: false,
  };
  return viewType === "slider" ? (
    <div id={id} className={style.wrapperLivres}>
      <h1>{translate("livres_numerique")}</h1>
      <div className={style.cycles_slider}>
        {/* <Slider {...settings}>{renderBooks()}</Slider> */}
        <TTPSlider
          className={style.layout_custom}
          cards={renderBooks()}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={5}
          speed={500}
          isAuto
          centeredSlides
          loop={productsLength > 3 ? true : false}
        />
      </div>
    </div>
  ) : (
    <div id={id} className={style.wrapperLivres2}>
      {/* <h1>{translate("livres_numerique")}</h1> */}

      <div className="grid-x grid-margin-x">
        <div className={cn(style.filters, "cell medium-3")}>
          <div className={style.search_container}>
            <span className={style.search_icon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.80541"
                  cy="9.80541"
                  r="7.49047"
                  stroke="#6D7F92"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0151 15.4043L17.9518 18.3334"
                  stroke="#6D7F92"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`${translate("search")}...`}
              className={style.search_input}
            />
          </div>

          <div className="hide-for-small-only">
            <h3 className={style.filter_title}>{translate("filters")}</h3>

            {renderFilters()}
          </div>

          <div className="show-for-small-only">
            <button
              onClick={() => setIsOpenFilterModal(true)}
              className={style.modalFilterTrigger}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 4.16667H2.5M10 15.8333H2.5M11.6667 2.5V5.83333M13.3333 14.1667V17.5M17.5 10H10M17.5 15.8333H13.3333M17.5 4.16667H11.6667M6.66667 8.33333V11.6667M6.66667 10H2.5"
                  stroke="#6D7F92"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {translate("filters")}
            </button>

            <div
              className={cn(
                style.modalOverlay,
                isOpenFilterModal ? style.active : "",
              )}
              onClick={() => setIsOpenFilterModal(false)}
            />

            <div
              className={cn(
                style.modalFilterContent,
                isOpenFilterModal ? style.active : "",
              )}
            >
              <div className={style.modalFilterTop}>
                <h3 className={style.filter_title}>{translate("filters")}</h3>
                <button
                  onClick={() => setIsOpenFilterModal(false)}
                  className={style.modalFilterClose}
                >
                  <IconClose />
                </button>
              </div>

              {renderFilters()}
            </div>
          </div>
        </div>
        <div className="cell small-12 medium-9">{renderListBooks()}</div>
      </div>
    </div>
  );
};
