function SelctColor(){
    let idioma = document.getElementById('Seleccionar-idioma').value;
    if(idioma == "en"){
      let btn = document.querySelectorAll('.btn')
      for (let i = 0; i < btn.length; i++) {
        btn[i].innerHTML = 'boy'
        
      }
      document.getElementById('text-1').innerText ='1 burger with nuggets + 1 soda.'
      document.getElementById('text-2').innerText ='10 Nuggets + 10 Wings (Spicy hot wings are equivalent to a piece of wing) + 2 Small Fries'
      document.getElementById('text-3').innerText ='10 Nuggets + 1 Small Potato + 1 Pet Soda 400ml + 1 BBQ Sauce + 1 Honey Mustard Sauce'
      document.getElementById('text-4').innerText ='1 Classic Twister + 1 small potato + 1 PET Soda 400ml + + 1 Small Potato'
      document.getElementById('text-5').innerText ='10 Nuggets + 1 Small Potato + 1 Pet Soda 400ml + 1 BBQ Sauce'
      document.getElementById('text-6').innerText ='8 Hot Wings + + 1 Pet Soda 400ml + 1 BBQ Sauce'
      document.getElementById('text-7').innerText ='1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)'
      document.getElementById('text-8').innerText ='Hot Wings + + 1 Pet Soda 400ml.'
      

   

    }
    else if (idioma == "es" ){
      let btn = document.querySelectorAll('.btn')
      for (let i = 0; i < btn.length; i++) {
        btn[i].innerHTML = 'comprar'
        
      }
      document.getElementById('text-1').innerText ='1 hamburguesa Con nuggets + 1 gaseosa.'
      document.getElementById('text-2').innerText ='10 Nuggets + 10 Alitas (Las alitas picantes hot wings equivalen a un trozo de ala) + 2 Papas Pequeñas'
      document.getElementById('text-3').innerText ='10 Nuggets + 1 Papa Pequeña + 1 Gaseosa Pet 400ml + 1 Salsa BBQ + 1 Salsa Miel Mostaza'
      document.getElementById('text-4').innerText ='1 Twister Clásico + 1 papa pequeña+ 1 Gaseosa PET 400ml + + 1 Papa Pequeña '
      document.getElementById('text-5').innerText ='10 Nuggets + 1 Papa Pequeña + 1 Gaseosa Pet 400ml + 1 Salsa BBQ'
      document.getElementById('text-6').innerText ='8 Hot Wings + + 1 Gaseosa Pet 400ml + 1 Salsa BBQ'
      document.getElementById('text-7').innerText ='1 Sándwich BBQ Crunch (1 Filete de pollo apanado)'
      document.getElementById('text-8').innerText ='Hot Wings + + 1 Gaseosa Pet 400ml.'

     

    }
}
function dark(){
  let color =document.getElementById('Seleccionar-color').value;
  if( color == 1 ){
    document.getElementById('body').classList.add('dark')
    document.getElementById('body').classList.add('dark')
    let tema = document.querySelectorAll('.btn-danger')
    for (let i = 0; i < tema.length; i++) {
      tema[i].classList.replace('btn-danger','btn-primary') 
    }
    let cartas = document.querySelectorAll('.card')
    for (let i = 0; i < cartas.length; i++) {
      cartas[i].classList.replace('card','card-dark');
      
    }
  }
  else if( color == 2){
    document.getElementById('body').classList.remove('dark')
    let tema = document.querySelectorAll('.btn-primary')
    for (let i = 0; i < tema.length; i++) {
      tema[i].classList.replace('btn-primary','btn-danger') 
    }
    let cartas = document.querySelectorAll('.card-dark')
    for (let i = 0; i < cartas.length; i++) {
      cartas[i].classList.replace('card-dark','card');
      
    }
    
  }

}