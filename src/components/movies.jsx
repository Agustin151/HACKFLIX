import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Movies({ searchedTitle, ranking, setShow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const url = searchedTitle
        ? "https://api.themoviedb.org/3/search/movie"
        : "https://api.themoviedb.org/3/discover/movie";
      const response = await axios({
        method: "get",
        url: url,
        params: {
          api_key: process.env.REACT_APP_TOKEN_API_KEY,
          query: searchedTitle,
        },
      });
      console.log(response);
      setMovies(response.data.results);
    }
    getMovies();
  }, [searchedTitle]);
  return (
    <div className="contMovie">
      <div className="container ">
        <div className="row mb-5">
          {movies

            .filter((movie) =>
              movie.title.toLowerCase().includes(searchedTitle.toLowerCase())
            )
            .filter((movie) => Math.round(movie.vote_average / 2) >= ranking)
            .map((movie) => (
              <div className="col-md-3 mt-2 mb-0 ">
                <Link to={`pelicula/${movie.id}`}>
                  <img
                    onClick={() => setShow(true)}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid mb-3 alcon "
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  Launch static backdrop modal
</button>;

export default Movies;
