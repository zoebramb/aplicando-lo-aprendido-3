import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Tarea } from './Tarea.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RUTA_TASKS = path.join(__dirname, '..', 'tasks.json');// se crea la ruta al archivo tasks.json

let tasks = [];// es el "plan B" en caso de que falle la carga del archivo

const tareasLeidas = fs.readFileSync(RUTA_TASKS, 'utf-8');//leo el archivo tasks.json

try {
    const data = JSON.parse(tareasLeidas);//convertir el string de vuelta a un objeto
    if (Array.isArray(data)) tasks = data;//si es un array, lo asigno a tasks
    else console.warn("El archivo tasks.json no contiene un array válido.");
} catch (error) {
    console.error("Error al cargar 'tasks.json'. ¿Es JSON válido?", error.message);
}

//funcion constructora de la lista de tareas
function Lista()
{
    this.tareas = tasks.map(e => new Tarea(e.id, e.titulo, e.descripcion, e.dificultad, e.vencimiento, e.creacion, e.estado)); //para pasar cada tarea que esta en el tasks para que se instancien como una tarea.
}

//para guardar en el archivo json
Lista.prototype.guardar = function() 
{
    try {
        // Convertimos el array de objetos Tarea a texto JSON
        // null, 2 es para que se guarde ordenado (pretty print)
        const datos = JSON.stringify(this.tareas, null, 2);
        
        // Escribimos en el disco
        fs.writeFileSync(RUTA_TASKS, datos, 'utf-8');
    } catch (error) {
        console.error("Error al guardar los cambios:", error);
    }
};

Lista.prototype.agregar = function(tarea)
{
    this.tareas.push(tarea);

    this.guardar();
}

Lista.prototype.mostrar = function()
{
    this.tareas.forEach((tarea) => {
        console.log(`[${tarea.id}] 📌 ${tarea.titulo}`);
    });
};

Lista.prototype.buscar = function(titulo)
{
    const encontrada = this.tareas.find(t => t.titulo.toLowerCase() === titulo.toLowerCase());

    if (encontrada) 
    {


        
    console.log("🔍 Tarea encontrada:");
    encontrada.mostrar();
    } else {
    console.log("❌ No se encontró ninguna tarea con ese título.");
    }
};

export const lista = new Lista();

