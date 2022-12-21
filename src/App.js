import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  hiphop: [
    { name: "MY name is by Eminem", rating: "4/5" },
    { name: "Rap God by Eminem", rating: "5/5" },
    { name: "Comeback by Russ", rating: "4.5/5" }
  ],

  indie: [
    {
      name: "Kasoor by Prateek Kuhad",
      rating: "4/5"
    },
    {
      name: "100 Words by Prateek Kuhad",
      rating: "4.7/5"
    },
    {
      name: "Baarishein by Anuv",
      rating: "5/5"
    }
  ],

  bollywood: [
    {
      name: "Channa Mereya by Arijit",
      rating: "5/5"
    },
    {
      name: "Dekh Lena by Arijit",
      rating: "5/5"
    },
    {
      name: "Raabta by Arijit",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("bollywood");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎶 goodmusic </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite songs. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
