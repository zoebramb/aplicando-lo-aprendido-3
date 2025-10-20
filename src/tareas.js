import promptSync from "prompt-sync";
const prompt = promptSync();

//funcion constructora de tarea
function Tarea (titulo, descripcion, dificultad, vencimiento, creacion, estado)
{
this.titulo = titulo;
this.descripcion = descripcion || "sin informacion";
this.dificultad = dificultad || "⭐";
this.vencimiento = vencimiento || "sin fecha";
this.creacion = new Date();
this.estado = estado || "pendiente";
}

// Metpodo del protoipo de tarea
Tarea.prototype.mostrar = function()
{
 console.log(
    `📌 ${this.titulo} - ${this.descripcion}\nDificultad: ${this.dificultad}\nVence: ${this.vencimiento}\nEstado: ${this.estado}\nCreada: ${this.creacion.toLocaleString()}`
  );
};

//funcion constructora de la lista de tareas
function Lista()
{
    this.tareas = [];
}

Lista.prototype.agregar = function(tarea)
{
    this.tareas.push(tarea);
}

Lista.prototype.mostrar = function()
{
    if (this.tareas.length === 0)
    {
        console.log("No hay tareas en la lista.");
        return;
    }
    else
    {
        console.log("\n--- LISTA DE TAREAS ---");
        this.tareas.forEach((tarea, index) => {
            console.log(`\nTarea ${index + 1}:`);
            tarea.mostrar();
        });
    }
};

Lista.prototype.buscar = function(titulo)
{
     const encontrada = this.tareas.find(t => t.titulo.toLowerCase() === titulo.toLowerCase());

      if (encontrada) {
    console.log("🔍 Tarea encontrada:");
    encontrada.mostrar();
  } else {
    console.log("❌ No se encontró ninguna tarea con ese título.");
  }
};

function main()
{
    const lista = new Lista();
    let opcion;

while (opcion !== 4) 
{
    console.log("\n--- MENÚ DE TAREAS ---");
    console.log("1. Agregar tarea");
    console.log("2. Mostrar tareas");
    console.log("3. Buscar tarea");
    console.log("4. Salir");

    opcion = parseInt(prompt("Elija una opción: "));

    switch (opcion) 
    {
        case 1:
            let titulo = prompt("Título: ");
            let descripcion = prompt("Descripción: ");
            let dif = prompt("Dificultad ([1] baja, [2] media, [3] alta): ");
            if (dif === "1") dif = "⭐";
            else if (dif === "2") dif = "⭐⭐";
            else if (dif === "3") dif = "⭐⭐⭐";
            
            let vencimiento = prompt("Fecha de vencimiento (DD-MM-AAAA): ");
            let nuevaTarea = new Tarea(titulo, descripcion, dif, vencimiento);
            lista.agregar(nuevaTarea);
            console.log("✅ Tarea agregada exitosamente.");
            break;
        case 2:
            lista.mostrar();

            console.log("Desea editar la tarea? (s/n)");
            let respuesta = prompt().toLowerCase();
            if (respuesta === 's') 
                {
                let numTarea = parseInt(prompt("Ingrese el número de la tarea a editar: ")) - 1;
                if (numTarea >= 0 && numTarea < lista.tareas.length) {
                    let tareaAEditar = lista.tareas[numTarea];
                    console.log("Ingrese los nuevos datos (deje en blanco para no cambiar):");
                    let nuevoTitulo = prompt(`Nuevo título (${tareaAEditar.titulo}): `);
                    let nuevaDescripcion = prompt(`Nueva descripción (${tareaAEditar.descripcion}): `);
                    let nuevaDificultad = prompt(`Nueva dificultad ([1] baja, [2] media, [3] alta) (${tareaAEditar.dificultad}): `);
                    if (nuevaDificultad === "1") nuevaDificultad = "⭐";
                    else if (nuevaDificultad === "2") nuevaDificultad = "⭐⭐";
                    else if (nuevaDificultad === "3") nuevaDificultad = "⭐⭐⭐";
                    let nuevoVencimiento = prompt(`Nueva fecha de vencimiento (${tareaAEditar.vencimiento}): `);
                    if (nuevoTitulo) tareaAEditar.titulo = nuevoTitulo;
                    if (nuevaDescripcion) tareaAEditar.descripcion = nuevaDescripcion;
                    if (nuevaDificultad) tareaAEditar.dificultad = nuevaDificultad;
                    if (nuevoVencimiento) tareaAEditar.vencimiento = nuevoVencimiento;
                    console.log("✅ Tarea editada exitosamente.");
                } else {
                    console.log("❌ Número de tarea inválido.");
                }
            }
            break;
        case 3:
            let buscador = prompt("Ingrese el título de la tarea a buscar: ");
            lista.buscar(buscador);
            break;
        case 4:
            console.log("Saliendo del programa...");
            return;
        default:
            console.log("Opción no válida. Intente de nuevo.");
    } 
}          
}
main();