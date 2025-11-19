import promptSync from "prompt-sync";
import {lista} from "./Lista.js"
const prompt = promptSync();

function editarTarea(Tarea)
{
    console.log("\n¿Deseas editar esta tarea? (s/n)");
    const editar = prompt().toLowerCase();

    if (editar === 's') {
        console.log("\n--- EDITANDO TAREA ---");
        console.log("Deja vacío si no quieres cambiar el valor actual.");

        const nuevoTitulo = prompt(`Nuevo Título (${tarea.titulo}): `);
        const nuevaDesc = prompt(`Nueva Descripción (${tarea.descripcion}): `);
        
        console.log("Estados: 1-pendiente, 2-en proceso, 3-terminada, 4-cancelada");
        const opEstado = prompt(`Nuevo Estado (${tarea.estado}): `);
        
        const mapaEstados = { "1": "pendiente", "2": "en proceso", "3": "terminada", "4": "cancelada" };

        if (nuevoTitulo) tarea.titulo = nuevoTitulo;
        if (nuevaDesc) tarea.descripcion = nuevaDesc;
        if (mapaEstados[opEstado]) tarea.estado = mapaEstados[opEstado];

        lista.guardar(); 

        console.log("✅ ¡Tarea actualizada y guardada correctamente!");
        
        tarea.detalle();
    }
}