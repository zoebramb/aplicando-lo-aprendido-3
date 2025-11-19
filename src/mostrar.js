import promptSync from "prompt-sync";
import {lista} from "./Lista.js"
const prompt = promptSync();

export function mostrar()
{
    console.log("\n--- MOSTRAR TAREAS ---");
    console.log("[1] Todas las tareas \n[2] Tareas en proceso \n[3] Tareas terminadas \n[4] Tareas pendientes \n[5] Tareas canceladas");
    const opcion = prompt("Elija una opción para mostrar: ");

    const estados = 
    {
        "2": "en proceso",
        "3": "terminada",
        "4": "pendiente",
        "5": "cancelada" 
    }
 
    if (opcion === "1")
    {
        lista.mostrar();
    }
    else if (estados[opcion])
    {
        const e = estados[opcion];

        //filtrar las tareas
        const tareasfiltradas = lista.tareas.filter(t => t.estado === e);

        //verificar si se encontro algo
        if(tareasfiltradas.length === 0)
        {
            console.log(`No hay tareas para mostrar con el estado: "${e}"`);
        }
        else
        {
            console.log("---LISTA DE TAREAS---");
            
            tareasfiltradas.forEach((t, index) => console.log(`[${index + 1}] 📌 ${t.titulo}`));
        }
    }
    else 
    {
        console.log("Opcion no valida.");
    }

    //---DETALLE--

    console.log("Desea ver el detalle de alguna tarea? (s/n)");

    const respuesta = prompt().toLowerCase();

    if (respuesta === 's') 
    {
        const idTarea = parseInt(prompt("Ingrese el número de la tarea: "));

        //buscar la tarea por id

        const tareaEncontrada = lista.tareas.find(t => t.id === idTarea)
        
        if (tareaEncontrada) 
        {
            tareaEncontrada.detalle();

            editarTarea(tareaEncontrada);
        }
        else 
        {
            console.log("❌ No se encontró la tarea.");
        }
    }
}