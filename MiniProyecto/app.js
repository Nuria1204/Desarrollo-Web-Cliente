import {
    mostrarVideojuegos,
    ordenarPorPrecio,
    hayJuegoCaro,
    todosTienenPrecio,
    filtrarAventura,
    buscarJuego,
    buscarPosicion,
    obtenerClaves,
    obtenerEntradas,
    crearObjeto
} from "./funciones.js";

const resultado = document.getElementById("resultado");

let html = `
    <section class="seccion">
        <h2>Lista de videojuegos (ordenados por precio)</h2>

        <div class="lista-juegos">
`;

const ordenados = ordenarPorPrecio();

ordenados.forEach(function (juego) {
    html += `
        <article class="juego">
            <h3>${juego.nombre}</h3>
            <p><strong>Género:</strong> ${juego.genero}</p>
            <p><strong>Horas:</strong> ${juego.horas}</p>
            <p><strong>Precio:</strong> ${juego.precio.toFixed(2)} €</p>
        </article>
    `;
});

html += `
        </div>
    </section>

    <div class="resultados">

        <section class="resultado">
            <h2>¿Hay juegos de más de 50 €?</h2>
            <p class="valor">${hayJuegoCaro() ? "Sí" : "No"}</p>
        </section>

        <section class="resultado">
            <h2>¿Todos tienen un precio mayor que 0?</h2>
            <p class="valor">${todosTienenPrecio() ? "Sí" : "No"}</p>
        </section>

        <section class="resultado">
            <h2>Videojuegos de aventura</h2>
            <ul class="lista-simple">
`;

const aventuras = filtrarAventura();

aventuras.forEach(function (juego) {
    html += `<li>${juego.nombre}</li>`;
});

html += `
            </ul>
        </section>

        <section class="resultado">
            <h2>Buscar videojuego</h2>
`;

const juegoBuscado = buscarJuego();

if (juegoBuscado !== undefined) {
    html += `<p>Encontrado: <strong>${juegoBuscado.nombre}</strong></p>`;
} else {
    html += `<p>Videojuego no encontrado</p>`;
}

html += `
        </section>

        <section class="resultado">
            <h2>Posición de FIFA</h2>
            <p>La posición es: <strong>${buscarPosicion()}</strong></p>
        </section>

        <section class="resultado">
            <h2>Propiedades del primer videojuego</h2>
            <p>${obtenerClaves().join(", ")}</p>
        </section>

        <section class="resultado">
            <h2>Propiedades y valores</h2>
            <code>${JSON.stringify(obtenerEntradas())}</code>
        </section>

        <section class="resultado">
            <h2>Objeto creado</h2>
            <code>${JSON.stringify(crearObjeto())}</code>
        </section>

    </div>
`;

resultado.innerHTML = html;
mostrarVideojuegos();