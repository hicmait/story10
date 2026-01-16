import { FooterUA } from "./FooterUA";

export default {
  title: "Common/FooterUA",
  component: FooterUA,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

const policy = [{ label: "TERMS OF USE", url: "/" }];

const privacy = [
  { label: "v 1.3 fr", url: "/" },
  { label: "another one", url: "/" },
  { label: "new rub test", url: "/" },
];

const cookies = [
  { label: "manage_cookies", url: "/" },
  { label: "cookie one", url: "/" },
  { label: "cookie two", url: "/" },
];

const portalSwitch = [
  { label: "Portail collaborateur", url: "/" },
  { label: "Portail client", url: "/" },
  { label: "Portail publique", url: "/" },
  { label: "Configuration", url: "/" },
];

export const Basic = () => (
  <FooterUA
    primaryLogo={
      "https://tamtam.s3.eu-west-1.amazonaws.com/cdn/img/logo/ua.png"
    }
    secondaryLogo={
      "https://s3.tamtam.pro/local/storage/media/IMAGE/2174/AVATAR_998833879d2ecbb79d89cec53059dcd59e72d9f2.png"
    }
    firstList={portalSwitch}
    secondList={privacy}
    thirdList={cookies}
    fourthList={policy}
    navigateTo={(url) => {
      console.log(url);
    }}
  />
);
