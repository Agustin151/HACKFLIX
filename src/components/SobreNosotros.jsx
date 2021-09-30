import React from "react";
import { Link } from "react-router-dom";
import Agus from "../img/Agus.jpg";
function SobreNosotros() {
  return (
    <div className=" container mb-5">
      <div>
        <header className="heroA py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">ABOUT US</h1>
            </div>
          </div>
        </header>
      </div>

      <div className="row mb-5">
        <div className="col-md-4 px-4 mb-5 ">
          <img
            src={Agus}
            alt="Agus"
            className="aboutimg responsive shadow-lg rounded hover mb-2 ps-0"
          />
        </div>
        <div className="col-md-8 text-light  ">
          <h6 className="pt-3 mb-1 text-start ">
            <strong> Agustín Álvarez </strong>
          </h6>
          <p className="text-start ps-5 pe-1 mb-2">Full Stack Developer (JR)</p>

          <p className="text-start ps-5 pe-4">
            ¡Hola! Soy Agustín y tengo 20 años.
          </p>
          <p>
            En 2021 participé de un Coding Bootcamp sobre desarrollo web Full
            Stack, el cual fue de las experiencias más intensas de las que he
            participado. Durante 3 meses full-time dediqué más de 600 horas a
            proyectos sobre Node.js, React.js, SQL, MongoDB y Git.
          </p>
          <div className="text-start ps-4 ">
            <Link to="">
              <i class="fab fa-linkedin btn fs-3 ps-4 iconHover"></i>
            </Link>
            <Link to="">
              <i class="fab fa-github btn fs-3 px-2 iconHover"></i>
            </Link>
            <Link to="">
              <i class="fab fa-twitter btn fs-3 px-2 iconHover"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SobreNosotros;
