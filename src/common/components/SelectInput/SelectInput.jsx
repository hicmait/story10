import React from "react";
import Select from "react-select";
import { getDropdownIndicator, getSelectInputStyles } from "./services";

function SelectInput({
  id,
  options,
  value,
  onChange,
  placeholder,
  width,
  isClearable,
  isDisabled,
  isSearchable = false,
  backgroundColor,
  hideDropdownIndicator = false,
}) {
  return (
    <Select
      id={id}
      options={options}
      value={value}
      onChange={(newValue) => onChange(newValue)}
      placeholder={placeholder}
      styles={getSelectInputStyles(
        !!value,
        width,
        backgroundColor,
        hideDropdownIndicator,
      )}
      isSearchable={isSearchable}
      isClearable={isClearable}
      isDisabled={isDisabled}
      components={{
        DropdownIndicator: hideDropdownIndicator
          ? () => null
          : (props) => getDropdownIndicator(props, !!value),
      }}
    />
  );
}

export default SelectInput;
