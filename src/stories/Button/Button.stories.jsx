import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    inProcess: {
      control: "boolean",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger", "success"],
    },
  },
};

export const Primary = () => (
  <div style={{ padding: "3rem" }}>
    <Button inProcess={false} variant="primary" children="Primary" />
  </div>
);
export const Secondary = () => (
  <div style={{ padding: "3rem" }}>
    <Button inProcess={false} variant="secondary" children="Secondary" />
  </div>
);
export const Danger = () => (
  <div style={{ padding: "3rem" }}>
    <Button
      inProcess={false}
      variant="danger"
      children="Danger"
      onClick={() => alert("okkkkk")}
    />
  </div>
);
export const Success = () => (
  <div style={{ padding: "3rem" }}>
    <Button inProcess={false} variant="success" children="Success" />
  </div>
);
