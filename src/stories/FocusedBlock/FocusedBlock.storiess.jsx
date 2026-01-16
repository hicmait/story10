import React from "react";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import { FocusedBlock } from "./FocusedBlock";
import data from "./data.json";

const events = data.data.events;
const cycles = data.data.cycles;

export default {
  title: "Slides/FocusedBlock",
  component: FocusedBlock,
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

export const Default = () => (
  <FocusedBlock
    events={events}
    cycles={cycles}
    language={"fr"}
    isFetching={false}
    env={"production"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    isMasterChaine={false}
    isAdmin={false}
    isOFFFcourse={false}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
  />
);
