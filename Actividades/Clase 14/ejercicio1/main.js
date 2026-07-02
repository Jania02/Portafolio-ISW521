import {
  crearPedido,
  calcularTotalDia,
  aplicarDescuento,
  pedidos,
  obtenerEdificioCliente,
} from "./pedidos.js";

import {
  mostrarPedidoCreado,
  mostrarTotalDia,
  mostrarEdificioCliente,
  mostrarDescuentoAplicado,
} from "./ui.js";

import mostrarResumenDia from "./ui.js";

const pedido1 = crearPedido(
  { cliente: "Ana", producto: "Casado", precio: 2500, notas: "Sin cebolla" },
  "queso",
  "aguacate"
);
mostrarPedidoCreado(pedido1);

const pedido2 = crearPedido({
  cliente: "Luis",
  producto: "Cafe con pan",
  precio: 1200,
  notas: undefined,
});
mostrarPedidoCreado(pedido2);
const pedido1ConDescuento = aplicarDescuento(pedido1, 10);
mostrarDescuentoAplicado(pedido1, pedido1ConDescuento);

mostrarTotalDia(calcularTotalDia());

mostrarEdificioCliente("Ana", obtenerEdificioCliente("ana"));
mostrarEdificioCliente("Luis", obtenerEdificioCliente("luis"));

mostrarResumenDia(...pedidos);
