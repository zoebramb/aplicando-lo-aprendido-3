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

export const lista = new Lista();

