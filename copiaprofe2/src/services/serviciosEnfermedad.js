//PASOS PARA CONSUMIR API CON JS

export async function buscarEnfermedad(){
    // PASO 1. 
    //Se configura la url del servicio que se desea consumir (PA ONDE VAS MIJO)
    const URL="http://localhost:8080/api/enfermedad"

    // PASO 2.
    //Se configura la peticion del servicio a consumir (A QUE VAS PA ALLÁ OME)
    let peticion={
    method:"GET",
    }

    // PASO 3.
    //Consumir el API (ARRANQUE PS MIJO)
    let respuestaServidor=await fetch(URL,peticion)
    let enfermedades=await respuestaServidor.json()
    console.log(enfermedades);
    return enfermedades;
}

export async function resgistrarEnfermedad(datosEnfermedad){
    const URL="http://localhost:8080/api/enfermedad"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnfermedad)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal 
}