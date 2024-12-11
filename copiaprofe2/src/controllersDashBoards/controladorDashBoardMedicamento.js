//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
import {buscarMedicamento} from "../services/serviciosMedicamento.js"

buscarMedicamento()
.then(function(respuestaBack){
    console.log(respuestaBack)

//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
respuestaBack.forEach(function(medicamento){
    console.log(medicamento);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=medicamento.nombre

    let presentacion=document.createElement("p");
    presentacion.textContent=medicamento.presentacion

    let dosis=document.createElement("p");
    dosis.textContent=medicamento.dosis

    let laboratorio=document.createElement("p");
    laboratorio.textContent=medicamento.laboratorio

    let fechaCaducidad=document.createElement("p");
    fechaCaducidad.textContent=medicamento.fechaCaducidad

    let contraindicaciones=document.createElement("p");
    contraindicaciones.textContent=medicamento.contraindicaciones

    let registro=document.createElement("p");
    registro.textContent=medicamento.registro
    
    let tieneCopago=document.createElement("p");
    tieneCopago.textContent=medicamento.tieneCopago

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraindicaciones);
    tarjeta.appendChild(registro);
    tarjeta.appendChild(tieneCopago);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});
})