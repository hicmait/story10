import { ArticleListCarousel } from "./ArticleListCarousel";

import jsonData from "./data.json";
const articles = jsonData.data;

export default {
  title: "Blog/ArticleListCarousel",
  component: ArticleListCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

const dispositions = ["type7", "type3", "type7", "default", "type2"];

export const Default = () => (
  <div style={{ padding: "3rem" }}>
    <div className="grid-container">
      <ArticleListCarousel dispositions={dispositions} articles={articles} />
    </div>
  </div>
);
