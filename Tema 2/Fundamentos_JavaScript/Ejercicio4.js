const empleados = [
    "ana",
    "luis",
    "marta",
    "pedro",
    "lucia",
    "carlos",
    "elena"
];

const respuesta = prompt("Introduce un nombre:");

if (respuesta === null) {

    console.log("Consulta cancelada");

} else {

    const nombre = respuesta.trim();

    if (nombre === "") {

        console.log("Nombre vacío");

    } else {

        const nombreMinusculas = nombre.toLowerCase();

        if (empleados.includes(nombreMinusculas)) {
            console.log("Hola, " + nombreMinusculas);
        } else {
            console.log("No está en la lista");
        }
    }
}