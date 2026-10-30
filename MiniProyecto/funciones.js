const videojuegos = [
    {
        id: "J001",
        nombre: "Minecraft",
        genero: "Aventura",
        horas: 100,
        precio: 29.99
    },
    {
        id: "J002",
        nombre: "FIFA",
        genero: "Deportes",
        horas: 50,
        precio: 59.99
    },
    {
        id: "J003",
        nombre: "Zelda",
        genero: "Aventura",
        horas: 80,
        precio: 49.99
    },
    {
        id: "J004",
        nombre: "Mario Kart",
        genero: "Carreras",
        horas: 30,
        precio: 39.99
    }
];

export function mostrarVideojuegos() {
    videojuegos.forEach(function (juego) {
        console.log(juego.nombre);
    });
}

export function ordenarPorPrecio() {
    return [...videojuegos].sort(function (a, b) {
        return a.precio - b.precio;
    });
}

export function hayJuegoCaro() {
    return videojuegos.some(function (juego) {
        return juego.precio > 50;
    });
}

export function todosTienenPrecio() {
    return videojuegos.every(function (juego) {
        return juego.precio > 0;
    });
}

export function filtrarAventura() {
    return videojuegos.filter(function (juego) {
        return juego.genero === "Aventura";
    });
}

export function buscarJuego() {
    return videojuegos.find(function (juego) {
        return juego.nombre === "Zelda";
    });
}


export function buscarPosicion() {
    return videojuegos.findIndex(function (juego) {
        return juego.nombre === "FIFA";
    });
}

export function obtenerClaves() {
    return Object.keys(videojuegos[0]);
}

export function obtenerEntradas() {
    return Object.entries(videojuegos[0]);
}

export function crearObjeto() {
    const entradas = Object.entries(videojuegos[0]);

    return Object.fromEntries(entradas);
}