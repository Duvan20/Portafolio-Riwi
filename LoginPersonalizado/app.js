
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

function iniciarSesion(){
   let registro = document.querySelector(`#registro`).value;
   let contraseña = document.querySelector(`#password`).value;
   for (i = 0; i < usuarios.length ; i++){
      if (contraseña == usuarios[i].contraseña && 
         (registro == usuarios[i].usuario) || registro == usuarios[i].correo || registro == usuarios[i].telefono){
            sessionStorage.setItem(`nombre`, usuarios[i].nombre);
            sessionStorage.setItem(`permiso`, `true`);
            sessionStorage.setItem(`genero`, usuarios[i].genero);
            location.href = `home.html`;
      }
   }
}





