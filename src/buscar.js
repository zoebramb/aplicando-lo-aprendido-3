import promptSync from "prompt-sync";
import { lista } from "./Lista.js";    
const prompt = promptSync();

export function buscar()
{
    let buscador = prompt("Ingrese el título de la tarea a buscar: ");
    lista.buscar(buscador);
}