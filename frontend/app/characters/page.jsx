"use client";

import { useEffect, useState } from "react";
import "../../styles/characters.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch("http://localhost:5000/api/shadowslave/characters/");
        if (!res.ok) throw new Error("Failed to fetch characters");
        const data = await res.json();
        setCharacters(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <div className="content-box">
      <h3>Characters</h3>
      <div className="space"></div>
      {error ? (
        <p>Error loading characters.</p>
      ) : characters.length === 0 ? (
        <p>No characters found.</p>
      ) : (
        <div className="ch-images">
          {characters.map((character) => (
            <div
              key={character.id}
              className="ch-box"
              data-name={`Name: ${character.name}`}
              data-true-name={`True Name: ${character.true_name}`}
              data-age={`Age: ${character.age}`}
              data-status={`Vital Status: ${character.vital_status}`}
              data-rank={`Rank: ${character.rank}`}
              data-class={`Class: ${character.class_name}`}
              data-aspect={`Aspect: ${character.aspect}`}
              data-flaw={`Flaw: ${character.flaw}`}
            >
              <img
                src={`/assets/${character.image}`}
                alt={character.name}
                onError={(e) => {
                  e.target.src = "/assets/placeholder.png";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
