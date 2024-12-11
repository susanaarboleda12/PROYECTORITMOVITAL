//PASOS PARA CONSUMIR API CON JS

export async function buscarMedicamento(){
    // PASO 1. 
    //Se configura la url del servicio que se desea consumir (PA ONDE VAS MIJO)
    const URL="http://localhost:8080/api/medicamento"

    // PASO 2.
    //Se configura la peticion del servicio a consumir (A QUE VAS PA ALLÁ OME)
    let peticion={
    method:"GET",
    }

    // PASO 3.
    //Consumir el API (ARRANQUE PS MIJO)
    let respuestaServidor=await fetch(URL,peticion)
    let medicamento=await respuestaServidor.json()
    console.log(medicamento);
    return medicamento;
}

export async function resgistrarMedicamento(datosMedicamento){
    const URL="http://localhost:8080/api/medicamento"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMedicamento)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal 
}