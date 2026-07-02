let ventasFeria = [
  {
    stand: "Stand 3", producto: "Empanadas", categoria: "comida",
    monto: 15000, etiquetas: ["salado", "artesanal"]
  },
  {
    stand: "Stand 3", producto: "Refresco natural", categoria: "bebida",
    monto: 6000, etiquetas: ["natural"]
  },
  {
    stand: "Stand 7", producto: "Llavero tallado", categoria: "artesania",
    monto: 3500, etiquetas: ["madera", "artesanal"]
  },
  {
    stand: "Stand 7", producto: "Pulsera tejida", categoria: "artesania",
    monto: 2500, etiquetas: ["tejido"]
  },
  {
    stand: "Stand 12", producto: "Jabon artesanal", categoria: "cuidado",
    monto: 4000, etiquetas: ["natural", "artesanal"]
  },
  {
    stand: "Stand 5", producto: "Cafe de altura", categoria: "bebida",
    monto: 8000, etiquetas: ["organico"]
  },
  {
    stand: "Stand 5", producto: "Postre de cafe", categoria: "comida",
    monto: 3000, etiquetas: ["dulce"]
  },
];

console.log(typeof ventasFeria);
ventasFeria[15] = { stand: "Stand 20", producto: "Sorpresa" };
console.log(ventasFeria.length);

ventasFeria.length = 7;

let ventasAltas = [];
for (let i = 0; i < ventasFeria.length; i++) {
  if (ventasFeria[i].monto > 5000) {
    ventasAltas.push(ventasFeria[i]);
  }
}

let nombresProductos = [];
for (let i = 0; i < ventasFeria.length; i++) {
  nombresProductos.push(ventasFeria[i].producto.toUpperCase());
}

const ventasAltasDeclarativo = ventasFeria.filter(v => v.monto > 5000);
console.log(ventasAltasDeclarativo);

const nombresProductosDeclarativo = ventasFeria.map(v => v.producto.toUpperCase());
console.log(nombresProductosDeclarativo);

function ordenarPorMontoMutando(lista) {
  lista.sort((a, b) => b.monto - a.monto);
  return lista;
}

const ordenadas = ordenarPorMontoMutando(ventasFeria);
console.log(ventasFeria);

ventasFeria = [
  {
    stand: "Stand 3", producto: "Empanadas", categoria: "comida",
    monto: 15000, etiquetas: ["salado", "artesanal"]
  },
  {
    stand: "Stand 3", producto: "Refresco natural", categoria: "bebida",
    monto: 6000, etiquetas: ["natural"]
  },
  {
    stand: "Stand 7", producto: "Llavero tallado", categoria: "artesania",
    monto: 3500, etiquetas: ["madera", "artesanal"]
  },
  {
    stand: "Stand 7", producto: "Pulsera tejida", categoria: "artesania",
    monto: 2500, etiquetas: ["tejido"]
  },
  {
    stand: "Stand 12", producto: "Jabon artesanal", categoria: "cuidado",
    monto: 4000, etiquetas: ["natural", "artesanal"]
  },
  {
    stand: "Stand 5", producto: "Cafe de altura", categoria: "bebida",
    monto: 8000, etiquetas: ["organico"]
  },
  {
    stand: "Stand 5", producto: "Postre de cafe", categoria: "comida",
    monto: 3000, etiquetas: ["dulce"]
  },
];

function ordenarPorMonto(lista) {
  return [...lista].sort((a, b) => b.monto - a.monto);
}

const ordenadasSinMutar = ordenarPorMonto(ventasFeria);
console.log(ventasFeria);

const formatoVentas = ventasFeria.map(v => `${v.producto.toUpperCase()} (${v.stand}) - ${v.monto} colones`);
console.log(formatoVentas);
console.log(formatoVentas.length === ventasFeria.length);

const ventasArtesania = ventasFeria.filter(v => v.categoria === "artesania");
console.log(ventasArtesania);

const nombresArtesania = ventasFeria.filter(v => v.categoria === "artesania").map(v => v.producto);
console.log(nombresArtesania);

const ventaAlta = ventasFeria.find(v => v.monto > 7000);
console.log(ventaAlta);

const indiceVentaAlta = ventasFeria.findIndex(v => v.monto > 7000);
console.log(indiceVentaAlta);
G
const totalPorCategoria = ventasFeria.reduce((acc, v) => {
  acc[v.categoria] = (acc[v.categoria] ?? 0) + v.monto;
  return acc;
}, {});
console.log(totalPorCategoria);

const totalGeneral = ventasFeria.reduce((acc, v) => acc + v.monto, 0);
console.log(totalGeneral);

const montos = ventasFeria.map(v => v.monto);

console.log(montos.sort());

const ventasFeriaOrdenadas = [...ventasFeria].sort((a, b) => b.monto - a.monto);
console.log(ventasFeriaOrdenadas);

const todasEtiquetas = ventasFeria.flatMap(v => v.etiquetas);
console.log(todasEtiquetas);

const etiquetasUnicas = new Set(todasEtiquetas);
console.log(etiquetasUnicas.size);

// Reto Opcional
const reporteArtesania = ventasFeria
  .filter(v => v.categoria === "artesania")
  .map(v => `${v.producto} - ${v.monto} colones`)
  .sort();
console.log(reporteArtesania);
