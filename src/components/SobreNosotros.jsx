import React from "react";
import { Link } from "react-router-dom";
import Agus from "../img/Agus.jpg";
function SobreNosotros() {
  return (
    <div className="mobileAbout container ">
      <div>
        <header className="heroA py-5 ">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="text-center text-white ">
              <h1 className="display-4 fw-bolder">ABOUT US</h1>
            </div>
          </div>
        </header>
      </div>

      <div className="row aboutMobile styleAbout text-center">
        <div className="col-md text-light ">
          <img
            src={Agus}
            alt="Agus"
            className="aboutimg shadow-lg rounded hover mb-2 ps-0"
          />
          <h6 className="pt-3 ">
            <strong> Agustín Álvarez </strong>
          </h6>
          <p className="">
            Full Stack Developer (JR) <br />
            ¡Hola! Soy Agustín y tengo 20 años.
            <br />
            En 2021 participé de un Coding Bootcamp sobre desarrollo web Full
            Stack, el cual fue de las experiencias más intensas de las que he
            participado. Durante 3 meses full-time dediqué más de 600 horas a
            proyectos sobre Node.js, React.js, SQL, MongoDB y Git.
          </p>

          <div className="text-start ps-4 mobileProto">
            <Link to="https://www.linkedin.com/in/agust%C3%ADn-%C3%A1lvarez-rivero-373724219/">
              <i class="fab fa-linkedin ps-4 mobileProto"></i>
            </Link>
            <Link to="https://github.com/Agustin151">
              <i class="fab fa-github px-2 mobileProto"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SobreNosotros;
