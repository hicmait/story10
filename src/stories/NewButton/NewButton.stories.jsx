import NewButton from "./NewButton";

export default {
  title: "Common/NewButton",
  component: NewButton,
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

export const Share = () => (
  <NewButton
    inProcess={false}
    disabled={false}
    variant="share"
    onClick={() => alert("share")}
    children="Partager"
  />
);
export const Cancel = () => (
  <NewButton
    inProcess={false}
    variant="cancel"
    onClick={() => alert("cancel")}
    children="Annuler"
  />
);
export const Save = () => (
  <NewButton
    inProcess={false}
    variant="save"
    disabled={false}
    onClick={() => alert("save")}
    children="Enregistrer"
  />
);
export const show_more = () => (
  <NewButton
    inProcess={false}
    variant="showmore"
    onClick={() => alert("show more")}
    children="Voir plus"
  />
);
export const register = () => (
  <NewButton
    inProcess={false}
    variant="register"
    onClick={() => alert("register")}
    children="S'inscrire"
  />
);
