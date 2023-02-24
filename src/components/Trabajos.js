import React from "react";
import Bootstrap from "react-bootstrap";

const Trabajos = () => {
  return ( 
    <>
    <section>
    <div>

      <h3 className="display-5 text-center">Mis Trabajos</h3>

      <p className="lead text-center">A continucacion les dejo unos trabajos míos realizados durante el curso y usos propios. Realizando ejercicios con Js, Bootstrap, un trabajo grupal aprendiendo el uso de Git, implementando el uso de React y muchas practicas mas!
      
      </p>
      


    </div>


    </section>

    <section>
<article class="row">
<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="https://cocudelicias.netlify.app/img/slider_201603_lemonpie.jpg" class="card-img-top" alt="Pasteleria" />
    <div class="card-body">
      <h5 class="card-title">Cocu Delicias</h5>
      <p class="card-text">Trabajo realizado mediante el cursado donde aplicamos el uso de HTML, Bootstrap y practicas con Media Query para luego subir el proyecto a Netlify.</p>
      <a href="https://cocudelicias.netlify.app/" target="_blank" className="btn btn-primary">Ver mas</a>
    </div>
  </div>
</aside>
<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="https://rollingbank-e.netlify.app/img/1.png" class="card-img-top" alt="Banco" />
    <div class="card-body">
      <h5 class="card-title">RollingBank</h5>
      <p class="card-text">Primer trabajo realizado durante el cursado para la practica del uso de Media Query, agregando un carrousel, cards e iconos mediante bootstrap.</p>
      <a href="https://rollingbank-e.netlify.app/" target="_blank" className="btn btn-primary">Ver mas</a>
    </div>
  </div>
  
</aside>
<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="https://rollingstreaming.netlify.app/img/index-estreno-3.jpg" class="card-img-top" alt="Cine" />
    <div class="card-body">
      <h5 class="card-title">RollingStreaming</h5>
      <p class="card-text">Primer trabajo de fin de modulo formando una practica en grupo donde teniamos que implementar todo lo aprendido durante los primeros meses de clases html, bootstrap, media query, iconos, videos etc.</p>
      <a href="https://rollingstreaming.netlify.app/" target="_blank" className="btn btn-primary">Ver mas</a> 
    </div>
  </div>
  
</aside>
<aside class="col-12 col-md-4 col-lg-3">
<div class="card">
    <img src="https://tranquil-pie-b26d7d.netlify.app/img/bannerIndex2.jpg" class="card-img-top" alt="Drones" />
    <div class="card-body">
      <h5 class="card-title">DronLandia</h5>
      <p class="card-text">Segundo trabajo de fin de modulo donde implementamos mas a fondo el uso de Javascript realizando un Ecommerce pudiendo agregar, quitar, modificar o buscar algun elemento, poniendo en practica nuestro primer carrito de compras.</p>
      <a href="https://tranquil-pie-b26d7d.netlify.app/?fbclid=IwAR3ClwA5Dc2eeorxG97u2AGz-uaAQOpm3AAyK2x0tOi1NErkKF8Hdkac54c" target="_blank" className="btn btn-primary">Ver mas</a>  
    </div>
  </div>
  
</aside>
<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="https://practicarestaurant.netlify.app/img/platterjpg.jpg" class="card-img-top" alt="RestoBar" />
    <div class="card-body">
      <h5 class="card-title">Practica-Restaurant</h5>
      <p class="card-text">Aqui practicamos mas a fondo las Media Query agregando tambien el uso de las card utilizando el efecto hoover "trabajo individual".</p>
      <a href="https://practicarestaurant.netlify.app/" target="_blank" className="btn btn-primary">Ver mas</a> 
    </div>
  </div>
  
</aside>



<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="" class="card-img-top" alt="Medialuna" />
    <div class="card-body">
      <h5 class="card-title">Medialuna</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-primary" type="button">Ver mas</button> 
    </div>
  </div>
  
</aside>
<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="" class="card-img-top" alt="Medialuna" />
    <div class="card-body">
      <h5 class="card-title">Medialuna</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-primary" type="button">Ver mas</button> 
    </div>
  </div>
  
</aside>
<aside class="col-12 col-md-4 col-lg-3">
  <div class="card">
    <img src="https://tofuu.getjusto.com/orioneat-prod-resized/wjnWRkQBMbEfL5xLd-x-1800.webp" class="card-img-top" alt="Restaurante" />
    <div class="card-body">
      <h5 class="card-title">Comiteando-Restaurante</h5>
      <p class="card-text">Ultimo trabajo de fin de modulo realizado durante el cursado en grupo implementando el uso de React, Git, ReactBootstrap complementando con las peticiones http put, get, delete.</p>
      <a href="https://comitiando.netlify.app/" target="_blank" className="btn btn-primary">Ver mas</a> 
    </div>
  </div>
  
</aside>
</article>

 
</section>
    
    
    
    </>
   );
}
 
export default Trabajos;