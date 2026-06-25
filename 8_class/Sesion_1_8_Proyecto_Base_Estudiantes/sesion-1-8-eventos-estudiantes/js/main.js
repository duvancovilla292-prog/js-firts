const formulario = document.querySelector("#formularioProducto");
const nombreProducto = document.querySelector("#nombreProducto");
const precioProducto = document.querySelector("#precioProducto");
const categoriaProducto = document.querySelector("#categoriaProducto");

const previewNombre = document.querySelector("#previewNombre");
const previewCategoria = document.querySelector("#previewCategoria");
const mensajeEstado = document.querySelector("#mensajeEstado");
const productosLista = document.querySelector("#productosLista");
const contadorProductos = document.querySelector("#contadorProductos");
const historialEventos = document.querySelector("#historialEventos");

let totalProductos = 0;

// TODO 1: Escuchar el evento input del campo nombreProducto.

nombreProducto.addEventListener("input", function() {
   
    previewNombre.textContent = nombreProducto.value.trim() || "Sin nombre";// el trim() elimina espacios en blanco al inicio y al final del valor del input
    // el || "Sin nombre" es un operador lógico que si el valor del input es vacío, entonces se muestra "Sin nombre"
});

// TODO 2: Escuchar el evento change del select categoriaProducto.
// Actualiza previewCategoria con la categoría seleccionada.
categoriaProducto.addEventListener("change", function() {
    previewCategoria.textContent = categoriaProducto.value || "Ninguna";
});

// TODO 3: Escuchar el evento keydown del documento.
// Si la tecla es Escape, limpia el mensajeEstado.

//el event es un objeto que contiene información sobre el evento que ocurrió, en este caso, la tecla que se presionó
document.addEventListener("keydown", function(event) {//el keydown es un evento que se dispara cuando se presiona una tecla, y el event es un objeto que contiene información sobre el evento que ocurrió, en este caso, la tecla que se presionó
    if (event.key === "Enter") {
        mensajeEstado.textContent = "Completa el formulario para agregar un producto.";
        mensajeEstado.className = "mensaje";//el className es una propiedad que permite cambiar la clase de un elemento, en este caso, se cambia a "mensaje" para que no tenga el estilo de error o éxito
    }
});

// TODO 4: Escuchar el evento submit del formulario.
// Usa event.preventDefault(), valida los campos y crea una tarjeta.
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // el preventDefault() es un método que evita que el formulario se envíe y recargue la página, para poder manejar el envío con JavaScript

    if (!nombreProducto.value.trim() || !precioProducto.value || !categoriaProducto.value) { //el ! es un operador lógico que niega el valor, en este caso, si el valor del input es vacío, entonces se ejecuta el bloque de código
        mensajeEstado.textContent = "¡Error! Todos los campos son obligatorios.";
        mensajeEstado.className = "mensaje error";
        return;
    }

    // Estructura JSON/Object para el nuevo producto
    const nuevoProducto = {
        nombre: nombreProducto.value.trim(),
        precio: parseFloat(precioProducto.value),
        categoria: categoriaProducto.value
    };

    // aqui llamamos a la función crearTarjetaProducto para crear la tarjeta del producto
    crearTarjetaProducto(nuevoProducto);

    // TODO 6: Crear y emitir un CustomEvent llamado "producto:agregado".
    // Debe enviar nombre, precio y categoría dentro de detail.
    const eventoProducto = new CustomEvent("producto:agregado", {
        detail: nuevoProducto 
    });
    
    // Emitimos el evento personalizado en el formulario
    formulario.dispatchEvent(eventoProducto);

    formulario.reset();
    previewNombre.textContent = "Sin nombre";
    previewCategoria.textContent = "Ninguna";
    mensajeEstado.textContent = "¡Producto agregado con éxito!";
    mensajeEstado.className = "mensaje exito";
});
// TODO 5: Crear una función crearTarjetaProducto(producto).
// Debe crear un article, agregar contenido y permitir eliminar la tarjeta.
function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "card-producto";

    tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p><strong>Precio:</strong> $${producto.precio.toLocaleString()}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <button class="btn-eliminar">Eliminar</button>
    `;

    const btnEliminar = tarjeta.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function() {
        tarjeta.remove(); // Remueve el elemento del HTML
        
        totalProductos--; // el -- es un operador de decremento que resta 1 al valor de la variable
        contadorProductos.textContent = totalProductos;
    });
    //esto agrega la tarjeta al contenedor de productos
    productosLista.appendChild(tarjeta);
}


// TODO 7: Escuchar el evento personalizado "producto:agregado".
// Actualiza contador e historial usando event.detail.
formulario.addEventListener("producto:agregado", function(event) {
   
    totalProductos++;
    contadorProductos.textContent = totalProductos;

    const { nombre, precio, categoria } = event.detail;//el .detail es una propiedad del objeto event que contiene los datos que se enviaron en el CustomEvent, en este caso, el nombre, precio y categoría del producto agregado

    const itemHistorial = document.createElement("div");
    itemHistorial.className = "evento-item";//el .className permite cambiar todas las clases de un elemento, en este caso, se agrega la clase "evento-item" para que tenga el estilo definido en el CSS
    
    const ahora = new Date();//el new Date() crea un objeto de fecha y hora con la fecha y hora actual
    const horaFormateada = ahora.toLocaleTimeString();// el .toLocaleTimeString() convierte la fecha y hora a una cadena de texto con el formato de hora local

    itemHistorial.textContent = `[${horaFormateada}] Nuevo producto: ${nombre} (${categoria}) - $${precio}`;
    
    // colocamos el nuevo item al inicio del historial de eventos
    historialEventos.prepend(itemHistorial);
});
