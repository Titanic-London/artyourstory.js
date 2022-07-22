import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import { Text } from "./Text";
import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar">
      <Text size="l" bold={true} color="light">
        AYS
      </Text>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faBasketShopping} />
    </header>
  );
}
