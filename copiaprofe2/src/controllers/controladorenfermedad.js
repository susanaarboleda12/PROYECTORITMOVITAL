import {resgistrarEnfermedad} from "../services/serviciosEnfermedad.js"

let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad")
let probabilidadVidaEnfermedad=document.getElementById("probabilidaddevida")

let botonRegistroEnfermedad=document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault();

let datosFormularioEnfermedad={
    "nombre":nombreEnfermedad.value,
    "sintomas":sintomasEnfermedad.value,
    "clasificacion":clasificacionEnfermedad.value,
    "probabilidadVida":probabilidadVidaEnfermedad.value,
    "grado": gradoEnfermedad.value 
}

resgistrarEnfermedad(datosFormularioEnfermedad).then((respuesta)=>{
    console.log(respuesta);
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Se ha registrado correctamente la enfermedad!",
        icon: "success"
      });
}).catch((error)=>{
    console.log(error);
});

});