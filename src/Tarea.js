//funcion constructora de tarea
function Tarea (titulo, descripcion, dificultad, vencimiento, creacion, estado)
{
this.titulo = titulo;
this.descripcion = descripcion || "sin informacion";
this.dificultad = dificultad || "⭐";
this.vencimiento = vencimiento || "sin fecha";
this.creacion = new Date();
this.estado = estado || "pendiente";
}

// Metpodo del protoipo de tarea
Tarea.prototype.mostrar = function()
{
 console.log(
    `📌 ${this.titulo} - ${this.descripcion}\nDificultad: ${this.dificultad}\nVence: ${this.vencimiento}\nEstado: ${this.estado}\nCreada: ${this.creacion.toLocaleString()}`
  );
};


export {Tarea};