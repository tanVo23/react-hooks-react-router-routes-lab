import React from "react";
import { directors } from "../data";

function Directors() {
  const directorInfo = directors.map((director) =>(
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <ul>
        {director.movies.map((movie) =>(
          <li key={movie[0]}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Directors Page</h1>
    {directorInfo}
    </div>
    );
}

export default Directors;
