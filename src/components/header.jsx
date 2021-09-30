import "./head.css";
import ReactStars from "react-rating-stars-component";
import Navbar from "../components/Navbar";
/* import Modal from "./modal"; */
function Header({ searchedTitle, setSearchedTitle, ranking, setRanking }) {
  return (
    <>
      <Navbar />
      <header className=" shadow bg-image">
        <div className="head">
          <h1 className="titulo"> ¡¡¡Tus peliculas favoritas!!!</h1>

          <div>
            <h4>Busca la pelicula!</h4>
            <label htmlFor="input-search"> </label>
            <input
              className="seach text-center"
              id="input-search"
              placeholder=" Titulo..."
              type="text"
              value={searchedTitle}
              onChange={(event) => {
                setSearchedTitle(event.target.value);
              }}
            />
            <p className="mb-0 pb-0 mt-2">Por calidad </p>
            <div className="star pb-3">
              <ReactStars
                value={ranking}
                count={5}
                onChange={(value) => {
                  setRanking(value);
                  console.log(value);
                }}
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
