var nombreSoda = "La Sodita UTN";
export var pedidos = [];

export const preferenciasCliente = {
  ana: { direccion: { edificio: "Aulas 3" } },
  luis: {},
};

export function crearPedido({ cliente, producto, precio, notas }, ...extras) {
  const pedido = {
    cliente,
    producto,
    precio: precio ?? 0,
    notas,
    extras,
  };
  pedidos.push(pedido);
  return pedido;
}

export function calcularTotalDia() {
  return pedidos.reduce((total, pedido) => total + (pedido.precio ?? 0), 0);
}

export function aplicarDescuento(pedido, porcentaje) {
  return {
    ...pedido,
    precio: pedido.precio - (pedido.precio * porcentaje) / 100,
  };
}

export function obtenerEdificioCliente(clienteKey) {
  return preferenciasCliente[clienteKey]?.direccion?.edificio;
}
