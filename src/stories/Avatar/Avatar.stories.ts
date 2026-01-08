import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";

const meta = {
  title: "Common/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    avatarUrl:
      "https://s3.tamtam.pro/production/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
    showInfo: false,
  },
};

export const WithoutPicture: Story = {
  args: {
    firstName: "Emmanuel",
    lastName: "Degrève",
    showInfo: false,
  },
};

export const WithName: Story = {
  args: {
    avatarUrl:
      "https://s3.tamtam.pro/production/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
    firstName: "Emmanuel",
    lastName: "Degrève",
  },
};

export const WithInfo: Story = {
  args: {
    avatarUrl:
      "https://s3.tamtam.pro/production/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
    firstName: "Emmanuel",
    lastName: "Degrève",
    avatarSignature: "Partner et Conseil Fiscal",
  },
};
