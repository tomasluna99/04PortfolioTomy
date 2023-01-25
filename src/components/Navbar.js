import React from "react";

const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   );
}
 
export default Navbar;