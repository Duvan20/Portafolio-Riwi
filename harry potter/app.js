datos ={
    nombre:"",
    familia:"",
    Edad:"",
    cualidad:"",
    linaje:"",
    animal:""
}



function caso1(){
   /*  document.getElementById('video-1').style.display = 'none';
    document.getElementById('inicio').style.display = 'none'; */
    window.location.href ='hero2.html'
    //document.querySelector('imagen2').style.display = 'block';
}
function casa(){
    window.location.href ='hero3.html'


}
function formulario(){
    var nombre = document.getElementById('nombre').value;
    var familia =document.getElementById('familia').value;
    var edad =document.getElementById('edad').value;
    var cualidad =document.getElementById('cualidades').value;
    var linaje =document.getElementById('linaje').value;
    
    
        datos.nombre =nombre,
        datos.familia=familia,
        datos.Edad =edad,
        datos.cualidad =cualidad,
        datos.linaje =linaje,
        datos.animal =""
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('familia', familia);
        localStorage.setItem('edad', edad);
        localStorage.setItem('cualidad', cualidad);
        localStorage.setItem('linaje', linaje);
 

        

    console.log(datos)
    profesore = {
        transformaciones: "Profesor Kevin Slughorn",
        herbologia: "Profesor Maria Umbridge",
        pociones: "Profesor Liliana McGonagall",
        encantamientos: "Profesora Jackie",
        defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
        animalesMagicos: "Profesor David Filch",
        historiaDeMagia: "Profesor Ronald Sprout"

    }

    console.log(datos)
    window.location.href ='hero3.html'  
    

    
}
function regalo(){
    cualidad = localStorage.getItem('cualidad');
    linaje = localStorage.getItem('linaje');


    if(cualidad == "valor" && (linaje == "mestizo" || linaje == "muggle" || linaje == "sangre") ){
        console.log("GRIFINDOR "); 
        document.getElementById('button-regalo').classList.replace('regalo','gryffindor');

        

      
        

    }
    else if(cualidad =="justicia" &&(linaje == "mestizo" || linaje == "muggle")){
        console.log("HUFFLEPUFF")
        
        document.getElementById('button-regalo').classList.replace('regalo','huflepuff');



    }
    else if(cualidad == "creatividad" &&(linaje == "mestizo" || linaje == "muggle" || linaje == "sangre")){
        console.log("REVANCLAW")
        
        document.getElementById('button-regalo').classList.replace('regalo','revenclaw');



    }
    else if (cualidad=="ambicion" &&(linaje == "sangre")){
        console.log("Stytherin")
        
        document.getElementById('button-regalo').classList.replace('regalo','slytherin');



    }
    else{
        alert("con estos valores no pudes tener este linaje ")
    }


    
}
function hero5() {
    window.location.href ='hero4.html'
    
    
}
function muerte() {
    window.location.href ='hero5.html'
    
}
function ganar() {
    window.location.href ='hero5Ganador.html'
 
}
function Riddikulus() {
    window.location.href ='final.html'
    nomb = sessionStorage.getItem('nombre').value
    document.getElementById("nombre").innerText = nomb

    
}