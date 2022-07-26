import { Button } from "./Button";
import { Card } from "./Card";
import "./ArtistsRoutes.css";

export function ArtistsRoute() {
  return (
    <div className="artists-root">
      <div className="artists-root-main">
        <Card className="artists-root-main-card" color="subtle">
          Saki Unno
          <Card color="light">Here</Card>
          Saki's Artworks
          <Card color="light">Here</Card>
        </Card>
      </div>
      <div className="artists-root-side">
        <Card className="artists-root-side-card" color="secondary">
          Reviews
        </Card>
        <Card className="artists-root-side-card" color="secondary">
          Add Artworks
          <form action="" method="get" class="form-add-art">
            <div className="form-add-art">
              <label for="name">Title </label>
              <br></br>
              <input type="text" name="name" id="name" required></input>
            </div>
            <div className="form-add-art">
              <label for="name">Date </label>
              <br></br>
              <input type="text" name="name" id="name" required></input>
            </div>
            <div className="form-add-art">
              <label for="name">Material </label>
              <br></br>
              <input type="text" name="name" id="name" required></input>
            </div>
            <div className="form-add-art">
              <label for="name">Size </label>
              <br></br>
              <input type="text" name="name" id="name" required></input>
            </div>
            <Button type="subtle">Add</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
