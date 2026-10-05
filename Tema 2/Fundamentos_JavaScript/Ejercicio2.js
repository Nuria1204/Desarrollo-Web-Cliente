const precioBase = 100;
const porcentajeImpuesto = 21;
const impuesto = precioBase * porcentajeImpuesto / 100;
const precioFinal = precioBase + impuesto;

console.log("Base: " + precioBase.toFixed(2) + " €");
console.log("Impuesto: " + impuesto.toFixed(2) + " €");
console.log("Total: " + precioFinal.toFixed(2) + " €");