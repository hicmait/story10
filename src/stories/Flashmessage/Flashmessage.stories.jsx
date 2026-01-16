import { useState } from "react";
import { Flashmessage, Taost } from "./Flashmessage";

export default {
  title: "Common/Flashmessage",
  component: Flashmessage,
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

export const Success = () => (
  <div>
    <Flashmessage
      openFlash={true}
      message="message success"
      status="SUCCESS"
      title="success"
      time={30000}
    />
    <button onClick={() => Taost("error")}>ok</button>
  </div>
);

export const Error = () => (
  <div>
    <Flashmessage
      openFlash={true}
      message="message Error"
      status="ERROR"
      title="error"
      time={30000}
    />
    <button onClick={() => Taost("error")}>ok</button>
  </div>
);

export const Warning = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Flashmessage
        openFlash={open}
        message="message warning"
        status="WARNING"
        title="warning"
        time={30000}
      />
      <button onClick={() => setOpen(false)}>ok</button>
    </div>
  );
};
