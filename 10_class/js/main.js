const btnCargar = document.querySelector("#btn");
const listaDepartamentos = document.querySelector("#container");
const api = document.querySelector("#cambi");

async function obtenerDepartamentosDesdeAPI() {
    const respuesta = await fetch("https://api-colombia.com/api/v1/Department", {
        method: "GET"
    });

    if (!respuesta.ok) {
        throw new Error("Error al obtener departamentos");
    }

    const datos = await respuesta.json();

    return datos;
}

function mostrarDepartamentosEnPantalla(departamentos) {
    listaDepartamentos.textContent = "";

    departamentos.forEach(function (departamento) {
        const item = document.createElement("li");
        item.textContent = departamento.name;
        listaDepartamentos.append(item);
    });
}



btnCargar.addEventListener("click", async function () {
  try {
      
      api.textContent = "Cargando departamentos...";
      
      const departamentos = await obtenerDepartamentosDesdeAPI();
      mostrarDepartamentosEnPantalla(departamentos);
      
      
      api.textContent = "¡Departamentos cargados con éxito!";
      
  } catch (error) {
      console.error(error);
      
      api.textContent = "Hubo un error al cargar los datos.";
  }
});