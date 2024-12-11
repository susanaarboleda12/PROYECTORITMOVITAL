import {resgistrarMedico} from "../services/serviciosMedico.js"
//OBJETIVO: Capturar los datos de un formulario

//1. Por cada input, select, textarea del formulario se crea una variable

//2. Por cada variable debo utilizar el DOM para asociar el HTML con js

let nombresMedico=document.getElementById("nombresmedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let polizaPaciente=document.getElementById("polizapaciente")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionConsultorioMedico=document.getElementById("direccionconsultoriomedico")
let disponibleFindeSemanaMedico=document.getElementById("disponiblefindesemanamedico")

let botonRegistroMedico=document.getElementById("botonregistromedico");

botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioMedico={
    nombres:nombresMedico.value,
    matriculaProfesional:matriculaProfesionalMedico.value,
    especialidad:especialidadMedico.value,
    salario:salarioMedico.value,
    ips:ipsMedico.value,
    correo:correoMedico.value,
    telefono:telefonoMedico.value,
    direccionConsultorio:direccionConsultorioMedico.value,
    disponibleFindeSemana:disponibleFindeSemanaMedico.value

}

console.log(datosFormularioMedico)
resgistrarMedico(datosFormularioMedico)
.then(function(respuestaBack){
    console.log(respuestaBack)

    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
    })
})



