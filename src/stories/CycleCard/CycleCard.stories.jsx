import cycles from "./data.json";
import { CycleCard } from "./CycleCard";

export default {
  title: "Event/CycleCard",
  component: CycleCard,
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

const onClick = (id, type, pathname) => {
  alert(`id: ${id}, type: ${type}, pathname: ${pathname}`);
};

export const Type1 = () => (
  <CycleCard
    cycle={cycles[0]}
    language={"fr"}
    isFetching={false}
    env={"local"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    isOFFFcourse={false}
    isAdmin={false}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
  />
);

export const Type2 = () => {
  return (
    <CycleCard
      cycle={cycles[1]}
      language={"fr"}
      isFetching={false}
      env={"production"}
      isUserMember={false}
      isUserPremium={false}
      queryParams={{}}
      isOFFFcourse={false}
      isAdmin={false}
      token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
    />
  );
};

export const Type3 = () => (
  <CycleCard
    cycle={cycles[2]}
    language={"fr"}
    isFetching={false}
    env={"production"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    onClick={onClick}
    isOFFFcourse={false}
    isAdmin={false}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
  />
);
