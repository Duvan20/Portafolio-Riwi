
var nombre = sessionStorage.getItem(`nombre`);
var permiso = sessionStorage.getItem(`permiso`);
var genero = sessionStorage.getItem(`genero`);
document.querySelector(`#usuario`).innerText = nombre
usuarios = [
   {
    nombre: `teresa`,
    usuario: `teresa`,
    correo: `juan@gmail.com`,
    telefono: `3107100993`,
    genero: `femenino`,
    contraseña: `hola`,
    galeria:[
      `./img/perro1.jpg`,
      `./img/perro2.jpg`,
      `./img/perro3.jpg`,
      `./img/img_4.jpg`,
      `./img/img_5.jpg`,
      `./img/perro3.jpg`,
      `./img/img_7.webp`,
      `./img/perro2.jpg`,
      `./img/perro3.jpg`,
    ]
   },
   {
    nombre: `DUVAN`,
    usuario: `DUVAN`,
    correo: `Duvan@gmail.com`,
    telefono: `800`,
    genero: `masculino`,
    contraseña: `holi`,
    galeria:[
      `./img/pizza2.jpeg`,
      `./img/pizza2.jpeg`,
      `./img/ipizza2.jpeg`,
      `./img/pizza1.jpeg`,
      `./img/img_15.webp`,
      `./img/ipizza1.jpeg`,
      `./img/pizza2.jpeg`,
      `./img/img_18.jpeg`,
      `./img/pizzas3.webp`,
    ]
   },   
]
function cerrarSesion(){
   sessionStorage.setItem(`permiso`, `false`)
   salir = sessionStorage.getItem(`permiso`);
   if (salir != `true`){
       location.href = `index.html`
   }
}
if (permiso != `true`){
   location.href = `index.html`
}
var hero1 = document.querySelector(`.contenedor_main`)
if (genero == `femenino`){
   let nav = document.querySelector(`nav`);
   nav.style.backgroundColor = `rgba(255, 168, 168, 0.6)`   
   usuarios[0].galeria.forEach(function(imagen){
      let div = document.createElement(`div`);
      div.classList = `subcontenedores_main`;
      hero1.appendChild(div)
      let figure = document.createElement(`figure`);
      figure.classList = `img`
      div.appendChild(figure)
      let img = document.createElement(`img`)
      img.classList = `img`
      img.setAttribute(`src`, imagen)
      figure.appendChild(img)
   })
}
else{
   let nav = document.querySelector(`nav`);
   nav.style.backgroundColor = `rgba(0, 0, 0, 0.5)`

   usuarios[1].galeria.forEach(function(imagen){
      let div = document.createElement(`div`);
      div.classList = `subcontenedores_main`;
      hero1.appendChild(div)

      let figure = document.createElement(`figure`);
      figure.classList = `img`
      div.appendChild(figure)
      let img = document.createElement(`img`)
      img.classList = `img`
      img.setAttribute(`src`, imagen)
      figure.appendChild(img)
   })
}



