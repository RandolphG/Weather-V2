import React, { useEffect, useState } from "react";
import "./Index.css";

const movies = (data) => {};

function Hours() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=02b824f6d8d45461f18b5c2aa8ee2175&language=en-US&page=1"
    )
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setMovies(data);
      });
  });

  return (
        {movies.map((movie)=>(<div
                className="box"
                key={movie.results}
                movieId={movie.id}
                title={movie.title}
                image={movie.poster_path}
                overview={movie.overview}
            >
                <a href={"single/" + movie.id}>
                    <div className="img-box">
                        <img
                            src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
                            alt="misc"
                        />
                    </div>
                    <div className="content">
                        <h3 className="movietitle">
                            {movie.title.substring(0, 15)}
                            {movie.title.length > 12 ? "..." : ""} (
                            {movie.release_date.split("-").slice(0, 1)})
                        </h3>
                        <p>
                            {movie.overview.substring(0, 50)}
                            {movie.overview.length > 12 ? "..." : ""}
                        </p>
                        <h3>
                            {" "}
                            <span className="rating">
                      {" "}
                                Rating:{" "}
                                {movie.vote_average === 0 ? "N/A" : movie.vote_average}
                    </span>{" "}
                        </h3>

                        <h3>
                            <button className="moreinfo">More Info</button>
                        </h3>
                    </div>
                </a>
            </div>))
        }
    )
  )
}
export default Hours;
