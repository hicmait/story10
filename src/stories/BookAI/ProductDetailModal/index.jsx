import React from "react";
import Modal from "react-modal";
import styles from "./ProductDetailModal.module.scss";
import IconClose from "../../Icons/IconClose";
import { I18N } from "../../../i18n";

const ProductDetailModal = ({ product, language, showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  const formatPrice = (price) =>
    Number(price).toLocaleString("fr-BE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick
    >
      <button className={styles.closeButton} onClick={handleClose}>
        <IconClose width={18} height={18} />
      </button>

      <div className={styles.header}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.thumbnail}
        />
        <div className={styles.headerInfo}>
          <h2 className={styles.title}>{product.title}</h2>

          {product.description && (
            <p className={styles.description}>{product.description}</p>
          )}

          {product.issuer && (
            <div className={styles.issuer}>
              {product.issuer.avatarUrl && (
                <img
                  src={product.issuer.avatarUrl}
                  alt={product.issuer.name}
                  className={styles.issuerAvatar}
                />
              )}
              <span className={styles.issuerName}>{product.issuer.name}</span>
            </div>
          )}

          {Array.isArray(product.authors) && product.authors.length > 0 && (
            <div className={styles.authors}>
              {product.authors
                .map((a) => a.full_name || `${a.firstName || ""} ${a.lastName || ""}`.trim())
                .filter(Boolean)
                .join(", ")}
            </div>
          )}
        </div>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>
            {I18N[language]?.book?.unitPrice || "Prix unitaire"}
          </span>
          <span className={styles.priceValue}>
            {formatPrice(product.unitPrice)} €
          </span>
        </div>
        {product.excludingVatAmount != null && (
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>
              {I18N[language]?.book?.excludingVat || "Hors TVA"}
            </span>
            <span className={styles.priceValue}>
              {formatPrice(product.excludingVatAmount)} €
            </span>
          </div>
        )}
        {product.includingVatAmount != null && (
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>
              {I18N[language]?.book?.includingVat || "TVA incluse"}
            </span>
            <span className={styles.totalPrice}>
              {formatPrice(product.includingVatAmount)} €
            </span>
          </div>
        )}
      </div>

      {product.selling_url && (
        <div className={styles.actions}>
          <a
            href={product.selling_url}
            target="_blank"
            rel="noreferrer"
            className={styles.buyButton}
          >
            {I18N[language]?.Purchase || "Acheter"}
          </a>
        </div>
      )}
    </Modal>
  );
};

export default ProductDetailModal;
