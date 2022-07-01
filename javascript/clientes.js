// PAGE: CLIENTES //

let altaUsuario = document.getElementById ("formularioClientes");

altaUsuario. addEventListener ("submit", validarFormulario );

function validarFormulario (e){
 e.preventDefault ();
 console.log("Formulario Enviado "); 
}


//* JSON */

/* Storage */

const usuario = "usuario"

sessionStorage.setItem(usuario,"Bienvenido: nombre")

let storage = sessionStorage.getItem('usuario')
console.log(storage)

let container = document.getElementById("contenedor");
let element = document.createElement("h3")
element.textContent = storage
container.append(element)


//let button = document.createElement("button")
//button.onclick=()=>{
//    sessionStorage.clear()
//}
//button.textContent = "Eliminar datos"
//container.append(button)