import {buscarEnfermedad} from "../services/serviciosEnfermedad.js"
//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS, o también traerlos desde el back
buscarEnfermedad().then((enfermedades)=>{
    //2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
    let fila=document.getElementById("fila");
    
    //3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
    enfermedades.forEach(function(enfermedad){
        console.log(enfermedad);
        //4. SE CREA COLUMNAS 
        let columna=document.createElement("div");
        columna.classList.add("col");
    
    
        //5. SE CREA TARJETAS
        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card","p-5","h-100","shadow");
    
        //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
        let nombre=document.createElement("h2");
        nombre.textContent=enfermedad.nombre
    
        let sintomas=document.createElement("p");
        sintomas.textContent=enfermedad.sintomas
    
        let clasificacion=document.createElement("p");
        clasificacion.textContent=enfermedad.clasificacion
    
        let grado=document.createElement("p");
        grado.textContent=enfermedad.grado
        
        let probabilidadVida=document.createElement("p");
        probabilidadVida.textContent=enfermedad.probabilidadVida
    
        //PASO FINAL (ORDENAR LAS CARTAS)
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(sintomas);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(grado);
        tarjeta.appendChild(probabilidadVida);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });

}).catch((error)=>{
    console.log(error);
})
