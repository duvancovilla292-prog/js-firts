//=========================================================
//ejemplo de eventos en HTML, propiedad y addEventListener
//=========================================================
function saludarDesdeHTML() {
    const mensaje = document.querySelector("#mensajeHTML");
    mensaje.textContent = "Hola desde un evento escrito en HTML";
};

// PSe capturan btnPropiedad  y mensajePropiedad 

btnPropiedad.onclick = function () {//el .onclick es la propiedad del objeto
    mensajePropiedad.textContent = "Hola desde la propiedad onclick";
};

// PSe capturan btnListener y mensajeListener 

btnListener.addEventListener("click", function () {
    mensajeListener.textContent = "Hola desde addEventListener";
});

//========================================================
//Ejemplo de eventos en HTML, propiedad y addEventListener
//========================================================

// --- 1. CLICK ---
const btnClick = document.getElementById('btn-click');
const txtClick = document.getElementById('txt-click');

btnClick.addEventListener('click', () => {
  txtClick.innerText = '¡Gracias por el clic! 🎉';
  txtClick.style.color = 'green';
});


// --- 2. SUBMIT ---
const miFormulario = document.getElementById('mi-formulario');
const txtSubmit = document.getElementById('txt-submit');

miFormulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Evita que la página se recargue al enviar
  const valorInput = document.getElementById('input-submit').value;
  txtSubmit.innerText = `Formulario enviado con éxito. Dato: "${valorInput}"`;
  txtSubmit.style.color = 'blue';
});


// --- 3. INPUT ---
const inputRealtime = document.getElementById('input-realtime');
const txtRealtime = document.getElementById('txt-realtime');

inputRealtime.addEventListener('input', (evento) => {
  // evento.target.value captura lo que el usuario está escribiendo al instante
  txtRealtime.innerText = `Estás escribiendo: ${evento.target.value}`;
});


// --- 4. CHANGE ---
const miSelect = document.getElementById('mi-select');
const txtChange = document.getElementById('txt-change');

miSelect.addEventListener('change', (evento) => {
  if (evento.target.value) {
    txtChange.innerText = `Cambiaste la selección a: ${evento.target.value}`;
  } else {
    txtChange.innerText = '';
  }
});


// --- 5. KEYDOWN ---
const inputTecla = document.getElementById('input-tecla');
const txtTecla = document.getElementById('txt-tecla');

inputTecla.addEventListener('keydown', (evento) => {
  // evento.key nos dice exactamente qué tecla se presionó
  txtTecla.innerText = `Presionaste la tecla: [ ${evento.key} ]`;
});


// --- 6. MOUSEOVER / MOUSEOUT ---
const cajaMouse = document.getElementById('caja-mouse');

cajaMouse.addEventListener('mouseover', () => {
  cajaMouse.style.backgroundColor = '#ffc107'; // Cambia a amarillo
  cajaMouse.innerText = '¡El mouse está ADENTRO!';
});

cajaMouse.addEventListener('mouseout', () => {
  cajaMouse.style.backgroundColor = '#e2e2e2'; // Vuelve al gris original
  cajaMouse.innerText = 'El mouse salió.';
});

const boton = document.querySelector("#hola");
boton.addEventListener("click", function (event) {
    console.log(event.type); //el event.type nos dice el tipo de evento que se disparó
    console.log("---------------------------------------------");
    console.log(event.target);//el event.target nos dice el elemento que disparó el evento
    console.log("---------------------------------------------");
    console.log(event.target.tagName);//el event.target.tagName nos dice el nombre de la etiqueta del elemento que disparó el evento
    console.log("---------------------------------------------");
    console.log(event.target.className);//el event.target.className nos dice la clase del elemento que disparó el evento
    console.log("---------------------------------------------");
    console.log(event.target.innerText);//el event.target.innerText nos dice el texto del elemento que disparó el evento
    console.log("---------------------------------------------");
    console.log(event.key);//el event.key nos dice la tecla que se presionó
    console.log("---------------------------------------------");
    console.log(event.clientX);//el event.clientX nos dice la posición horizontal del mouse al momento de disparar el evento
    console.log("---------------------------------------------");
    console.log(event.clientY);//el event.clientY nos dice la posición vertical del mouse al momento de disparar el evento
    console.log("---------------------------------------------");

  });


  const formulario = document.querySelector("#formulario");
  const txt = document.getElementById('txt');

  function eventoPersonalizado(nombre, email) {
    const eventoUsuarioAgregado = new CustomEvent("usuario:agregado", {
      detail: {
        nombre: nombre,
        email: email
      }
    });
   
    document.dispatchEvent(eventoUsuarioAgregado); // Acá se llama el evento
}
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulario controlado con JavaScript");
    const df = new FormData(formulario);//el FormData nos permite capturar los datos del formulario
    console.log(df.get("nombre"));//el df.get("nombre") nos permite capturar el valor del input con name="nombre"
    console.log(df.get("email"));// el .get nos permite capturar el valor del input con name="email"
    txt.innerText = `Formulario enviado con éxito. Nombre: ${df.get("nombre")}, Email: ${df.get("email")}`;
    //alert(`Formulario enviado con éxito. Nombre: ${df.get("nombre")}, Email: ${df.get("email")}`);
    eventoPersonalizado(df.get("nombre"), df.get("email"));//llamamos a la función que dispara el evento personalizado
});

document.addEventListener("usuario:agregado", function (event) {
    const usuario = event.detail;
  
    const item = document.createElement("li");
    item.textContent = usuario.nombre + " - " + usuario.email;
    item.classList.add("usuario-destacado");
  
    listaUsuarios.append(item);
  });

