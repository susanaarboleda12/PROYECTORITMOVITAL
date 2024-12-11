import {resgistrarMedicamento} from "../services/serviciosMedicamento.js"
//OBJETIVO: Capturar los datos de un formulario

//1. Por cada input, select, textarea del formulario se crea una variable

//2. Por cada variable debo utilizar el DOM para asociar el HTML con js

let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("fechacaducidadmedicamento")
let contraindicacionesdMedicamento=document.getElementById("contraindicacionesdmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("tienecopagomedicamento")


let botonRegistroMedicamento=document.getElementById("botonregistrarmedicamento")

botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioMedicamento={
    nombre:nombreMedicamento.value, 
    presentacion:presentacionMedicamento.value,
    dosis:dosisMedicamento.value,
    laboratorio:laboratorioMedicamento.value,
    fechaCaducidad:fechaCaducidadMedicamento.value,
    contraindicaciones:contraindicacionesdMedicamento.value,
    registro:registroMedicamento.value,
    tieneCopago:true
}

console.log(datosFormularioMedicamento)
resgistrarMedicamento(datosFormularioMedicamento)
.then(function(respuestaBack){
    console.log(respuestaBack)

    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
    })
})

