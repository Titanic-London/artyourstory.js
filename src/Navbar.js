import { Text } from "./Text";
import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar">
      <Text size="l" bold={true} color="light">
        AYS
      </Text>
    </header>
  );
}
