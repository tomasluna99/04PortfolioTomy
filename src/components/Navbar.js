import React from "react";

const Navbar = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bienvenidos
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            aria-label="Toggle navigation"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            data-mdb-target="#navbarSupportedContent"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        

              </ul>

            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link text-white" href="https://www.facebook.com/profile.php?id=100007230225536">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link text-white" href="https://www.instagram.com/tomas.luna99/">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link text-white" href="https://github.com/tomasluna99?tab=repositories"><i class="bi bi-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
