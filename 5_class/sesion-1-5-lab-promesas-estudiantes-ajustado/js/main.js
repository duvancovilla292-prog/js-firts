console.log("Inicio del laboratorio Sesion 1.5");
console.log("Abre la consola para revisar la carga de datos JSON.");

// TODO 1: Crea una funcion async llamada cargarEmpleados.
// Debe usar fetch("data/empleados.json").
// Debe convertir la respuesta con await respuesta.json().
// Debe mostrar los datos en consola usando console.log() o console.table().
// Debe recorrer los empleados e imprimir un mensaje por cada uno.
// Debe manejar errores con try/catch.

// TODO 2: Crea una funcion async llamada cargarProductos.
// Debe usar fetch("data/productos.json").
// Debe mostrar productos en consola y clasificar cada uno como Disponible o Agotado.

// TODO 3: Crea una funcion async llamada cargarTodo.
// Debe usar Promise.all() para cargar empleados y productos al mismo tiempo.
// Debe mostrar el total de empleados y productos cargados.

// TODO 4: Llama las funciones para probar el laboratorio.

console.log("--- Inicio del Laboratorio: Gestión de Promesas y async/await ---");

async function cargarEmpleados() {
    try {
        const response = await fetch('data/empleados.json');
        if (!response.ok) {
            throw new Error(`No se pudo obtener el archivo de empleados. Status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log("\n--- LISTA DE EMPLEADOS ---");
        data.empleados.forEach(empleado => {
            console.log(`Empleado: ${empleado.nombre} ${empleado.apellido} - Cargo: ${empleado.cargo} - Area: ${empleado.area}`);
        });
    } catch (error) {
        console.error("Error al cargar los empleados:", error.message);
    }
}

async function cargarProductos() {
    try {
        const response = await fetch('data/productos.json');
        if (!response.ok) {
            throw new Error(`No se pudo obtener el archivo de productos. Status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log("\n--- TABLA DE PRODUCTOS ---");
        console.table(data.productos);

        console.log("--- DISPONIBILIDAD DE PRODUCTOS ---");
        data.productos.forEach(producto => {
            const estado = producto.stock > 0 ? "Disponible" : "Agotado";
            console.log(`Producto: ${producto.nombre} - Stock: ${producto.stock} - ${estado}`);
        });

        let valorTotalInventario = 0;
        data.productos.forEach(producto => {
            valorTotalInventario += producto.precio * producto.stock;
        });
        console.log(`\n[RETO] Valor total del inventario: $${valorTotalInventario.toLocaleString()}`);
    } catch (error) {
        console.error("Error al cargar los productos:", error.message);
    }
}

async function cargarTodo() {
    try {
        const [resEmpleados, resProductos] = await Promise.all([
            fetch('data/empleados.json'),
            fetch('data/productos.json')
        ]);

        if (!resEmpleados.ok || !resProductos.ok) {
            throw new Error("Uno o ambos archivos no pudieron cargarse correctamente.");
        }

        const dataEmpleados = await resEmpleados.json();
        const dataProductos = await resProductos.json();

        console.log("\n========================================");
        console.log("RESUMEN FINAL DE CARGA (Promise.all):");
        console.log(`Total de empleados cargados: ${dataEmpleados.empleados.length}`);
        console.log(`Total de productos cargados: ${dataProductos.productos.length}`);
        console.log("========================================");
    } catch (error) {
        console.error("Error en la carga combinada (Promise.all):", error.message);
    }
}

async function ejecutarLaboratorio() {
    await cargarEmpleados();
    await cargarProductos();
    await cargarTodo();
}

ejecutarLaboratorio();

