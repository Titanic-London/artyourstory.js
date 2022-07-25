import { useState } from "react";
import { ArtistsRoute } from "./ArtistsRoute";
import { Button } from "./Button";
import { HomeRoute } from "./HomeRoute";
import { Navbar } from "./Navbar";

function App() {
  const [route, setRoute] = useState("home");

  return (
    <>
      <Navbar />
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
      {route === "home" ? <HomeRoute /> : null}
      {route === "artists" ? <ArtistsRoute /> : null}
    </>
  );
}

export default App;
