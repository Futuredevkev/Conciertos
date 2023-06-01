
// carrousel header

var imagenes = ['/imgs/54047hd.jpg', '/imgs/2.jpg', '/imgs/3.jpg', '/imgs/4.jpg'],
      cont = 0;
      
      function carrousel(contenedor){
          contenedor.addEventListener('click', e =>{
          
          let atras = contenedor.querySelector('.atras'),
          adelante = contenedor.querySelector('.adelante'),
          img = contenedor.querySelector('img'),
          tgt = e.target;

          if(tgt == atras) {
            
            if(cont > 0) {

                img.src = imagenes[cont - 1];
                cont--;
            } else {
               img.src = imagenes[imagenes.length - 1];
               cont = imagenes.length - 1;
            }

          } else if (tgt == adelante) {
            if(cont < imagenes.length - 1) {

                img.src = imagenes[cont + 1];
                cont++;
            } else {
               img.src = imagenes[0];
               cont = 0;
            }
          }
 
          });
      }


      document.addEventListener("DOMContentLoaded", ()=> {
            let contenedor = document.querySelector('.contenedor2');

            carrousel(contenedor);
      });





  
 // Galeria de imagenes
  
 document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    { img: "/artistas-galeria/1.jpg" },
    { img: "/artistas-galeria/2.jpg" },
    { img: "/artistas-galeria/3.jpg" },
    { img: "/artistas-galeria/4.jpg" },
  { img: "/artistas-galeria/5.jpg" },
  { img: "/artistas-galeria/6.jpg" },
  { img: "/artistas-galeria/7.jpg" },
  { img: "/artistas-galeria/8.jpg" },
  { img: "/artistas-galeria/9.jpg" },
  { img: "/artistas-galeria/10.jpg" },
  { img: "/artistas-galeria/11.jpg" },
  { img: "/artistas-galeria/12.jpg" },
  { img: "/artistas-galeria/13.jpg" },
  { img: "/artistas-galeria/14.jpg" },
  { img: "/artistas-galeria/15.jpg" },
  { img: "/artistas-galeria/16.jpg" },
  { img: "/artistas-galeria/17.jpg" },
  { img: "/artistas-galeria/18.jpg" },
  { img: "/artistas-galeria/19.jpg" },
  { img: "/artistas-galeria/20.jpg" },
  { img: "/artistas-galeria/21.jpg" },
  { img: "/artistas-galeria/22.jpg" },
  { img: "/artistas-galeria/23.jpg" },
  { img: "/artistas-galeria/24.jpg" },
  { img: "/artistas-galeria/25.jpg" }
];

let contador = 0;
const contenedor = document.querySelector(".slideshow");
const overlay = document.querySelector(".overlay");
const galeria_imagenes = document.querySelectorAll(".galeria2 img");
const img_slideshows = document.querySelector(".slideshow img");

contenedor.addEventListener("click", function (event) {
  let atras = contenedor.querySelector(".atras"),
    adelante = contenedor.querySelector(".adelante"),
    img = contenedor.querySelector("img"),
    tgt = event.target;
  if (tgt == atras) {
    if (contador > 0) {
      img.src = imagenes[contador - 1].img;
      contador--;
    } else {
      img.src = imagenes[imagenes.length - 1].img;
      contador = imagenes.length - 1;
    }
  } else if (tgt == adelante) {
    if (contador < imagenes.length - 1) {
      img.src = imagenes[contador + 1].img;
      contador++;
    } else {
      img.src = imagenes[0].img;
      contador = 0;
    }
  }
});
Array.from(galeria_imagenes).forEach((img) => {
  img.addEventListener("click", (event) => {
    const imagen_seleccionada = +event.target.dataset.imgMostrar;
    img_slideshows.src = imagenes[imagen_seleccionada].img;
    contador = imagen_seleccionada;
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
  });
});

var span = document.getElementsByClassName("btn_cerrar")[0];
span.onclick = function () {
  overlay.style.visibility = "hidden";
};
}); 





const iconoMenu = document.querySelector('.icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  const rutaActual = e.target.getAttribute('src');

  if(rutaActual == "fa-solid fa-bars-staggered"){
    e.target.setAttribute('src', 'fa-solid fa-bars-staggered');
  } else {
    e.target.setAttribute('src', 'fa-solid fa-bars-staggered');
  }
})