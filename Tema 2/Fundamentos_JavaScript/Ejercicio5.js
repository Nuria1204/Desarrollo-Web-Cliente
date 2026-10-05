const productos = [];

while (true) {

    const respuesta = prompt("Introduce un producto:");

    if (respuesta === null) {
        break;
    }

    const producto = respuesta.trim();

    if (producto === "") {
        console.log("El producto no puede estar vacío.");
        continue;
    }

    productos.push(producto);
}

if (productos.length === 0) {

    console.log("Lista vacía");

} else {

    console.log("Lista final: " + productos.join(", "));
    console.log("Número de productos: " + productos.length);
}