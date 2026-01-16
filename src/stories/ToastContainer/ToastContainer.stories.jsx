import { FlashMessage, Toast } from "./ToastContainer";

export default {
  title: "Common/ToastContanier",
  component: FlashMessage,
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

export const Error = () => (
  <div>
    {" "}
    <FlashMessage />{" "}
    <button onClick={() => Toast.error("message data error")}>ok</button>
  </div>
);
export const Success = () => (
  <div>
    {" "}
    <FlashMessage />{" "}
    <button onClick={() => Toast.success("message data saved ")}>ok</button>
  </div>
);
export const Warning = () => (
  <div>
    {" "}
    <FlashMessage />{" "}
    <button onClick={() => Toast.warning("message data warning")}>ok</button>
  </div>
);
