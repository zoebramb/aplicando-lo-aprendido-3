import promptSync from "prompt-sync";
import {crear} from "./crear.js";
import {mostrar} from "./mostrar.js";
import {buscar} from "./buscar.js";

const prompt = promptSync();

function main()
{
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
            crear();
            break;
        case 2:
            mostrar();
            break;
        case 3:
            buscar();
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