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
        <Card color="secondary">
          Add Artworks
          <Button type="subtle">Add</Button>
        </Card>
      </div>
    </div>
  );
}
