class MiSaludo extends HTMLElement {
    constructor() {
      super();
      this.textContent =
        "Hola, soy un componente";
    }
  }
  
  customElements.define(
    "mi-saludo", MiSaludo);
class TarjetaMessi extends HTMLElement{ // La Clase TarjetaPerfil que se comportará como un elemento HTML
    constructor() {
        super(); // Activa primero el comportamiento normal de un elemento HTML antes de agregarle nuestra ló

        this.innerHTML = `
            <div class="card">
                <img src="img/messi.jpg" alt="Messi">
                <h3>Messi</h3>
                <p>El mejor jugador del mundo</p>
            </div>
        `;
    }
}

customElements.define("tarjeta-messi", TarjetaMessi);

class MiTarjetaShadow extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      // Inyectamos estilos y estructura directamente en el Shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          p { /* Este estilo solo afecta a los <p> dentro de este Shadow DOM */
            color: blue;
            font-weight: bold;
          }
          .card {
            width: 30%;
            padding: 20px;
            border-radius: 10px;
            background-color: #e0f2fe;
            border: 2px solid #0284c7;
            font-family: Arial, sans-serif;
          }
        </style>
  
        <div class="card">
          <h2>Hola desde mi Web Component</h2>
          <p>Este párrafo está dentro del Shadow DOM.</p>
        </div>
      `;
    }
  }
  customElements.define("shadow-tarjeta", MiTarjetaShadow);

  const template = document.querySelector("#template-producto");
const contenedorProductos = document.querySelector("#contenedor-productos");

const clone = document.importNode(template.content, true); 

clone.querySelector(".nombre").textContent = "Mouse Gamer";
clone.querySelector(".precio").textContent = "Precio: $85.000";

contenedorProductos.append(clone);