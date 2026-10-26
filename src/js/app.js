function cambiarContenido() {
  document.getElementById('demo').innerHTML =
    '¡Hola! Texto cambiado con JavaScript.';
}
// Cambia el atributo src (y alt) de la imagen para mostrar otra foto
function cambiarImagen() {
  const img = document.getElementById('foto');
  img.src = 'https://picsum.photos/id/1025/300/200';
  img.alt = 'Perro';
}

// getAttribute lee el tipo actual y setAttribute lo alterna
function mostrarPassword() {
  const input = document.getElementById('clave');
  const tipo = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', tipo);
}
