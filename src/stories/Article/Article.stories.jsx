// import type { Meta, StoryObj } from "@storybook/react-vite";

// import { fn } from "storybook/test";

import { Article } from "./Article.jsx";

import jsonData from "./data.json";

const articles = jsonData.data;

export default {
  title: "Blog/Article",
  component: Article,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { onClick: fn() },
};

export const DefaultSmall = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    size: "small",
    isFetching: false,
    // navCommunityId:"",
    env: "production",
    onEdit: () => console.log("edit"),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const DefaultLarge = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    size: "large",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-8">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type2 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type2",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type3 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type3",
    isFetching: false,
    showSummary: true,
    env: "production",
    showStatus: false,
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    onDelete: () => console.log("onDelete"),
    onPublish: () => console.log("onPublish"),
    saveFavorite: () => console.log("saveFavorite"),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-6">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type4 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type4",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type5 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type5",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type6 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type6",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-6">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type7 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type7",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    onRelevance: () => console.log("relevance"),
    onPosition: () => console.log("position"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type7Large = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type7",
    size: "large",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    onRelevance: () => console.log("relevance"),
    onPosition: () => console.log("position"),
    onTranslate: () => console.log("translate"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-6">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type7Expert = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type7",
    isFetching: false,
    env: "production",
    expert: true,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-4">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Type8 = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "type8",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-6">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Featured = {
  args: {
    article: articles[Math.floor(Math.random() * 12)],
    type: "featured",
    size: "large",
    isFetching: false,
    showSummary: true,
    env: "production",
    onEdit: () => console.log("edit"),
    onLike: () => console.log("like"),
    onRelevance: () => console.log("relevance"),
    onPosition: () => console.log("position"),
    onTranslate: () => console.log("translate"),
    user: { id: 12 },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12 medium-12">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};
/*

export const Featured = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-12">
        <Article
          article={articles[0]}
          showSummary={true}
          type="featured"
          size="large"
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onTranslate={() => console.log("translate")}
          onRelevance={() => console.log("relevance")}
          onPosition={() => console.log("position")}
          onLike={() => console.log("like")}
          user={{ id: 12 }}
        />
      </div>
    </div>
  </div>
);
*/
