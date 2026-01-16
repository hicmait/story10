import { Component } from "react";
import classnames from "classnames";

import IconLoader from "../Icons/IconLoader";

import styles from "./NewButton.module.scss";

class NewButton extends Component {
  render() {
    const { inProcess, variant = "primary", children, disabled } = this.props;

    return (
      <button
        className={classnames(
          styles.button,
          styles[variant],
          disabled && styles.disabled
        )}
        onClick={() => this.props.onClick()}
      >
        {inProcess ? (
          <IconLoader />
        ) : (
          <div>
            {children}{" "}
            {variant == "showmore" && (
              <i
                className={classnames(
                  "icon-sb-arrow-down",
                  styles.showmoreicon
                )}
              >
                {" "}
              </i>
            )}{" "}
          </div>
        )}
      </button>
    );
  }
}

export default NewButton;
