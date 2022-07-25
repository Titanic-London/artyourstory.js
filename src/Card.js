import classNames from "classnames";
import "./Card.css";

export function Card({ children, color }) {
  return (
    <div
      className={classNames("card", {
        "card-primary": color === "primary" || color == null,
        "card-secondary": color === "secondary",
        "card-subtle": color === "subtle",
        "card-light": color === "light",
      })}
    >
      {children}
    </div>
  );
}
