import promptSync from "prompt-sync";
import {Tarea} from "./Tarea.js"
import {lista} from "./Lista.js"
import fs from 'fs';
const prompt = promptSync();

export function crear()
{   
    let id;
    let titulo = prompt("Título: ");
    let descripcion = prompt("Descripción: ");
    let dif = prompt("Dificultad ([1] baja, [2] media, [3] alta): ");
    let vencimiento = prompt("Fecha de vencimiento (DD-MM-AAAA): ");

    //instanciador de la nueva tarea
    id =+ 1;
    let nuevaTarea = new Tarea(id, titulo, descripcion, dif, vencimiento);
    lista.agregar(nuevaTarea);
}