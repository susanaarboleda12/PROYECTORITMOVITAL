//Variable globales
let clienteInput = document.querySelector(".cliente");
let productoInput = document.querySelector(".producto");
let precioInput = document.querySelector(".precio");
let imagenInput = document.querySelector(".imagen");
let observacionInput = document.querySelector(".observacion");
let btnGuardar = document.querySelector(".btn-guardar");
let tabla = document.querySelector(".table > tbody");

//Agregar evento click al boton del formulario
btnGuardar.addEventListener("click", () => {
  let pedido = validadFormulario();
  if (pedido != null) {
      guardarPedido(pedido);    
      limpiarFormulario();
  }

  borrarTabla();
  mostrarDatos();
});

//Función para validar los campos del formulario
function validadFormulario() {
  let datosPedido;
  if (
    clienteInput.value == "" ||
    productoInput.value == "" ||
    precioInput.value == "" ||
    imagenInput.value == ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos del formulario son obligatorios",
    });

    return null;
  } else {
    datosPedido = {
      cliente: clienteInput.value,
      producto: productoInput.value,
      precio: precioInput.value,
      imagen: imagenInput.value,
      observacion: observacionInput.value,
    };

    return datosPedido;
  }
}

function limpiarFormulario() {
  clienteInput.value = "";
  productoInput.value = "";
  precioInput.value = "";
  imagenInput.value = "";
  observacionInput.value = "";
}

//Función guardar datos en localStorage
const listadoPedidos = "Pedidos";
function guardarPedido(pedido) {
  let pedidos = [];

  //Recuperar datos guardados previamente en localStorage
  let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));

  //Validar datos guardados previamente en localStorage
  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  //Agregar el nuevo pedido al arreglo
  pedidos.push(pedido);

  //Guardar datos en localStorage
  localStorage.setItem(listadoPedidos, JSON.stringify(pedidos));

  Swal.fire({
    icon: "success",
    title: "Datos guardados con éxito",
    showConfirmButton: false,
    timer: 1500,
  });
}

//Función extraer los datos guardados en localStorage
function mostrarDatos() {
  let pedidos = [];

  //Recuperar datos guardados previamente en localStorage
  let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));

  //Validar datos guardados previamente en localStorage
  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  if (pedidos.length != 0) {
      //Mostrar datos en la tabla
      pedidos.forEach((pedido, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
                                <td> ${i + 1}</td>
                                <td> ${pedido.cliente}</td>
                                <td> ${pedido.producto}</td>
                                <td> $ ${pedido.precio}</td>
                                <td> <img src="${pedido.imagen}" width="60px"> </td>
                                <td> ${pedido.observacion}</td>
                                <td> <span class="btn-editar btn btn-warning" onclick="editarPedido(${i})">📝</span> 
                                    <span class="btn-eliminar btn btn-danger" onclick="eliminarPedido(${i})">❌</span></td>
                            `;
        tabla.appendChild(fila);
      });    
  }
}

//Remueve los datos de la tabla
function borrarTabla() {
  let filas = document.querySelectorAll(".table > tbody > tr");
  filas.forEach((fila) => {
    fila.remove();
  });
}

//Función eliminar un pedido de la tabla
function eliminarPedido(posicion) {
  let pedidos = [];

  //Recuperar datos guardados previamente en localStorage
  let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));

  //Validar datos guardados previamente en localStorage
  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  //Confirmar pedido a eliminar
  //let confirmar = false;
  Swal.fire({
    title: `¿Deseas eliminar el pedido de ${pedidos[posicion].cliente}?`,
    text: "Una vez confirmado la acción no se podrá revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, elimínelo!",
  }).then((result) => {
    if (result.isConfirmed) {
      pedidos.splice(posicion, 1);

      //actualizar los datos de los pedidos restantes en localStorage
      localStorage.setItem(listadoPedidos, JSON.stringify(pedidos));

      borrarTabla();
      mostrarDatos();
      Swal.fire({
        title: "Eliminado!",
        text: "El pedido ha sido eliminado",
        icon: "success",
      });
    }
  });

  /*
  if (confirmar) {
    pedidos.splice(posicion, 1);

    //actualizar los datos de los pedidos restantes en localStorage
    localStorage.setItem(listadoPedidos, JSON.stringify(pedidos));

    borrarTabla();
    mostrarDatos();
  }*/
}

//Actualizar pedido de localStorage
function editarPedido(posicion) {
  let pedidos = [];

  //Recuperar datos guardados previamente en localStorage
  let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));

  //Validar datos guardados previamente en localStorage
  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  //pasar los datos al formulario para editarlos
  clienteInput.value = pedidos[posicion].cliente;
  productoInput.value = pedidos[posicion].producto;
  precioInput.value = pedidos[posicion].precio;
  imagenInput.value = pedidos[posicion].imagen;
  observacionInput.value = pedidos[posicion].observacion;

  //mostrar el botón actualizar y ocultar el de guardar
  let btnActualizar = document.querySelector(".btn-actualizar");
  btnActualizar.classList.remove("d-none");
  btnGuardar.classList.add("d-none");

  //Agregar evento al botón de actualizar
  btnActualizar.addEventListener("click", () => {
    pedidos[posicion].cliente = clienteInput.value;
    pedidos[posicion].producto = productoInput.value;
    pedidos[posicion].precio = precioInput.value;
    pedidos[posicion].imagen = imagenInput.value;
    pedidos[posicion].observacion = observacionInput.value;

    //guardar los datos editados en localStorage
    localStorage.setItem(listadoPedidos, JSON.stringify(pedidos));
    Swal.fire({
      icon: "success",
      title: "Datos guardados con éxito",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      btnActualizar.classList.add("d-none");
      btnGuardar.classList.remove("d-none");

      limpiarFormulario();
      borrarTabla();
      mostrarDatos();
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  borrarTabla();
  mostrarDatos();
});