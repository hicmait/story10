import React, { Component } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";
import IconLoader from "../Icons/IconLoader";

export const Button = ({
  inProcess,
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={classnames(styles.button, styles[variant])} {...props}>
      {inProcess ? <IconLoader /> : children}
    </button>
  );
};

export default Button;
