import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  onClick,
  rightIcon,
  leftIcon,
  rounded = false,
  disabled = false,
  text = false,
  large = false,
  small = false,
  outline = false,
  to,
  href,
  primary = false,
  children,
  upload,
  follow,
  following,
  login,
  enablesound,
  ...passAvailable
}) {
  let Comp = "div";

  const available = {
    ...passAvailable,
  };

  if (disabled) {
    delete available.onClick;
  }

  if (to) {
    available.to = to;
    Comp = Link;
  } else if (href) {
    available.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
    upload,
    follow,
    following,
    login,
    enablesound,
  });

  return (
    <Comp className={classes} {...available} onClick={onClick}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
