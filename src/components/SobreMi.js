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
      <section class="container my-5">
        <article class="row text-center centrarCards">
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0 margen">
            <div class="card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                class="card-img-top"
                alt="js"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Javascript
                  
                </h5>
            
              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                class="card-img-top"
                alt="Css"
              />
              <div class="card-body">
                <h5 class="card-title">
                  CSS
                  
                </h5>

              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                class="card-img-top"
                alt="bootstrap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Bootstrap
                  
                </h5>
                
              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                class="card-img-top"
                alt="Javascript"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Javascript
                </h5>
                
              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                class="card-img-top"
                alt="React"
              />
              <div class="card-body">
                <h5 class="card-title">
                  React
                </h5>
               
              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                class="card-img-top"
                alt="nodejs"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Node-Js
                  
                </h5>
                
              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                class="card-img-top"
                alt="mongodb"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Mongo DB
                  
                </h5>
               
              </div>
            </div>
          </aside>
          <aside class="col-10 col-md-4 col-lg-3 m-0 p-0">
            <div class="card margen">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                class="card-img-top"
                alt="Github"
              />
              <div class="card-body">
                <h5 class="card-title">
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
