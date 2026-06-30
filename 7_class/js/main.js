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
// el .append() es similar al .appendChild(), pero el primero puede agregar varios nodos o cadenas de texto, mientras que el segundo solo puede agregar un nodo. Además, el .append() no devuelve ningún valor, mientras que el .appendChild() devuelve el nodo agregado.

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

// ------

btnRemove.addEventListener("click", function () {
    const primerProducto = document.querySelector(".producto");

    if (primerProducto) {
        primerProducto.remove();//el .remove() es un método que elimina un nodo del árbol DOM, en este caso se elimina el primer elemento con la clase "producto" del contenedor de productos.
    } else {//LA DIFERENCIA ENTRE .remove() y .removeChild() es que el primero se llama directamente sobre el nodo que se desea eliminar, mientras que el segundo se llama sobre el nodo padre del nodo que se desea eliminar. Además, .remove() no requiere un argumento, mientras que .removeChild() requiere el nodo hijo que se desea eliminar como argumento.
        console.warn("No hay productos para eliminar");//el .warn() es un método que muestra un mensaje de advertencia en la consola del navegador, en este caso se muestra un mensaje indicando que no hay productos para eliminar.
    }
});


btnReplaceChildren.addEventListener("click", function () {

    const nuevoProducto1 = document.createElement("article"); //el .createElement() es un método que crea un nuevo elemento HTML especificado, en este caso un elemento <article> que representará un nuevo producto.
    nuevoProducto1.textContent = "Nuevo producto: Monitor";
    nuevoProducto1.classList.add("producto");
    nuevoProducto1.classList.add("producto-destacado");

   
    const nuevoProducto2 = document.createElement("article");
    nuevoProducto2.textContent = "Nuevo producto: Impresora";
    nuevoProducto2.classList.add("producto");
    nuevoProducto2.classList.add("producto-destacado");

   
    contenedorProductos.replaceChildren(nuevoProducto1, nuevoProducto2);// el .replaceChildren() es un método que reemplaza todos los hijos de un elemento por otros elementos especificados, en este caso se reemplazan todos los productos del contenedor de productos por los nuevos productos creados.
});


btnReplaceWith.addEventListener("click", function () {
    const primeraTarjeta = contenedorProductos.firstElementChild;// el .firstElementChild es una propiedad que devuelve el primer elemento hijo de un elemento, en este caso se obtiene la primera tarjeta del contenedor de productos.

    if (primeraTarjeta) {
        const nuevaTarjeta = document.createElement("article");
        nuevaTarjeta.textContent = "Tarjeta reemplazada: Producto Premium";
        nuevaTarjeta.classList.add("producto");
        nuevaTarjeta.classList.add("producto-destacado");

      
        primeraTarjeta.replaceWith(nuevaTarjeta);// el .replaceWith() es un método que reemplaza un elemento específico por otro elemento, en este caso se reemplaza la primera tarjeta del contenedor de productos por la nueva tarjeta creada.
    } else {
        console.warn("No hay tarjeta para reemplazar");
    }
});

// la diferencia entre replaceChildren y replaceWith es que el primero reemplaza todos los hijos de un elemento por otros elementos, mientras que el segundo reemplaza un elemento específico por otro.
//la diferencia entre el == y === y = es que el primero es un operador de comparación que compara dos valores y devuelve true si son iguales, el segundo es un operador de comparación estricta que compara dos valores y devuelve true si son iguales y del mismo tipo, y el tercero es un operador de asignación que asigna un valor a una variable.