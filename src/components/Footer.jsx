import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class=" footer line page-footer text-light pt-2">
        <div class="container text-start text-md-left">
          <div class="row text-start text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold aqua">
                HACKFLIX
              </h6>
              <p>
                Soy un programador Junior con muchas ganas de aprender. Que
                quiere mejorar cada dia como persona y como desarrollador.
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold aqua">Contact</h6>
              <p>
                <i class="fas fa-home mr-3"></i> Montevideo, Uruguay
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i>agus.rivero.151@gmail.com
              </p>
            </div>
          </div>

          <hr />

          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-start text-md-left aqua ms-2 ps-4">
                © 2020 Copyright: HACKFLIX
              </p>
            </div>

            <div class="col-md-5 col-lg-4 ml-lg-0">
              <div class="text-end text-md-right pe-5">
                <ul class="list-unstyled list-inline pe-2">
                  <li class="list-inline-item">
                    <Link class="foot btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-linkedin-in aqua"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
