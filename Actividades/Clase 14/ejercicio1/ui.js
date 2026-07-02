export function mostrarPedidoCreado(pedido) {
  const extrasTexto = pedido.extras.length > 0 ? pedido.extras.join(", ") : "sin extras";
  console.log(`Pedido creado para ${pedido.cliente}: ${pedido.producto} - ₡${pedido.precio} (${extrasTexto})`);
}

export function mostrarTotalDia(total) {
  console.log(`Total del dia: ₡${total}`);
}

export function mostrarEdificioCliente(clienteNombre, edificio) {
  console.log(`Edificio de ${clienteNombre}: ${edificio ?? "no registrado"}`);
}

export function mostrarDescuentoAplicado(original, conDescuento) {
  console.log(`Pedido original de ${original.cliente} sigue en ₡${original.precio}, la copia con descuento quedó en ₡${conDescuento.precio}`);
}
export default function mostrarResumenDia(...pedidosDelDia) {
  const lineas = pedidosDelDia
    .map((p) => `- ${p.cliente}: ${p.producto} (₡${p.precio})`)
    .join("\n");

  const resumen = `Resumen del dia
${lineas}
Total de pedidos: ${pedidosDelDia.length}`;

  console.log(resumen);
  return resumen;
}
