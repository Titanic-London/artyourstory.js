import "./Text.css";

export function Text({ children, size }) {
  const classNames = ["text"];

  if (size === "s") {
    classNames.push("text-s");
  } else if (size === "m") {
    classNames.push("text-m");
  } else if (size === "l") {
    classNames.push("text-l");
  }

  return <span className={classNames.join(" ")}>{children}</span>;
}
