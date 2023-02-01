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
          trabajar. Soy de Tucumán/Argentina.
        </p>
          <img src={Banner1} className="banner" />
      </section>
      <section className="container my-5">
        <h2 className="text-center display-4">Mis herramientas</h2>
        <article className="row text-center centrarCards">
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0 margen">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                className="card-img-top logos"
                alt="js"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Javascript
                  
                </h5>
            
              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                className="card-img-top logos"
                alt="Css"
              />
              <div className="card-body">
                <h5 className="card-title">
                  CSS
                  
                </h5>

              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                className="card-img-top logos"
                alt="bootstrap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Bootstrap
                  
                </h5>
                
              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                className="card-img-top logos"
                alt="Javascript"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Javascript
                </h5>
                
              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="card-img-top logos"
                alt="React"
              />
              <div className="card-body">
                <h5 className="card-title">
                  React
                </h5>
               
              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                className="card-img-top logos"
                alt="nodejs"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Node-Js
                  
                </h5>
                
              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                className="card-img-top logos"
                alt="mongodb"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Mongo DB
                  
                </h5>
               
              </div>
            </div>
          </aside>
          <aside className="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="card-img-top logos"
                alt="Github"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Github
                  
                </h5>
                
              </div>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
};

export default Sobremi;
