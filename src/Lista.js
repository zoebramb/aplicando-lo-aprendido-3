import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RUTA_TASKS = path.join(__dirname, 'tasks.json');// se crea la ruta al archivo tasks.json

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
        this.tareas = tasks; //asignando una referencia 
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

    export const lista = new Lista();

