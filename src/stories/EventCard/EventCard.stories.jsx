import { EventCard } from "./EventCard";
import events from "./data.json";

export default {
  title: "Event/EventCard",
  component: EventCard,
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
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <EventCard
          language="fr"
          isSelected={false}
          event={events[0]}
          index={1}
          eventUrl={"https://event-pro.rc2.tamtam.pro/"}
          isFetching={false}
          env={"local"}
        />
      </div>
    </div>
  </div>
);

export const Expert = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <EventCard
          language="fr"
          event={events[0]}
          index={1}
          eventUrl={"https://event-pro.rc2.tamtam.pro/"}
          isFetching={false}
          expert={true}
          env={"local"}
        />
      </div>
    </div>
  </div>
);

export const ExpertDarkMode = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <EventCard
          language="fr"
          event={events[0]}
          index={1}
          eventUrl={"https://event-pro.rc2.tamtam.pro/"}
          isFetching={false}
          expert={true}
          darkMode={true}
          env={"local"}
        />
      </div>
    </div>
  </div>
);
