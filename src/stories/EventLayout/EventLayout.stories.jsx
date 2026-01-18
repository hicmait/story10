import events from "./data.json";
import { EventLayout } from "./EventLayout";

export default {
  title: "Event/EventLayout",
  component: EventLayout,
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

const indexedEvents = events.reduce((acc, event) => {
  acc[event.nameFr || event.nameNl || event.nameEn] = event;
  return acc;
}, {});

export const Default = () => (
  <EventLayout
    event={events[0]}
    language={"fr"}
    isFetching={false}
    env={"production"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
    userId={null}
    dict={null}
    isAdmin={false}
    isOFFFcourse={false}
    isMasterChaine={false}
  />
);
