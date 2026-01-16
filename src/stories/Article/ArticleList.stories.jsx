import { ArticleList } from "./ArticleList";
import jsonData from "./data.json";
const articles = jsonData.data;

export default {
  title: "Blog/ArticleList",
  component: ArticleList,
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

const dispositions = [
  "default",
  "type1",
  "type2",
  "type3",
  "type4",
  "type5",
  "type6",
  "type7",
];

export const Default = () => (
  <div style={{ padding: "3rem" }}>
    <ArticleList
      articles={articles}
      dispositions={dispositions}
      isFetching={false}
      navCommunityId={9}
      env="local"
      host="local.blog.tamtam.pro"
      saveFavorite={(articleId) => console.log(articleId)}
      onLike={(articleId, like) => console.log(articleId, like)}
      openModal={(article) => console.log(article)}
      onEdit={(articleId) => console.log(articleId)}
    />
  </div>
);

// export const Type2 = () => (
//   <div class="grid-container">
//     <ArticleList
//       type="type2"
//       articles={articles}
//       isFetching={boolean("isFetching", false)}
//     />
//   </div>
// );

// export const Type3 = () => (
//   <div class="grid-container">
//     <ArticleList
//       type="type3"
//       articles={articles}
//       isFetching={boolean("isFetching", false)}
//     />
//   </div>
// );

// export const Type4 = () => (
//   <div class="grid-container">
//     <ArticleList
//       type="type4"
//       articles={articles}
//       isFetching={boolean("isFetching", false)}
//     />
//   </div>
// );

// export const Type5 = () => (
//   <div class="grid-container">
//     <ArticleList
//       type="type5"
//       articles={articles}
//       isFetching={boolean("isFetching", false)}
//     />
//   </div>
// );

// export const Type6 = () => (
//   <div class="grid-container">
//     <ArticleList
//       type="type6"
//       articles={articles}
//       isFetching={boolean("isFetching", false)}
//     />
//   </div>
// );

// export const Type7 = () => (
//   <div class="grid-container">
//     <ArticleList
//       type="type7"
//       articles={articles}
//       isFetching={boolean("isFetching", false)}
//     />
//   </div>
// );
