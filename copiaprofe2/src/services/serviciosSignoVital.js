//PASOS PARA CONSUMIR API CON JS

export async function buscarSignoVital(){
    // PASO 1. 
    //Se configura la url del servicio que se desea consumir (PA ONDE VAS MIJO)
    const URL="http://localhost:8080/api/signovital"

    // PASO 2.
    //Se configura la peticion del servicio a consumir (A QUE VAS PA ALLÁ OME)
    let peticion={
    method:"GET",
    }

    // PASO 3.
    //Consumir el API (ARRANQUE PS MIJO)
    let respuestaServidor=await fetch(URL,peticion)
    let signoVital=await respuestaServidor.json()
    console.log(signoVital);
    return signoVital
}

export async function resgistrarSignoVital(datosSignoVital){
    const URL="http://localhost:8080/api/signovital"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosSignoVital)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal 
}
