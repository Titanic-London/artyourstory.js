import classNames from "classnames";

import "./Button.css";

export function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={classNames("btn", {
        "btn-primary": type === "primary" || type == null,
        "btn-secondary": type === "secondary",
      })}
    >
      {children}
    </button>
  );
}
