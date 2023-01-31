import React from "react";
import Banner2 from "../assets/img/tomy2.png";


const Header = () => {
  return (
    <>
    <section>
    <div className="header-wraper">

      <div className="main-info">
        <h1 className="text-white">
          Programador FullStack Web Developer<hr/>
          <p className="text-white display-7">Contactame para diseñar tu pagina
      </p>
      <img src={Banner2} className="banner2"/>
         </h1>
        </div>
    </div>

      </section>
   
    
    </>
    
  );
};

export default Header;
