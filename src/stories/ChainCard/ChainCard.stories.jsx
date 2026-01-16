import { ChainCard } from "./ChainCard";
import avatars from "./data.json";

export default {
  title: "Blog/ChainCard",
  component: ChainCard,
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
        <ChainCard
          theme="light"
          lng="fr"
          isSelected={false}
          user={avatars[0]}
          isFetching={false}
        />
      </div>
    </div>
  </div>
);

export const LightEdit = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <ChainCard
          theme="light"
          lng="fr"
          showAvatarEdit={true}
          onAvatarClick={() => console.log("onAvatarClick")}
          user={avatars[0]}
          isFetching={false}
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
          <ChainCard
            lng="fr"
            theme="dark"
            user={avatars[0]}
            isFetching={false}
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
          <ChainCard
            theme="dark"
            lng="fr"
            showAvatarEdit={true}
            onAvatarClick={() => console.log("onAvatarClick")}
            user={avatars[0]}
            isFetching={false}
          />
        </div>
      </div>
    </div>
  </div>
);
