import classNames from "classnames";

import "./Text.css";

export function Text({ children, size, bold, color }) {
  return (
    <span
      className={classNames("text", {
        "text-s": size === "s",
        "text-m": size === "m",
        "text-l": size === "l",
        "text-bold": bold === true,
        "text-color-primary": color === "primary" || color == null,
        "text-color-secondary": color === "secondary",
        "text-color-subtle": color === "subtle",
        "text-color-light": color === "light",
      })}
    >
      {children}
    </span>
  );
}
