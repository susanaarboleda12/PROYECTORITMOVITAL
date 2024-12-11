import {resgistrarSignoVital} from "../services/serviciosSignoVital.js"

//OBJETIVO: Capturar los datos de un formulario

//1. Por cada input, select, textarea del formulario se crea una variable

//2. Por cada variable debo utilizar el DOM para asociar el HTML con js

let nombreSignoVital=document.getElementById("nombresignovital");
let valorSignoVital=document.getElementById("valorsignovital");
let fechaMedidaSignoVital=document.getElementById("fechaMedidasignovital");

let botonRegistroSignoVital=document.getElementById("botonregistrosignovital");

botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioSignoVital={
    nombre:nombreSignoVital.value,
    valor:valorSignoVital.value,
    fechaMedida:fechaMedidaSignoVital.value
}

console.log(datosFormularioSignoVital)
resgistrarSignoVital(datosFormularioSignoVital)
.then(function(respuestaBack){
    console.log(respuestaBack)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Signo Vital registrado con exito",
        icon: "success"
      });
    })
})

