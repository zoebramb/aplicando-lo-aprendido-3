import promptSync from "prompt-sync";
import {Tarea} from "./Tarea.js"
import {lista} from "./Lista.js"
import fs from 'fs';
const prompt = promptSync();

export function crear()
{
    let titulo = prompt("Título: ");
    let descripcion = prompt("Descripción: ");
    let dif = prompt("Dificultad ([1] baja, [2] media, [3] alta): ");
            
        let vencimiento = prompt("Fecha de vencimiento (DD-MM-AAAA): ");

        //instanciador de la nueva tarea
        let nuevaTarea = new Tarea(titulo, descripcion, dif, vencimiento);
        lista.agregar(nuevaTarea);

        let jsonString = JSON.stringify(nuevaTarea);
        fs.writeFileSync('tasks.json', jsonString);
        
        console.log("✅ Tarea agregada exitosamente.");
}