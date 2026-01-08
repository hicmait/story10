import { isEmpty } from "./common";

export const getUserAvatarUrl = ({ avatar, avatarUrl }) => {
  if (isEmpty(avatar) && isEmpty(avatarUrl)) {
    return undefined;
  }

  return avatarUrl || `https://api.tamtam.pro/${avatar}`;
};
