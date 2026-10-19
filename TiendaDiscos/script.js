
'use strict';

const contenedor = document.getElementById("contenedor-discos");

tienda.forEach(function(disco) {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const imagen = document.createElement("img");
    imagen.src = disco.caratula;
    imagen.alt = disco.titulo;
    imagen.classList.add("caratula");

    imagen.onerror = function() {
        this.onerror = null;
        this.src = "img/disco-defecto.svg";
        this.style.opacity = "0.5";
    };

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const titulo = document.createElement("h2");
    titulo.textContent = disco.titulo;

    const artista = document.createElement("p");
    artista.textContent = disco.artista;
    artista.classList.add("artista");

    const pais = document.createElement("span");
    pais.textContent = disco.pais;
    pais.classList.add("pais");

    const anio = document.createElement("span");
    anio.textContent = disco.publicacion;
    anio.classList.add("anio");

    const copias = document.createElement("p");
    copias.textContent = "🟡 " + disco.copias +
        "k copias vendidas";
    copias.classList.add("copias");

    const precio = document.createElement("p");
    precio.textContent = "€" + disco.precio.toFixed(2);
    precio.classList.add("precio");

    contenido.appendChild(titulo);
    contenido.appendChild(artista);
    contenido.appendChild(pais);
    contenido.appendChild(anio);
    contenido.appendChild(copias);
    contenido.appendChild(precio);

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(contenido);

    contenedor.appendChild(tarjeta);

});
