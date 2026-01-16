import { useState } from "react";
import { Tag } from "./Tag";

export default {
  title: "Blog/Tag",
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export const Basic = () => {
  const [tags, setTags] = useState([]);
  return (
    <Tag
      lng={"fr"}
      token={"fc11dbe508b7af7f082b86c4f1bab9cd868e34bf"}
      tags={tags}
      allowCreateTags={true}
      limitSuperTag={1}
      appEnv={"staging"}
      onChange={(val) => setTags(val)}
      apiUrl={"https://api.staging.tamtam.pro"}
    />
  );
};

const SELECT_STYLES = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isDisabled ? "#e6e6e6" : "#F8F9FA",
    boxShadow: "none",
    border: state.isFocused ? "1px solid #2495E1" : "1px solid #B2BCC6",
    "&:hover": {
      borderColor: state.isFocused ? "#18A0FB" : "#B2BCC6",
    },
    padding: 0,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#6D7F92",
    fontWeight: 400,
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: "0",
    paddingBottom: "0",
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    zIndex: 2,
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: "left",
    fontSize: "12px",
    lineHeight: "14px",
  }),
  multiValue: (provided, { data }) => ({
    ...provided,
    backgroundColor: data.color ? data.color : "#F1F2F4",
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    fontSize: ".75rem",
    textTransform: "uppercase",
    color: "inherit",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#29394D",
  }),
};

export const Custom = () => {
  const [tags, setTags] = useState([]);
  return (
    <Tag
      lng={"fr"}
      token={"00882984434b82623e1831486530a29d44efffd9"}
      tags={tags}
      allowCreateTags={true}
      limitSuperTag={2}
      appEnv={"local"}
      onChange={(val) => setTags(val)}
      apiUrl={"http://local.api.tamtam.pro"}
      styles={SELECT_STYLES}
    />
  );
};

export const Creatable = () => {
  const [tags, setTags] = useState([]);
  return (
    <Tag
      lng={"fr"}
      token={"00882984434b82623e1831486530a29d44efffd9"}
      tags={tags}
      allowCreateTags={true}
      limitSuperTag={2}
      appEnv={"local"}
      onChange={(val) => setTags(val)}
      apiUrl={"http://local.api.tamtam.pro"}
      styles={SELECT_STYLES}
    />
  );
};
