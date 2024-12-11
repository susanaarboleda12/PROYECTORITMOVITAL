import {resgistrarPaciente} from "../services/serviciosPaciente.js"

// //OBJETIVO: Capturar los datos de un formulario

// //1. Por cada input, select, textarea del formulario se crea una variable

// //2. Por cada variable debo utilizar el DOM para asociar el HTML con js

let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresopaciente")
let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")

// PASO 3. Crear una variable para asociarla a id del boton que tengo en html

let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//PASO 4. Detectamos acciones o eventos en el boton

botonRegistroPaciente.addEventListener("click", function(evento){
    evento.preventDefault()


//PASO 5. Se crea un JSON
//que capture todos los datos del formulario

let datosFormularioPaciente={
    nombres:nombrePaciente.value,
    fechaNacimiento:fechaNacimientoPaciente.value,
    ciudad:ciudadPaciente.value,
    correo:correoPaciente.value,
    telefono:telefonoPaciente.value,
    ips:ipsPaciente.value,
    grupoIngreso:grupoIngresoPaciente.value,
    tienePoliza:true,
    fechaAfiliacion:fechaAfiliacionPaciente.value
}

//PASO 6. Se envian los datos al back
console.log(datosFormularioPaciente)
resgistrarPaciente(datosFormularioPaciente)
.then(function(respuestaBack){
    console.log(respuestaBack)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
     });
    })


})

//OBJETIVO:Recibir datos del BACK y hacerles render (render=PINTARLOS)
//PASO 1. QUEMAR O SIMULAR LOS DATOS



