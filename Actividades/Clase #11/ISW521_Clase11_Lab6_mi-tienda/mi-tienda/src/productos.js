// ============================================================
// productos.js — Lógica de datos
// Tema 6: módulo separado, sin var, con arrow functions,
// destructuring, optional chaining y nullish coalescing
// ============================================================

// Agrega un producto a la lista usando destructuring en la firma
export const agregarProducto = (lista, { nombre, precio }) => {
  lista.push({ nombre, precio });
};

// Calcula el total con reduce + optional chaining + nullish coalescing
// p?.precio ?? 0 protege si algún producto viene sin precio definido
export const calcularTotal = (lista) =>
  lista.reduce((total, p) => total + (p?.precio ?? 0), 0);

// Simula leer un producto desde una API que puede venir incompleto
export const leerProductoAPI = (datos) => {
  const nombre = datos?.producto?.nombre ?? "Sin nombre";
  const precio = datos?.producto?.precio ?? 0;
  return { nombre, precio };
};
