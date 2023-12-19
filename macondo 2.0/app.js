var sueldoDisponible = 2500000

alert(" Hola HIDEBRANDO")
alert(`Tienes un sueldo de ${sueldoDisponible}`)
alert(" BIENVENIDO A WINGO","Tu viaje sera a las 9Pm y tendra escala a Medellin con destino a Macondo")

let comprarComida= prompt("¿Deseas comer algo? SI/NO");
if(comprarComida.toLowerCase() == 'si'){
    alert("Elige una opcion")
    let opComida= prompt('Opcion1:Almohabana con gaseosa $15000/Opcion2 :Subway con gaseosa $23.000')
    if(opComida == 1){
        sueldoDisponible = sueldoDisponible -15000
        alert(`Te cayo mal, llevas mucho rayo en el stand; tu sueldo actual es ${sueldoDisponible}`)
        document.getElementById('')
    }
    else if ( opComida == 2){
        sueldoDisponible = sueldoDisponible - 23000
        alert(`Quedaste llenito, tu sueldo es de ${sueldoDisponible}`)
  
    }
else{
    alert(`Debes comprar algo de medellin tu salario actual es de ${sueldoDisponible}`)
}
}
//Medidas del aeropuerto

let AeropurtAlto = 55
let AeropurtLargo = 40 
let AeropurtAncho = 20 
//medidas del  Hildebrando 
let HidenlbraAlto = 60
let HidenlbraLargo = 40
let HidenlbraAncho = 20

alert("Hildebrando a llegado a la sala de espera...")
alert("OHHHH NOOOOO, Tenemos un problema tus medidas de tu maleta no estan permitidas en Wingo")
alert(`Tus medidas son 60 cm(alto) x 40 cm (largo)x 20x cm.`)
alert(`las medias del aeropuerto son  55 cm (alto) x 40cm (largo) x 20 cm (ancho),`)
alert("Elige un opcion")
let Opcionmaleta = prompt("opcion 1:Quitar ropa y acomodarse a las medidas de wingo Opcion 2: NO VIAJAR Y PA LA CASA A JUGAR PLAY..")
if(Opcionmaleta ==1){

    let MaletaMin=Math.min((AeropurtAlto/HidenlbraAlto),(AeropurtAncho/HidenlbraAncho),(AeropurtLargo/HidenlbraLargo))
    let nueAlt = HidenlbraAlto *MaletaMin
    let nuevAnch = HidenlbraAncho * MaletaMin
    let nuevLarg = HidenlbraLargo * MaletaMin
    alert(`EXCELENTE...`)
    alert(`Tus nuevas medias son alto:${Math.round(nueAlt) } Ancho:${Math.round(nuevAnch)}  Largo:${Math.round(nuevLarg)}` )

} 
//caso3toLowerCase()
alert("Hildebrando llego a medellin...")
alert("OH NO, Hay un problema no tenemos wifi ")
alert("Pero tenemos buenas noticias tenemos la clave la cual es 01110010_01101001_01110111_01101001 ")
alert("la clave esta en numero binarios tendremos que trasformarla a decimales y luego a caracteres ") 
let OpcionWifi = prompt("Opcion1 : Convertir los numeros  Opcion2:No asegurar el hotel")
if(OpcionWifi == 1){
    alert(`al pasar la clave a decimales queda lo siguiente ${Number.parseInt("01110010_01101001_01110111_01101001")}`)
    alert("elige un opcion")
    let OpcionWifi2 =prompt("Opcion1 :cambiar a caracteres  opcion2: dejar asi(NO TE VA A DAR..)")
    if(OpcionWifi2== 1){
        alert(`al pasar  de decimales a caracteres da lo siguiente : ${parseFloat(Number.parseInt("01110010_01101001_01110111_01101001"))} (Esta es la clave) `)

    }
}   
let clavewifi =  "01110010_01101001_01110111_01101001"
let wifi1 =clavewifi.split("_")[0]
let wifi2 = clavewifi.split("_")[1]
let wifi3 = clavewifi.split("_")[2]
let wifi4 = clavewifi.split("_")[3]

function decimales(num){
    retenedor = 0
    let numvar = num.split("").reverse('').join('')
    for (let i = 0; i < numvar.length; i++) {
        retenedor = retenedor+numvar[i]* 2**[i]
    }
    return retenedor

}  
let ascii = {97:'a',98:'b',99:'c',100:'d',101:'e',102:'f',103:'g',104:'h',105:'I',106:'j',107:'k',108:'l',109:'m',110:'n',111:'o',112:'p',113:'q',114:'R',115:'s',116:'t',117:'u',118:'v',119:'W',120:'x',121:'y',122:'z'};
 
alert(`Buenas noticias encontramos la clave la cual es ${ascii[decimales(wifi1)]}${ascii[decimales(wifi2)]}${ascii[decimales(wifi3)]}${ascii[decimales(wifi4)]}`) 
//caso4
alert("Oh otro problema como cosa rara")
alert("Al llegar a macondo todos hablan con la i")
alert(" Hildebrando tiene que decir los siguiente:Taxi me puede llevar al hotel mariposas amarillas")
alert("ELIGE UNA ")
alert("Si no lo hace, no lo podran llevar a su destino")
alert("Elige una opcion")
let opcionTaxi = prompt(`Opcion1:cambiar las vocales a 'i' opcion2:hablar asi auque no nos entiendad` )
let fraseTaxi1 = 'Taxi me puede llevar al hotel mariposas amarillas'
let frasei = fraseTaxi1.replace("a","i").replace("e","i").replace("u","i") 

