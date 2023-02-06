import React from "react";
import Bootstrap from "react-bootstrap";
import Banner3 from "../assets/img/tomy3.png"

const Trabajos = () => {
  return ( 
    <>
    <section>
    <div>

      <h3 className="display-5 text-center">Mis Trabajos</h3>

      <p className="lead text-center">A continucacion les dejo unos trabajos míos realizados durante el curso y usos propios. Realizando ejercicios con Js, Bootstrap, un trabajo grupal aprendiendo el uso de Git, implementando el uso de React y muchas practicas mas!
      </p>
      
      <img src={Banner3} className="tomy-img" />


    </div>


    </section>
    
    
    
    </>
   );
}
 
export default Trabajos;