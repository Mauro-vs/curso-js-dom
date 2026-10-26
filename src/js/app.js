const demo = document.getElementById('demo');
const textoOriginal = demo.innerHTML; // guardamos el texto inicial

// Usa lo que escriba el usuario o, si está vacío, un texto por defecto
function cambiarContenido() {
  const nuevo = document.getElementById('nuevoTexto').value.trim();
  demo.innerHTML = nuevo || '¡Hola! Texto cambiado con JavaScript.';
}

// Devuelve el párrafo a su estado original
function restaurarContenido() {
  demo.innerHTML = textoOriginal;
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

// Guardamos el párrafo para no buscarlo en cada función
const texto = document.getElementById('texto-estilo');

// Cambia el color del texto a uno aleatorio de la lista
function cambiarColor() {
  const colores = ['red', 'blue', 'green', 'purple', 'orange'];
  texto.style.color = colores[Math.floor(Math.random() * colores.length)];
}

// font-size en CSS se escribe fontSize en JavaScript
function agrandar() {
  texto.style.fontSize = '2rem';
}

// visibility oculta el elemento pero mantiene su hueco en la página
function alternarVisible() {
  texto.style.visibility =
    texto.style.visibility === 'hidden' ? 'visible' : 'hidden';
}
