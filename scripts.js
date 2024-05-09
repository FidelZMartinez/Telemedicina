// Código JavaScript para manejar el cambio de color de fondo al pasar el puntero sobre la sección de inicio
document.getElementById("inicio").addEventListener("mouseover", function() {
  this.style.backgroundColor = "#87CEEB"; // Cambia el color de fondo al azul claro
});

document.getElementById("inicio").addEventListener("mouseout", function() {
  this.style.backgroundColor = ""; // Restaura el color de fondo original al quitar el puntero
});
