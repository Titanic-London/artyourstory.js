import { Button } from "./Button";
import { Card } from "./Card";
import { Text } from "./Text";
import "./ShowPage.css";
import { useState } from "react";


export function ShowPage() {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

return (
    <div className="container">
      <div className="left">
      {/* <div className="columns is-vcentered is-multiline">
        <div className="column is-3"> */}
            <div className="card-image">
              <figure className="image">
                <img
                  src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
                  alt="cute dog"
                />
              </figure>
            </div>
        {/* </div>
      </div> */}
        <div className="card-text">
        <Card className="artists-root-side-card" color="secondary">
          <form
            action=""
            method="get"
            className="artists-add-art-root"
            onSubmit={(e) => {
              debugger;
            }}
          >
            <div className="artists-add-art-row">
              <label htmlFor="title">Title</label>
              {/* <input
                type="text"
                placeholder="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input> */}
            </div>
            <div className="artists-add-art-row">
              <label htmlFor="description">Description</label>
              <Card color="light">Here</Card>
            </div>

            <div className="artists-add-art-row">
              <label htmlFor="date">Date</label>
              <Card color="light">Here</Card>
            </div>
            <div className="artists-add-art-row">
              <label htmlFor="material">Material </label>
              <Card color="light">Here</Card>
            </div>
            <div className="artists-add-art-row">
              <label htmlFor="size">Size</label>
              <Card color="light">Here</Card>
            </div>
          </form>
        </Card>
        </div>
    </div>
    <div className = "right">
      <div className = "price">
        <Card className="artists-root-side-card" color="secondary">
          <div className="artists-add-art-row">
            <label htmlFor="title">Title</label>
            <Card color="light">Here</Card>
          </div>

          <div className="artists-add-art-row">
            <label htmlFor="price">price</label>
            <Card color="light">Here</Card>
          </div>
        </Card>
      </div>
      <div className = "Artist">
          <div className="artists-root-main">
        <Card className="artists-root-main-card" color="subtle">
          Saki Unno
          <Card color="light">Here</Card>
          Saki's Artworks
          <Card color="light">Here</Card>
        </Card>
      </div>
      </div>
    </div>
    </div>
  );
}
