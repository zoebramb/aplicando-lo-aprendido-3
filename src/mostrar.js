import promptSync from "prompt-sync";
import {lista} from "./Lista.js"
const prompt = promptSync();

export function mostrar()
{
    lista.mostrar();

    console.log("Desea editar la tarea? (s/n)");
    let respuesta = prompt().toLowerCase();
        if (respuesta === 's') 
        {
            let numTarea = parseInt(prompt("Ingrese el número de la tarea a editar: ")) - 1;
                if (numTarea >= 0 && numTarea < lista.tareas.length) 
                {
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
                } 
                else {
                    console.log("❌ Número de tarea inválido.");
                }
            }
}
