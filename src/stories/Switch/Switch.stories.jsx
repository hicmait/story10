import Switch from "./Switch";
import DisabledSwitch from "./Switch/DisabledSwitch";
import MultiSwitch from "./MultiSwitch";
import MultiSwitchAll from "./MultiSwitchAll";
import MultiSwitchCheckbox from "./MultiSwitchCheckbox";

export default {
  title: "Common/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

let lng = ["Anglais", "Français", "Néerlandais"];
let labels = ["label1", "label2", "label3"];
let medias = ["Image", "Vidéo", "Documents"];
let status = ["Draft", "Ready", "Published"];
let vals = ["val1", "val2", "val3"];
let isChecked = [false, false, false];

export const Default = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <Switch name="switch" onChange={(status) => console.log(status)} />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <DisabledSwitch name="disabledswitch" isChecked={false} />
    </div>
  );
};

export const MultiRadio = () => (
  <div style={{ padding: "3rem" }}>
    <MultiSwitch
      title="Langues Autorisés"
      name="multiswitch"
      labels={lng}
      vals={vals}
      selectedValue={vals[2]}
      afterChange={(status) => console.log(status)}
      isHorizontal={false}
      isDark={false}
    />
  </div>
);

export const MultiCheckbox = () => (
  <div style={{ padding: "3rem" }}>
    <MultiSwitchCheckbox
      title="Status"
      name="multiswitch"
      labels={status}
      vals={vals}
      isChecked={isChecked}
      onChange={(status) => console.log(status)}
      isDark={false}
    />
  </div>
);

export const MultiAll = () => (
  <div style={{ padding: "3rem" }}>
    <MultiSwitchAll
      title="Type de média autorisé"
      name="multiswitch"
      labels={medias}
      vals={vals}
      onChange={(status) => console.log(status)}
      isChecked={isChecked}
      isDark={false}
    />
  </div>
);
