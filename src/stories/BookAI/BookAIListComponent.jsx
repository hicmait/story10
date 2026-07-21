"use client";
import React, { useEffect, useState, useMemo } from "react";
import cn from "classnames";
import Slider from "react-slick";

// import BookAI from "./BookAI";
import style from "./BookAI.module.scss";
import { getAuthAccess, getProducts } from "./api";
import { getAiUrl, getApiUrl, isEmpty } from "../../utils";
// import { TTPSlider } from "../../common/components/sliders/ttp-slider";
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

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: false,
  };
  return <h1>{translate("livres_numerique")}</h1>;
};
