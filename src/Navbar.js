import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Text } from "./Text";
import { Icon } from "./Icon";
import "./Navbar.css";
import { Button } from "./Button";

export function Navbar({ user }) {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <Text size="l" bold={true} color="subtle">
          ArtYourStory
        </Text>
      </div>
      <Button>
        <Icon color="subtle" icon={faHeart} />
      </Button>
      <Button>
        <Icon color="subtle" icon={faBasketShopping} />
      </Button>
      {user != null ? (
        <img src={user.photoURL} alt="user profile" className="user-profile" />
      ) : null}
    </header>
  );
}
