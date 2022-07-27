import {
  faMagnifyingGlass,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "./Text";
import { Icon } from "./Icon";
import "./Navbar.css";
import { Button } from "./Button";

export function Navbar({ user }) {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <Text size="l" bold={true} color="secondary">
          ArtYourStory
        </Text>
      </div>
      <Button>
        <Icon color="secondary" size="l" icon={faMagnifyingGlass} />
      </Button>
      <Button>
        <Icon color="secondary" size="l" icon={faBasketShopping} />
      </Button>

      <div class="dropdown_list">
        <Button class="dropdown_button" onclick="show_list()">
          {user != null ? (
            <img
              src={user.photoURL}
              alt="user profile"
              className="user-profile"
            />
          ) : null}
        </Button>

        <div id="courses_id" class="courses">
          <li>
            <a href="">Dash Board</a>
          </li>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Logout</a>
          </li>
        </div>
      </div>
      {/* <script>
        function show_list() {
          var courses = document.getElementById("courses_id");

          if (courses.style.display == "block") {
              courses.style.display = "none";
          } else {
              courses.style.display = "block";
          }
        }
        window.onclick = function (event) {
            if (!event.target.matches('.dropdown_button')) {
                document.getElementById('courses_id')
                    .style.display = "none";
            }
        }
    </script> */}
    </header>
  );
}
