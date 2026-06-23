const contenedorProductos = document.querySelector("#contenedor-productos");
const titulo = document.querySelector("#titulo");
const btnAppend = document.querySelector("#btnAppend");
const btnPrepend = document.querySelector("#btnPrepend");
const btnBefore = document.querySelector("#btnBefore");
const btnAfter = document.querySelector("#btnAfter");


btnAppend.addEventListener("click", function () {
    const producto = document.createElement("article");//el .createElement() es un método que crea un nuevo elemento HTML especificado, en este caso un elemento <article> que representará un producto.
    producto.textContent = "Producto agregado al final: Mouse";// el .textContent es una propiedad que establece o devuelve el contenido de texto de un nodo, en este caso se establece el contenido del elemento <article> con el nombre del producto.
    producto.classList.add("producto");// el .add() es un método que agrega una o más clases al elemento, en este caso se agrega la clase "producto" al elemento <article> para aplicar estilos CSS.
    contenedorProductos.append(producto);// el .append() es un método que inserta un nodo al final de la lista de hijos de un elemento, en este caso se agrega el elemento <article> al contenedor de productos.
});// un nodo es un objeto que representa un elemento, atributo o texto en el árbol DOM. En este caso, el nodo es el elemento <article> que representa un producto.


btnPrepend.addEventListener("click", function () {
    const producto = document.createElement("article");
    producto.textContent = "Producto agregado al inicio: Teclado";
    producto.classList.add("producto");
    contenedorProductos.prepend(producto);// el .prepend() es un método que inserta un nodo al inicio de la lista de hijos de un elemento, en este caso se agrega el elemento <article> al inicio del contenedor de productos.
});//el .prepend() es similar al .append(), pero en lugar de agregar el nodo al final, lo agrega al inicio de la lista de hijos del elemento.


btnBefore.addEventListener("click", function () {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Mensaje insertado antes del título";
    mensaje.classList.add("mensaje");
    titulo.before(mensaje);// el .before() es un método que inserta un nodo antes de un elemento especificado, en este caso se agrega el elemento <p> antes del título.
});


btnAfter.addEventListener("click", function () {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Mensaje insertado después del título";
    mensaje.classList.add("mensaje");
    titulo.after(mensaje);//el .after() es un método que inserta un nodo después de un elemento especificado, en este caso se agrega el elemento <p> después del título.
});//el .after() es similar al .before(), pero en lugar de agregar el nodo antes, lo agrega después del elemento especificado.
// la estructura del .after() y .before() es la misma, odjeto-antes-o-despues.after(el-nodo-que-se-va-a-agregar) y objeto-antes-o-despues.before(el nodo-que-se-va-a-agregar)