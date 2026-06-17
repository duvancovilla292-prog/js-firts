const fomrulario = document.querySelector("#formulario");
const fd = new FormData(fomrulario);
console.log(fd.get("nombre"));
fd.append("id", 1);
console.log(fd.get("id"));
fd.delete("id");
console.log(fd.get("id"));

fomrulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const datos = new FormData(fomrulario);
    console.log(datos.get("nombre"));
    console.log(datos.get("email"));

    fetch("/posts", {
        method: "POST",
        body: datos
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
});