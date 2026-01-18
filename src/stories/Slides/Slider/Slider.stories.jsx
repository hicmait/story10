import { Slider } from "./Slider";
import { Default as ArticleSlide } from "../ArticleSlide/ArticleSlide.stories";
import { Default as EventSlide } from "../EventSlide/EventSlide.stories";
import { Default as MembershipSlide } from "../MembershipSlide/MembershipSlide.stories";
import { Default as PremiumSlide } from "../PremiumSlide/PremiumSlide.stories";
import { Type1 as CycleSlide } from "../CycleSlide/CycleSlide.stories";
import { Type2 as EssentialSlide } from "../CycleSlide/CycleSlide.stories";
import { Type3 as SeasonSlide } from "../CycleSlide/CycleSlide.stories";
import { Default as CustomisedSlide } from "../CustomisedSlide/CustomisedSlide.stories";

export default {
  title: "Slides/Slider",
  component: Slider,
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
  <Slider
    cards={[
      <ArticleSlide />,
      <EventSlide />,
      <MembershipSlide />,
      <PremiumSlide />,
      <CycleSlide />,
      <EssentialSlide />,
      <SeasonSlide />,
      <CustomisedSlide />,
    ]}
    autoPlay={true}
  />
);
