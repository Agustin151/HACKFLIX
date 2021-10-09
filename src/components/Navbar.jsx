import { Link } from "react-router-dom";

/* import Modal from "./modal"; */
function Navbar() {
  return (
    <nav className="nav fixed-top navbar navbar-expand-lg p-0">
      <div className="container ">
        <Link className="navTitle navbar-brand me-auto text-light" to="/">
          HACKFLIX
        </Link>
        <button
          className="navbar-toggler"
          type="button "
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars   text-light"></span>
        </button>
        <div
          className=" collapse navbar-collapse  "
          id="navbarSupportedContent"
        >
          <ul className=" navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item ">
              <Link className="Link nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link nav-link" to="/SobreNosotros">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link nav-link" to="/Contacto">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
