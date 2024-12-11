import {buscarSignoVital} from "../services/serviciosSignoVital.js"
buscarSignoVital()
.then(function(respuestaBack){
    console.log(respuestaBack)


let fila=document.getElementById("fila");

respuestaBack.forEach(function(signoVital){
    console.log(signoVital);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=signoVital.nombre

    let valor=document.createElement("p");
    valor.textContent=signoVital.valor
    
    let fechaMedida=document.createElement("p");
    fechaMedida.textContent=signoVital.fechaMedida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechaMedida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    

});
})