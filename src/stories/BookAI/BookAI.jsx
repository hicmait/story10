"use client";
import React, { useEffect, useState } from "react";
import cn from "classnames";

import style from "./BookAI.module.scss";
import CheckMarkIcon from "../Icons/CheckMarkv2";
import { I18N } from "../../i18n";
// import RegistrationModal from "./RegistrationModal";
import ProductDetailModal from "./ProductDetailModal";

export default function BookAI({
  product,
  productsLength = 3,
  isBought,
  expireAt = "",
  organizationImage,
  language = "fr",
  token,
  user,
  env,
  fiduciaires,
  showFiduciareModal,
  viewType,
  showDetailsModal = false,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const TTP_OECCBB_URL_AI = "https://www.oeccbb.be/fr/ia";

  const showPaymentModal = () => {
    if (!user) {
      const loginSearchParams = new URLSearchParams();
      loginSearchParams.set("authView", "LOGIN");
      const url = `?${loginSearchParams.toString()}`;
      if (typeof window !== "undefined") {
        window.location.assign(url);
      }
      return;
    }
    setShowModal(true);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e?.data?.message === "CLOSE_REGISTRATION_MODAL") {
        if (typeof window !== "undefined") {
          window.location.href = `${TTP_OECCBB_URL_AI}?token=${token}`;
        }
        setShowModal(false);
      }
    };

    window.addEventListener("message", handler);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, [token]);

  const sliderView = () => {
    return (
      <div
        className={cn(
          productsLength == 1
            ? style.channel_book
            : productsLength == 2
              ? style.channel_two_book
              : style.channel_book_list,
          isBought ? style.bought : "",
          showDetailsModal ? style.clickable : "",
        )}
        onClick={() => showDetailsModal && setShowDetailModal(true)}
      >
        {/* <div className={style.book_image} style={{ backgroundImage: `url(${product.thumbnail})` }}>
        {isMobile && (
          <div className={style.book_channel_avatar}>
            <img src={Book.communityprofile} alt="" className="src" />
          </div>
        )}
        </div> 
         */}
        <div className={style.book_image}>
          <img src={product.thumbnail} alt="" className="src" />
        </div>

        <div className={style.book_content}>
          <div
            className={style.book_channel_avatar}
            style={{ backgroundImage: `url(${organizationImage})` }}
          >
            {/* <img src={organizationImage} alt="" className="src" /> */}
          </div>

          <div className={style.book_title}>{product.title}</div>
          {Array.isArray(product.author) && (
            <div
              className={style.book_author_wrapper}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
                display: "inline-block", // important
              }}
            >
              {product.author.map((author) => author.full_name).join(", ")}
            </div>
          )}
          {!isBought ? (
            <div className={style.book_price}>
              {I18N[language].book.only} {product.unitPrice} €
            </div>
          ) : (
            <div className={style.book_bought}>
              <CheckMarkIcon />
              {I18N[language].book.bought}
            </div>
          )}
          <div className={style.book_action}>
            <div className={style.book_button_section}>
              <div className={style.book_button}>
                {isBought ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={style.book_access_button}
                    href={`${TTP_OECCBB_URL_AI}?token=${token}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {I18N[language].book.accessAI}
                  </a>
                ) : (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={style.book_buy_button}
                    onClick={(e) => {
                      e.stopPropagation();
                      showPaymentModal();
                    }}
                  >
                    {I18N[language].book.purchaseAccessToTheBookViaAI}
                  </a>
                )}
              </div>
              <div className={style.book_version}>
                {!isBought
                  ? `${I18N[language].book.untilTheReleaseOfTheVersion}`
                  : expireAt != null
                    ? `${I18N[language].book.accessExpiration} ${expireAt}`
                    : `${I18N[language].book.accessPermanent}`}
              </div>
            </div>
            <div className={style.book_paper}>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://taxandmanagement.be"}
                onClick={(e) => e.stopPropagation()}
              >
                {" "}
                {I18N[language].book.wantToBuyThePrintedVersion}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listView = () => {
    return (
      <div
        className={cn(
          style.book_box,
          isBought ? style.bought : "",
          showDetailsModal ? style.clickable : "",
        )}
        onClick={() => showDetailsModal && setShowDetailModal(true)}
      >
        <div className={style.book_image}>
          <img
            src={product.thumbnail}
            alt=""
            className="src"
            width="100%"
            height="100%"
          />
        </div>

        <div className={style.book_content}>
          <div className={style.book_title}>{product.title}</div>

          <div className={style.book_authors}>
            {Array.isArray(product.authors) &&
              product.authors
                .map((author) => author.firstName + " " + author.lastName)
                .join(", ")}
          </div>

          <div className={style.book_action}>
            {!isBought ? (
              <div className={style.book_price}>
                {product.unitPrice} €{" "}
                <span>{I18N[language].book.per_year}</span>
              </div>
            ) : (
              <div className={style.book_bought}>
                <CheckMarkIcon />
                {I18N[language].book.bought}
              </div>
            )}

            <div className={style.book_button}>
              {isBought ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={style.book_access_button}
                  href={`${TTP_OECCBB_URL_AI}?token=${token}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {I18N[language].book.accessAI}
                </a>
              ) : (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={style.book_buy_button}
                  onClick={(e) => {
                    e.stopPropagation();
                    showPaymentModal();
                  }}
                >
                  {I18N[language].Purchase}
                </a>
              )}
            </div>
          </div>
          {/* <div className={style.book_version}>
            {!isBought
              ? `${I18N[language].book.untilTheReleaseOfTheVersion}`
              : expireAt != null
                ? `${I18N[language].book.accessExpiration} ${expireAt}`
                : `${I18N[language].book.accessPermanent}`}
          </div> */}

          <div
            className={style.book_channel_avatar}
            style={{ backgroundImage: `url(${organizationImage})` }}
          ></div>

          <div className={style.book_paper}>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://taxandmanagement.be"}
              onClick={(e) => e.stopPropagation()}
            >
              {" "}
              {I18N[language].book.wantToBuyThePrintedVersion}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {viewType === "slider" && sliderView()}
      {viewType === "list" && listView()}
      {/* {showModal && (
        <RegistrationModal
          token={token}
          product={product}
          user={user}
          language={language}
          env={env}
          fiduciaires={fiduciaires}
          showModal={showModal}
          setShowModal={setShowModal}
          showFiduciareModal={showFiduciareModal}
        />
      )} */}
      {showDetailModal && (
        <ProductDetailModal
          product={product}
          language={language}
          showModal={showDetailModal}
          setShowModal={setShowDetailModal}
        />
      )}
    </>
  );
}
