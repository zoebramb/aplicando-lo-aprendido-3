//funcion constructora de tarea
function Tarea (id, titulo, descripcion, dificultad, vencimiento, creacion, estado)
{
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion || "sin informacion";
  this.dificultad = dificultad || "⭐";
  this.vencimiento = vencimiento || "sin fecha";
  this.creacion = new Date();
  this.estado = estado || "pendiente";
}

// Metpodo del protoipo de tarea

Tarea.prototype.detalle = function()
{
    console.log(`[${this.id}] Título: ${this.titulo}\n
      Descripcion: ${this.descripcion}\n
      Dificultad: ${this.dificultad}\n
      Vencimiento: ${this.vencimiento}\n
      Creacion: ${this.creacion}\n
      Estado: ${this.estado}`);
};

export {Tarea};