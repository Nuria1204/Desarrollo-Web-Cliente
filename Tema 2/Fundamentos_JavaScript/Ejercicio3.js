const nombre = "Ana Lopez";
const profesion = "administrativa";
const antiguedad = 3;
const sueldoBase = 1200;

console.log(`${nombre} trabaja como ${profesion} y tiene ${antiguedad} anios de antigüedad.`);

const plus = sueldoBase * 0.10 * antiguedad;
const sueldoTotal = sueldoBase + plus;

console.log("Sueldo base: " + sueldoBase.toFixed(2) + " €");
console.log("Plus: " + plus.toFixed(2) + " €");
console.log("Total: " + sueldoTotal.toFixed(2) + " €");