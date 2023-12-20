String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 


var palabras =["css","python","javascript","html","riwi"]
var palbrRandom =palabras[Math.floor(Math.random()*palabras.length)]
var intentos  = 2

let palabraSecreta = palbrRandom.replace(/./g,"_ ")






function EnviarLetra(){
    let letra = document.getElementById('letra').value;
   
    for(let i in palbrRandom ){
        if(letra == palbrRandom[i]){
            palabraSecreta = palabraSecreta.replaceAt(i*2,letra)
        }
        else if(letra != palbrRandom[i]){
            document.getElementById('letra').value = ""
            intentos--
            console.log("la palabra es incorrecta")
        }
        else if (intentos == 0){
            alert('perdiste mi fai')
        }
    }
   
}



function poner(){
    document.getElementById('poner').innerHTML = palabraSecreta

}