if(opcionTaxi == 1){
 
    alert(`Tendras que decir los siguiente ${fraseTaxi1.replaceAll("a","i").replaceAll("e","i").replaceAll("u","i").replaceAll("o","i")}`)

}   

//caso5
alert("al Parecer tocara jugar piedra, papel o tigera con el taxista")
alert("Buena suerte")
alert("Elige una opcion")
let juego = prompt("Opcion 1: PIEDRA Opcion2:PAPEL Opcion3:Tijera")
if(juego == 1){
    alert(`Acaban de Empatar tu saldo disponible es de ${sueldoDisponible - 300000} ya que te toco pagar`)

}
else if(juego ==2){
    alert("FELICIDADES, Acabas de ganas")
}
else if(juego ==3){
    alert(`OHHH NOOOOOOOOOOOOO, Perdiste, tu saldo actual es de ${sueldoDisponible -300000}`)
}    
let juegoPPT = ["piedra","papel","tijera"]
let juegoPPTr =juegoPPT[Math.floor(Math.random()*3)]
let  jugadorOpcion = prompt('elige piedra, papel o tijera')
function ppt(jugadorOpcion){
    if(juegoPPTr=='piedra' && jugadorOpcion.toLowerCase() == 'tijera'){
        sueldoDisponible = sueldoDisponible - 300000
        alert(`La elección fue ${jugadorOpcion} y nuestro oponente fue ${juegoPPTr} PERDISTE :( Por lo tanto tu sueldo es de: ${sueldoDisponible}`)
    }else if(juegoPPTr=='papel' && jugadorOpcion.toLowerCase() == 'piedra'){
        sueldoDisponible = sueldoDisponible - 300000
        alert(`La elección fue ${jugadorOpcion} y nuestro oponente fue ${juegoPPTr} PERDISTE :( Por lo tanto tu sueldo es de: ${sueldoDisponible}`)
    }else if(juegoPPTr=='tijera' && jugadorOpcion.toLowerCase() == 'papel'){
        sueldoDisponible = sueldoDisponible - 300000
        alert(`La elección fue ${jugadorOpcion} y nuestro oponente fue ${juegoPPTr} PERDISTE :( Por lo tanto tu sueldo es de: ${sueldoDisponible}`)
    }else{
        alert(`La elección fue ${jugadorOpcion} y nuestro oponente fue ${juegoPPTr} has ganado por lo tanto no pagas y el sueldo te queda en ${sueldoDisponible}`)
    }
}     
ppt(jugadorOpcion)
    
alert("Llegamos al Hotel")
alert("Para hacer actividades en el hotel debemos elegir un color")
let color = prompt("Opcion1:Amarillo Opcion2:Verde Opcion3:Roja Opcion4:Azul")
if(color==1){
    alert("OHHH QUE BIEN")
    alert("Vamos para piscina,el agua huele raro, pero no le vamos a dar imporancia ")
    alert("Elige una opcion")
    let Opcio1=prompt("opcion1:Entras a la piscina Opcion2 : No entrar")
    if(Opcio1 ==1){
        alert("tengo malas noticias, Nos ahogamos")
        alert("Acabamos de morir, Fue un buen viaje")

    }
    else if (Opcio1 ==2){
        alert("QUE BIEN, Mejor tomamos el sol")
    }
}
else if(color==2){
    alert("vamos a caminar, Debemos llevar aguita para el camino")
    alert("Elige una opcion")
    alert("estas en medio de la caminata")

    let caminaop=prompt('Opcion1:Seguir caminando Opcion2:devolvernos')
    if (caminaop ==1){
        alert("llegamos a una hermosa cascada y no vamos a tomar fotos")

    }
    else if(caminaop ==2){
        alert("OHHHH NO, Nos perdimos")
    }
}
else if(color ==3){
    alert("Actividades en la playa")
    alert("Elige una opcion")
    let playa  = prompt('OPCION1:jugar voleibol OPCION2:Nada en el mar y montar moto OPCION3:Tomar ')
    if(playa==1){
        alert("la estas pasando genial")

    }
    else if(playa==2){
        alert("la estas pasando increible ")
    }
    else if(playa==3){
        alert("oh no, no Acaba de caer mal, nos tendremos que devolver de emergencia")

    }
}
else if(color ==4){
    alert("te acaba de tocar: Actividades dentro del hotel")
    alert("ELige un opcion")
    let actividade = prompt('opcion1:jugar bingo opcion2:Bailar: opcion3:casino')
    if(actividade==1){
        alert("acabas de ganar el bingo lo cual son 8000000")
        alert(`tu salario actual es ${sueldoDisponible +800000}`)

    }
    else if (actividade ==2){
        alert("la estas pasando muy bien bailando")
    }
    else if(actividade ==3){
        alert("perdiste demasido dinero solo te queda para el pasaje ")
        alert(`tu salario actual es de ${sueldoDisponible - 2000000}`)
    }
}



alert("Gracias por jugar") 