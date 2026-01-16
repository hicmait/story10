import { PopupConfirm } from "./PopupConfirm";

export default {
  title: "Common/PopupConfirm",
  component: PopupConfirm,
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

export const Lock = () => (
  <PopupConfirm
    type="lock"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleLock")}
    inProcess={false}
    actionFailed={false}
    text="Voulez-vous vraiment verrouiller cette période "
    labelNo="Non, annuler"
    labelYes="Oui, verrouiller"
    labelError="Error"
    period="Semaine 5"
  />
);

export const Unlock = () => (
  <PopupConfirm
    type="unlock"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleUnlock")}
    inProcess={false}
    actionFailed={false}
    text="Voulez-vous vraiment déverrouiller cette période "
    labelNo="Non, annuler"
    labelYes="Oui, déverrouiller"
    labelError="Error"
    period="Semaine 7"
  />
);
