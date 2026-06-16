const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#boton");


boton.addEventListener("click", function () {
 titulo.textContent = "¡JavaScript cambió el contenido!";
});
