
contador = 0
var persons = []
var gente = []

function CrearUsuario() {

    document.getElementById('crear').innerHTML +=`<tr id='referencia${contador}'>
    <td>
        <input type="text" class="form-control form-control-sm" value="" id="nombre${contador}">
    </td>
    <td>
        <input type="text" class="form-control form-control-sm" value="" id="apellido${contador}">
    </td>
    <td>
        <input type="text" class="form-control form-control-sm" value="" id="correo${contador}">
    </td>
     <td>
     <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-success btn-sm" onclick="BtnActualizar(${contador})" >Actualizar</button>
        <button class="btn btn-danger btn-sm"  onclick="BtnEliminar('referencia${contador}')">Eliminar</button>
        <button class="btn btn-primary btn-sm"  onclick='Guardar(${contador})')">Guardar</button>
    </div>
        

     </td>
</tr>`
contador++
console.log("cantidad de elementos en pantalla - "+contador) 
}

function Guardar(pre){
    
    var person = {
           nombre:document.getElementById(`nombre${pre}`).value,
           apellidos: document.getElementById(`apellido${pre}`).value,
           correo :document.getElementById(`correo${pre}`).value
        };
       persons.push(person)
        console.log(persons)

    




   
}
function BtnEliminar(referencia){
    document.getElementById(referencia).innerHTML = ""
    contador = contador - 1; 
    console.log("contador en" + contador)

}
function BtnActualizar(para){
    /* nombre:document.getElementById('nombre').value = ""
    apellidos:document.getElementById('apellido').value = ""
    correo:document.getElementById('correo').value = ""  */
    

    document.getElementById(`nombre${para}`).value = ""
    document.getElementById(`apellido${para}`).value = ""
    document.getElementById(`correo${para}`).value = ""
    
   



} 