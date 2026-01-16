import { UserCard } from "./UserCard";

import jsonData from "./data.json";

const users = jsonData.data;

export default {
  title: "Blog/UserCard",
  component: UserCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // argTypes: {
  //   inProcess: {
  //     control: "//   variant:{
  //     control: "radio",
  //     options: ["primary", "secondary", "danger", "success"],
  //   },
  // },
};

export const Light = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <UserCard
          theme="light"
          user={users[Math.floor(Math.random() * 10)]}
          isFetching={false}
          displayUserMetaFormModal={(e) => console.log(e)}
        />
      </div>
    </div>
  </div>
);

export const LightEdit = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <UserCard
          theme="light"
          showAvatarEdit={true}
          onAvatarClick={() => console.log("onAvatarClick")}
          user={users[Math.floor(Math.random() * 10)]}
          isFetching={false}
          displayUserMetaFormModal={(e) => console.log(e)}
        />
      </div>
    </div>
  </div>
);

export const Dark = () => (
  <div style={{ background: "#29394d", padding: "3rem" }}>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-3">
          <UserCard
            theme="dark"
            user={users[Math.floor(Math.random() * 10)]}
            isFetching={false}
            displayUserMetaFormModal={(e) => console.log(e)}
          />
        </div>
      </div>
    </div>
  </div>
);

export const DarkEdit = () => (
  <div style={{ background: "#29394d", padding: "3rem" }}>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-3">
          <UserCard
            theme="dark"
            showAvatarEdit={true}
            onAvatarClick={() => console.log("onAvatarClick")}
            user={users[Math.floor(Math.random() * 10)]}
            isFetching={false}
            displayUserMetaFormModal={(e) => console.log(e)}
          />
        </div>
      </div>
    </div>
  </div>
);
