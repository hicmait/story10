import { AuthorCard } from "./AuthorCard";
import dataJson from "./data.json";
const authors = dataJson.data;

export default {
  title: "Blog/AuthorCard",
  component: AuthorCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = () => (
  <div style={{ padding: "3rem" }}>
    <div
      className="grid-container"
      style={{ background: "#FAFBFB", padding: "200px 20px 20px" }}
    >
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-4">
          <AuthorCard
            onAvatarClick={() => console.log("onAvatarClick")}
            author={authors[Math.floor(Math.random() * 34)]}
            lng="en"
            isFetching={false}
          />
        </div>
      </div>
    </div>
  </div>
);

export const FetchingAuthor = () => (
  <div style={{ padding: "3rem" }}>
    <div
      className="grid-container"
      style={{ background: "#FAFBFB", padding: "200px 20px 20px" }}
    >
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-4">
          <AuthorCard isFetching={true} />
        </div>
      </div>
    </div>
  </div>
);
