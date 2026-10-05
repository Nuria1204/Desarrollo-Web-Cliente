const colores = ["rojo", "azul", "verde", "amarillo"];
let colorBuscado = " AZUL ";

colorBuscado = colorBuscado.trim().toLowerCase();

if (colores.includes(colorBuscado)) {
    console.log("Color encontrado");
} else {
    console.log("Color no encontrado");
}