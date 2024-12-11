//Variable globales
const d = document;
let clienteInput = d.querySelector(".cliente");
let productoInput = d.querySelector(".producto");
let precioInput = d.querySelector(".precio");
let imagenInput = d.querySelector(".imagen");
let observacionInput = d.querySelector(".observacion");
let btnGuardar = d.querySelector(".btn-guardar");
let tabla = d.querySelector(".table > tbody");

//Agregar evento click al boton del formulario
btnGuardar.addEventListener("click", () => {
    //alert(clienteInput.value);
    let datos = validarFormulario();
    guardarDatos (datos);
  
});

//Función para validar los campos del formulario
function validarFormulario() {
  if (
    clienteInput.value == "" ||
    productoInput.value == "" ||
    precioInput.value == "" ||
    imagenInput.value == ""){
    alert("Todos los campos del formulario son obligatorios");
    }else{
    datosForm ={
      cliente: clienteInput.value,
      producto: productoInput.value,
      precio: precioInput.value,
      imagen: imagenInput.value,
      observacion: observacionInput.value
  }
}

      console.log(datosForm);
      clienteInput.value ="";
      productoInput.value="";
      precioInput.value="";
      imagenInput.value="";
      observacionInput.value="";

      return datosForm;
  
}


  //Función guardar datos en localStorage
  
  const listadoPedidos = "Pedidos";
  function guardarDatos(datos) {
    let pedidos =[];

  //Extraer datos guardados previamente en localStorage
  let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));

    //Validar datos guardados previamente en localStorage
    if (pedidosPrevios != null) {
        pedidos = pedidosPrevios;
      }
    

  //Agregar el nuevo pedido al array
  pedidos.push(datos);


     //Guardar datos en localStorage
     localStorage.setItem(listadoPedidos, JSON.stringify (pedidos) );

     //Validar que los datos fueron guardados 
     alert("Datos guardados con exito");

  }

  //Función extraer los datos guardados en localStorage
function mostrarDatos() {
    let pedidos = [];
  
    //Extraer datos guardados previamente en localStorage
    let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));
  
    //Validar datos guardados previamente en localStorage
    if (pedidosPrevios != null) {
      pedidos = pedidosPrevios;
    }

    //console.log(pedidos)
 
    // Mostrar los datos en la tabla
    pedidos.forEach((p, i) => {
        let fila = d.createElement("tr");
        fila.innerHTML = `
            <td>${i + 1}</td>
            <td>${p.cliente}</td>
            <td>${p.producto}</td>
            
        `;
        tabla.appendChild(fila);
    });
}

mostrarDatos();