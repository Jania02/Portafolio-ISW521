// ============================================================
// ui.js — Capa de presentación
// Tema 6: separado de la lógica, template literals en todos
// los mensajes, destructuring al leer cada producto
// ============================================================

// Muestra un producto en la lista del DOM
// Usa destructuring para leer { nombre, precio } del objeto
export const renderProducto = ({ nombre, precio }, lista) => {
  const li = document.createElement("li");
  li.textContent = `${nombre} — ₡${precio.toLocaleString("es-CR")}`;
  lista.appendChild(li);
};

// Actualiza el total en pantalla con template literal
export const renderTotal = (total, elemento) => {
  elemento.textContent = `Total: ₡${total.toLocaleString("es-CR")}`;
};

// Muestra el saludo de bienvenida
export const renderBienvenida = (nombreUsuario, moneda, elemento) => {
  elemento.textContent = `Bienvenido, ${nombreUsuario}. Moneda activa: ${moneda}`;
};

// Limpia los campos del formulario
export const limpiarFormulario = (...campos) => {
  campos.forEach((campo) => (campo.value = ""));
};
