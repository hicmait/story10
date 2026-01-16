import { useState } from "react";

import Tabs from "./Tabs";

export default {
  title: "Common/Tabs",
  component: Tabs,
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

const TABS = [
  {
    id: "tab1",
    label: "Tab 1",
  },
  {
    id: "tab2",
    label: "Tab 2",
  },
];
const ButtonType = ["primary", "warning", "success", "danger", "secondary"];
export const Primary = () => {
  const [currentTab, setCurrentTab] = useState();
  return (
    <Tabs
      tabs={TABS}
      activeTab={currentTab}
      ButtonType={"primary"}
      selectTab={(tab) => setCurrentTab(tab)}
    />
  );
};
export const SimpleType = () => {
  const [currentTab, setCurrentTab] = useState();
  return (
    <Tabs
      tabs={TABS}
      type={"simple"}
      ButtonType={"primary"}
      activeTab={currentTab}
      selectTab={(tab) => setCurrentTab(tab)}
    />
  );
};
