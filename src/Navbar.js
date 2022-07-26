import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Text } from "./Text";
import { Icon } from "./Icon";
import "./Navbar.css";
import { Button } from "./Button";

export function Navbar({ user }) {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <Text size="l" bold={true} color="light">
          AYS
        </Text>
      </div>
      <Button>
        <Icon color="light" icon={faHeart} />
      </Button>
      <Button>
        <Icon color="light" icon={faBasketShopping} />
      </Button>
      {user != null ? (
        <img src={user.photoURL} height={100} width={100} />
      ) : null}
    </header>
  );
}
