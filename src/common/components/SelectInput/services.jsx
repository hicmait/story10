import React from "react";
import { components } from "react-select";

export const getSelectInputStyles = (
  isFilled,
  width,
  backgroundColor,
  centered,
) => ({
  control: (base) => ({
    ...base,
    backgroundColor: backgroundColor || (isFilled ? "#6D7F92" : "#F1F2F4"),
    border: "none",
    borderRadius: "30px",
    boxShadow: "none",
    padding: "9px 15px",
    minHeight: "unset",
    cursor: "pointer",
    minWidth: width || "88px",
    transition: "background-color 0.2s ease-in-out",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0px",
    alignItems: "normal",
    height: "14px",
    ...(centered && { justifyContent: "center" }),
  }),
  singleValue: (base) => ({
    ...base,
    color: isFilled ? "#FFFFFF" : "#5E6B78",
    fontSize: "12px",
    lineHeight: "normal",
    fontWeight: "501",
    letterSpacing: "0.24px",
    margin: "0px",
    ...(centered && { width: "100%", textAlign: "center" }),
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6D7F92",
    fontSize: "12px",
    fontWeight: "501",
    lineHeight: "normal",
    letterSpacing: "0.24px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    zIndex: 1000,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "4px",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#29394D",
    fontSize: "12px",
    fontWeight: "501",
    backgroundColor: state.isFocused ? "#F3F4F6" : "white",
    padding: "8px 10px",
    borderRadius: "4px",
    margin: "2px 0",
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F3F4F6",
    },
    ...(state.isSelected && {
      backgroundColor: "#C7E8FE",
      "&:hover": {
        backgroundColor: "#C7E8FE",
      },
    }),
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: isFilled ? "white" : "#5E6B78",
    padding: 0,
    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    transition: "transform .3s ease-in-out",
    ":hover": {
      color: isFilled ? "white" : "#5E6B78",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "white",
    padding: 0,
    position: "absolute",
    right: "10px",
    svg: {
      width: 16,
      height: 16,
    },
    ":hover": {
      color: isFilled ? "white" : "#5E6B78",
    },
  }),
  indicatorsContainer: (base) => ({
    ...base,
    position: "relative",
    ...(centered && { display: "none" }),
  }),
});

const PolygonIcon = ({ fill }) => (
  <svg
    width='10'
    height='6'
    viewBox='0 0 10 6'
    fill='none'
    style={{ display: "block" }}
  >
    <path d='M5 6L0 0H10L5 6Z' fill={fill || "currentColor"} />
  </svg>
);

export const getDropdownIndicator = (props, isFilled) => (
  <components.DropdownIndicator {...props}>
    <PolygonIcon fill={!isFilled ? "#6D7F92" : "#FFFFFF"} />
  </components.DropdownIndicator>
);
