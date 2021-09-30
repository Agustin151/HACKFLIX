import React, { useState } from "react";
import "./movieDetails.css";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function MovieDetail() {
  const [pelicula, setPelicula] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPelicula = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TOKEN_API_KEY}`
      );

      setPelicula(response.data);
      console.log(response.data);
    };
    getPelicula();
  }, [id]);

  const fondo = {
    backgroundImage: `linear-gradient(72deg, rgba(5,5,5,0.8715861344537815) 0%, rgba(136,94,94,0.41220238095238093) 15%, rgba(90,93,87,0) 48%, rgba(128,85,85,0.2945553221288515) 85%, rgba(0,0,0,0.773546918767507) 97%),url(https://image.tmdb.org/t/p/original${pelicula.backdrop_path})`,
    backgroundAttachment: "fixed",
    width: "100vw",
    /* height: "100vh", */
    backgroundSize: "cover",
  };

  return (
    <div style={fondo} className="pb-3">
      <div className="container pt-5  ">
        <div className="row cardPeli p-2 mt-5 ">
          <div className="col-md-6 mt-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
              className="img-fluid mb-3  "
            />
          </div>
          <div className="col-md-6 mt-3 ">
            <h1 class="t-stroke h1">{pelicula.title}</h1>
            <div className="row">
              <div className="col-md-4 ml-2 badge rounded-pill bg-warning text-dark">
                Calificacion: {pelicula.vote_average}
              </div>
              <div className="col-md-8 "></div>
            </div>

            <p className="mt-3 p ">{pelicula.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
