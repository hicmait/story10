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
    article: articles[Math.floor(Math.random() * 20)],
    size: "small",
    isFetching: false,
    // navCommunityId:"",
    env: "production",
    onEdit: () => console.log("edit"),
    expert: false,
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

/*
export const DefaultSmall = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          article={articles[Math.floor(Math.random() * 20)]}
          size="small"
          isFetching={boolean("isFetching", false)}
          navCommunityId=""
          env="v2"
          onEdit={() => console.log("edit")}
        />
      </div>
    </div>
  </div>
);

export const DefaultLarge = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-8">
        <Article
          article={articles[Math.floor(Math.random() * 20)]}
          size="large"
          showSummary={true}
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onLike={() => console.log("like")}
          user={{ id: 12 }}
        />
      </div>
    </div>
  </div>
);

export const Type2 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          article={articles[Math.floor(Math.random() * 20)]}
          showSummary={true}
          type="type2"
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onLike={() => console.log("like")}
        />
      </div>
    </div>
  </div>
);

export const Type3 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6">
        <Article
          article={articles[Math.floor(Math.random() * 20)]}
          showSummary={true}
          type="type3"
          showStatus={boolean("showStatus", false)}
          onDelete={() => console.log("onDelete")}
          onPublish={() => console.log("onPublish")}
          onEdit={() => console.log("onEdit")}
          saveFavorite={() => console.log("saveFavorite")}
          isFetching={boolean("isFetching", false)}
        />
      </div>
    </div>
  </div>
);

export const Type4 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          article={articles[Math.floor(Math.random() * 20)]}
          showSummary={true}
          type="type4"
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onLike={() => console.log("like")}
          user={{ id: 12 }}
        />
      </div>
    </div>
  </div>
);

export const Type5 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          article={articles[4]}
          showSummary={true}
          type="type5"
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onLike={() => console.log("like")}
          user={{ id: 12 }}
        />
      </div>
    </div>
  </div>
);

export const Type6 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6">
        <Article
          article={articles[0]}
          showSummary={true}
          type="type6"
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onLike={() => console.log("like")}
          user={{ id: 12 }}
        />
      </div>
    </div>
  </div>
);

export const Type7 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          article={articles[0]}
          showSummary={true}
          type="type7"
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

export const Type7Large = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6">
        <Article
          article={articles[0]}
          showSummary={true}
          type="type7"
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
export const Type7Expert = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          article={articles[0]}
          type="type7"
          isFetching={boolean("isFetching", false)}
          expert={true}
        />
      </div>
    </div>
  </div>
);

export const Type8 = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6">
        <Article
          article={articles[0]}
          showSummary={true}
          type="type8"
          isFetching={boolean("isFetching", false)}
          onEdit={() => console.log("edit")}
          onLike={() => console.log("like")}
          user={{ id: 12 }}
        />
      </div>
    </div>
  </div>
);

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
