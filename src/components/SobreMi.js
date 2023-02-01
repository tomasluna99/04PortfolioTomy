import React from "react";
import { aside } from "react-bootstrap";
import Banner1 from "../assets/img/tomy.png";

const Sobremi = () => {
  return (
    <>
      <section className="bg-primary text-light text-center">
        <h3 className="display-4">Hola, soy Tomás!</h3>
        <h2 className="display-6">Programador FullStack Web Developer</h2>
        <p className="lead">
          Deportista, aventurero, curioso y con ganas de aprender siempre un
          poco mas! Egresado de Rolling Code School y con todas las ganas de
          trabajar.
          <img src={Banner1} className="banner" />
        </p>
      </section>
    </>
  );
};

export default Sobremi;
