import { EventSlide } from "./EventSlide";
import data from "./data.json";

const event = data.events[0];

export default {
  title: "Slides/EventSlide",
  component: EventSlide,
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
  <EventSlide
    event={event}
    language={"fr"}
    isFetching={false}
    env={"local"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    isMasterChaine={false}
    isAdmin={false}
    isOFFFcourse={false}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
  />
);
