//PASOS PARA CONSUMIR API CON JS

export async function buscarMedico(){
    // PASO 1. 
    //Se configura la url del servicio que se desea consumir (PA ONDE VAS MIJO)
    const URL="http://localhost:8080/api/medico"

    // PASO 2.
    //Se configura la peticion del servicio a consumir (A QUE VAS PA ALLÁ OME)
    let peticion={
    method:"GET",
    }

    // PASO 3.
    //Consumir el API (ARRANQUE PS MIJO)
    let respuestaServidor=await fetch(URL,peticion)
    let medico=await respuestaServidor.json()
    console.log(medico);
    return medico;
}

export async function resgistrarMedico(datosMedico){
    const URL="http://localhost:8080/api/medico"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMedico)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal 
}