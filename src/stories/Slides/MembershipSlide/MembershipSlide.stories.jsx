import data from "./data.json";
import { MembershipSlide } from "./MembershipSlide";

const membership = data.memberships[0];

export default {
  title: "Slides/MembershipSlide",
  component: MembershipSlide,
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
  <MembershipSlide
    membership={membership}
    language={"fr"}
    env="production"
    isFetching={false}
  />
);
