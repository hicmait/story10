import styles from "./Avatar.module.scss";
import { getUserNameForAvatar } from "../../utils";

export interface AvatarProps {
  showInfo?: boolean;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  avatarSignature?: string;
  noMargin?: boolean;
  isLarge?: boolean;
}

export const Avatar = ({
  avatarUrl = "",
  showInfo = true,
  firstName,
  lastName,
  avatarSignature,
  noMargin,
  isLarge,
}: AvatarProps) => {
  let avatarName = "";
  if (firstName) {
    avatarName += firstName;
  }
  if (lastName) {
    avatarName += " " + lastName;
  }

  return (
    <div className={styles.avatarContainer}>
      {avatarUrl ? (
        <div
          className={`${styles.avatar} ${
            noMargin ? styles.avatar_nomargin : ""
          } ${isLarge ? styles.avatar_large : ""}`}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        ></div>
      ) : (
        <div
          className={`${styles.avatar} ${styles.emptyAvatar} ${
            noMargin ? styles.avatar_nomargin : ""
          }`}
        >
          {getUserNameForAvatar(firstName, lastName)}
        </div>
      )}
      {showInfo && (
        <div className={styles.avatarInfo}>
          <div className={styles.avatarName}>{avatarName}</div>
          {avatarSignature && (
            <div className={styles.avatarSignature}>{avatarSignature}</div>
          )}
        </div>
      )}
    </div>
  );
};
