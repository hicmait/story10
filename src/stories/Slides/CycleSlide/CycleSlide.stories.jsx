import data from "./data.json";
import { CycleSlide } from "./CycleSlide";

const cycle = data.cycles[0];
const essential = data.cycles[1];
const season = data.cycles[2];

export default {
  title: "Slides/CycleSlide",
  component: CycleSlide,
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

export function Type1() {
  return (
    <CycleSlide
      cycle={cycle}
      language={"fr"}
      isFetching={false}
      env={"local"}
      isUserMember={false}
      isUserPremium={false}
      queryParams={{}}
      isMasterChaine={false}
      isAdmin={false}
      isOFFFcourse={false}
      token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
    />
  );
}

export const Type2 = () => (
  <CycleSlide
    cycle={essential}
    language={"fr"}
    isFetching={false}
    env={"production"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    isMasterChaine={false}
    isAdmin={false}
    isOFFFcourse={false}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
  />
);

export const Type3 = () => (
  <CycleSlide
    cycle={season}
    language={"fr"}
    isFetching={false}
    env={"production"}
    isUserMember={false}
    isUserPremium={false}
    queryParams={{}}
    isMasterChaine={false}
    isAdmin={false}
    isOFFFcourse={false}
    token="b939a3e931ad83d6cdfa258b7f77ec6eac734778"
  />
);
