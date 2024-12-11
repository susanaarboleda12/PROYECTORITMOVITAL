import {buscarPacientes} from "../services/serviciosPaciente.js"

//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. Llamar al api
buscarPacientes()
.then(function(respuestaBack){
    console.log(respuestaBack)
    //2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
let fila  = document.getElementById("fila");


//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
respuestaBack.forEach(function(paciente){
  console.log(paciente);

    //4.Se crean columnas
let columna = document.createElement("div");
columna.classList.add("col")


//5. Se crean tarjetas
let tarjeta = document.createElement("div");
tarjeta.classList.add("card", "p-5", "h-100", "shadow");


//6. Se crea una etiqueta para poner el nombre del paciente
let nombre = document.createElement("h2");
let ips = document.createElement("p") 
let telefono = document.createElement("p")

nombre.textContent = paciente.nombres;
ips.textContent = paciente.ips;
telefono.textContent = paciente.telefono;


//PASO FINAL (ORDENANDO LAS CARTAS)
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(ips);
  tarjeta.appendChild(telefono);
  columna.appendChild(tarjeta);
  fila.appendChild(columna);
  
 
  });
})







