import { useState } from "react";
import { ArtistsRoute } from "./ArtistsRoute";
import { Button } from "./Button";
import { HomeRoute } from "./HomeRoute";
import { Navbar } from "./Navbar";
import { loginWithGoogle } from "./Authentication";
import { ShowPage } from "./ShowPage";

function App() {

  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  console.log({ user });

  return (
    <>
      <Navbar user={user} />
      <Button
        onClick={() => {
          setRoute("home");
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          setRoute("artists");
        }}
      >
        See artists
      </Button>
      <Button
        onClick={() => {
          setRoute("showpage");
        }}
      >
        Show Page
      </Button>
      {user == null ? (
        <Button onClick={() => loginWithGoogle(setUser)}>
          Login with Google
        </Button>
      ) : null}
      {route === "home" ? <HomeRoute /> : null}
      {route === "artists" ? <ArtistsRoute /> : null}
      {route === "showpage" ? <ShowPage /> : null}
    </>
  );
}

export default App;
