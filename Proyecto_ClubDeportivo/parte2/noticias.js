const formNoticias = document.getElementById("formNoticias");
const tituloNoticia = document.getElementById("tituloNoticia");
const contenidoNoticia = document.getElementById("contenidoNoticia");
const fechaPublicacion = document.getElementById("fechaPublicacion");
const imagenNoticia = document.getElementById("imagenNoticia");
const etiquetasNoticia = document.getElementById("etiquetasNoticia");
const errorTitulo = document.getElementById("errorTitulo");
const errorContenido = document.getElementById("errorContenido");
const errorFecha = document.getElementById("errorFecha");
const errorImagen = document.getElementById("errorImagen");
const resultadoNoticias = document.getElementById("resultadoNoticias");

let enviadoNoticias = false;


function mostrarErrorNoticia(campo, error, mensaje) {

    campo.setCustomValidity(mensaje);
    error.textContent = mensaje;
    campo.setAttribute("aria-invalid", "true");

}

function limpiarErrorNoticia(campo, error) {

    campo.setCustomValidity("");
    error.textContent = "";
    campo.setAttribute("aria-invalid", "false");

}

function validarTitulo() {

    limpiarErrorNoticia(tituloNoticia, errorTitulo);

    const titulo = tituloNoticia.value.trim();

    if (titulo === "") {

        mostrarErrorNoticia(
            tituloNoticia,
            errorTitulo,
            "El título es obligatorio."
        );

    } else if (titulo.length < 3 || titulo.length > 100) {

        mostrarErrorNoticia(
            tituloNoticia,
            errorTitulo,
            "El título debe tener entre 3 y 100 caracteres."
        );

    }

}

function validarContenido() {

    limpiarErrorNoticia(contenidoNoticia, errorContenido);

    const contenido = contenidoNoticia.value.trim();

    if (contenido === "") {

        mostrarErrorNoticia(
            contenidoNoticia,
            errorContenido,
            "El contenido es obligatorio."
        );

    } else if (contenido.length < 20 || contenido.length > 2000) {

        mostrarErrorNoticia(
            contenidoNoticia,
            errorContenido,
            "El contenido debe tener entre 20 y 2000 caracteres."
        );

    }

}

function obtenerFechaHoy() {

    const hoy = new Date();

    const año = hoy.getFullYear();

    const mes = String(hoy.getMonth() + 1).padStart(2, "0");

    const dia = String(hoy.getDate()).padStart(2, "0");

    return año + "-" + mes + "-" + dia;

}

function validarFecha() {

    limpiarErrorNoticia(fechaPublicacion, errorFecha);

    const fecha = fechaPublicacion.value;

    if (fecha === "") {

        mostrarErrorNoticia(
            fechaPublicacion,
            errorFecha,
            "La fecha de publicación es obligatoria."
        );

    } else if (fecha <= obtenerFechaHoy()) {

        mostrarErrorNoticia(
            fechaPublicacion,
            errorFecha,
            "La fecha debe ser posterior a hoy."
        );

    }

}

function validarImagenNoticia() {

    limpiarErrorNoticia(imagenNoticia, errorImagen);

    const archivo = imagenNoticia.files[0];

    if (!archivo) {

        mostrarErrorNoticia(
            imagenNoticia,
            errorImagen,
            "La imagen es obligatoria."
        );

    } else if (archivo.type !== "image/jpeg") {

        mostrarErrorNoticia(
            imagenNoticia,
            errorImagen,
            "La imagen debe ser de tipo JPEG."
        );

    } else if (archivo.size > 5000000) {

        mostrarErrorNoticia(
            imagenNoticia,
            errorImagen,
            "La imagen no puede superar los 5 MB."
        );

    }

}

function obtenerEtiquetas() {

    const etiquetas = etiquetasNoticia.value.split(",");

    const etiquetasLimpias = etiquetas.map(function(etiqueta) {

        return etiqueta.trim();

    });

    const etiquetasValidas = etiquetasLimpias.filter(function(etiqueta) {

        return etiqueta !== "";

    });

    return etiquetasValidas;

}

function validarFormularioNoticias() {

    validarTitulo();
    validarContenido();
    validarFecha();
    validarImagenNoticia();

    return formNoticias.checkValidity();

}

formNoticias.addEventListener("submit", function(evento) {

    evento.preventDefault();

    enviadoNoticias = true;

    resultadoNoticias.textContent = "";

    if (validarFormularioNoticias()) {

        const datos = new FormData(formNoticias);

        const titulo = datos.get("titulo").trim();

        const contenido = datos.get("contenido").trim();

        const fecha = datos.get("fecha");

        const etiquetas = obtenerEtiquetas();

        let mensajeEtiquetas;

        if (etiquetas.length === 0) {

            mensajeEtiquetas = "Sin etiquetas";

        } else {

            mensajeEtiquetas = etiquetas.join(", ");

        }

        resultadoNoticias.textContent =
            "Noticia publicada correctamente. " +
            "Título: " + titulo +
            " | Fecha: " + fecha +
            " | Etiquetas: " + mensajeEtiquetas;

    } else {

        const primerCampoIncorrecto =
            formNoticias.querySelector(":invalid");

        if (primerCampoIncorrecto) {

            primerCampoIncorrecto.focus();

        }

    }

});

tituloNoticia.addEventListener("input", function() {

    resultadoNoticias.textContent = "";

    if (enviadoNoticias) {

        validarTitulo();

    }

});

contenidoNoticia.addEventListener("input", function() {

    resultadoNoticias.textContent = "";

    if (enviadoNoticias) {

        validarContenido();

    }

});

fechaPublicacion.addEventListener("change", function() {

    resultadoNoticias.textContent = "";

    if (enviadoNoticias) {

        validarFecha();

    }

});

imagenNoticia.addEventListener("change", function() {

    resultadoNoticias.textContent = "";

    if (enviadoNoticias) {

        validarImagenNoticia();

    }

});

etiquetasNoticia.addEventListener("input", function() {

    resultadoNoticias.textContent = "";

});
