// ============================================================
// main.js — Orquestador principal
// Importa de productos.js y ui.js, conecta todo
// ============================================================

import { agregarProducto, calcularTotal, leerProductoAPI } from "./productos.js";
import { renderProducto, renderTotal, renderBienvenida, limpiarFormulario } from "./ui.js";

// --- Datos de configuración simulados (como si vinieran de una API) ---
// Demuestra optional chaining (?.) y nullish coalescing (??)
const datosAPI = {
  usuario: null,                        // usuario no autenticado
  configuracion: { moneda: "CRC" },
};

const nombreUsuario = datosAPI?.usuario?.nombre ?? "invitado";
const moneda = datosAPI?.configuracion?.moneda ?? "USD";

// --- Producto simulado con datos incompletos desde API ---
const productoDesdeAPI = leerProductoAPI({
  producto: { nombre: "Audífonos", precio: 12500 },
});

// --- Estado de la aplicación ---
const listaProductos = [];

// --- Referencias al DOM ---
const inputNombre    = document.getElementById("nombre");
const inputPrecio    = document.getElementById("precio");
const btnAgregar     = document.getElementById("btnAgregar");
const listaDOM       = document.getElementById("listaProductos");
const totalDOM       = document.getElementById("total");
const bienvenidaDOM  = document.getElementById("bienvenida");

// --- Inicializar UI ---
renderBienvenida(nombreUsuario, moneda, bienvenidaDOM);

// Cargar el producto que vino de la "API"
agregarProducto(listaProductos, productoDesdeAPI);
renderProducto(productoDesdeAPI, listaDOM);
renderTotal(calcularTotal(listaProductos), totalDOM);

// --- Evento: agregar producto desde el formulario ---
btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const precio = Number(inputPrecio.value);

  if (!nombre || !precio || precio <= 0) {
    alert("Por favor ingresá un nombre y un precio válido.");
    return;
  }

  const producto = { nombre, precio };

  agregarProducto(listaProductos, producto);
  renderProducto(producto, listaDOM);
  renderTotal(calcularTotal(listaProductos), totalDOM);
  limpiarFormulario(inputNombre, inputPrecio);
  inputNombre.focus();
});
