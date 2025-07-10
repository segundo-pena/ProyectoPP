function mostrarImagen(event, id) {
  event.preventDefault();

  const fila = document.getElementById("fila-imagen-" + id);
  if (fila.style.display === "none") {
    fila.style.display = "table-row";
  } else {
    fila.style.display = "none";
  }
}