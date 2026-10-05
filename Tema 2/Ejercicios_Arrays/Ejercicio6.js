function calcularEdadHumana(edad) {
    return edad * 7;
}

let edad;

while (true) {

    let respuesta = prompt("Introduce la edad del perro:");

    if (respuesta === null) {
        break;
    }

    if (respuesta.trim() === "") {
        alert("Error: debes introducir una edad válida.");
        continue;
    }

    edad = Number(respuesta);

    if (!Number.isFinite(edad) || edad <= 0 || edad >= 30) {
        alert("Error: introduce un numero mayor que 0 y menor que 30.");
        continue;
    }

    break;
}

if (edad !== undefined) {

    const edadHumana = calcularEdadHumana(edad);

    alert("La edad humana del perro es " + edadHumana + " años.");
}
