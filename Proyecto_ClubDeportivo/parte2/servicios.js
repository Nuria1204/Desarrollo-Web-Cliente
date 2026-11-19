const formServicios = document.getElementById("formServicios");
const nombreServicio = document.getElementById("nombreServicio");
const codigoServicio = document.getElementById("codigoServicio");
const duracion = document.getElementById("duracion");
const precio = document.getElementById("precio");
const categoria = document.getElementById("categoria");
const resultadoServicios = document.getElementById("resultadoServicios");

let enviadoServicios = false;


function mostrarErrorServicio(campo, idError, mensaje) {

    campo.setCustomValidity(mensaje);

    document.getElementById(idError).textContent = mensaje;

    campo.setAttribute("aria-invalid", "true");

}

function limpiarErrorServicio(campo, idError) {

    campo.setCustomValidity("");

    document.getElementById(idError).textContent = "";

    campo.setAttribute("aria-invalid", "false");

}

function validarNombreServicio() {

    limpiarErrorServicio(nombreServicio, "errorNombreServicio");

    if (nombreServicio.value.trim() === "") {

        mostrarErrorServicio(
            nombreServicio,
            "errorNombreServicio",
            "El nombre del servicio es obligatorio."
        );

    } else if (nombreServicio.value.trim().length < 3) {

        mostrarErrorServicio(
            nombreServicio,
            "errorNombreServicio",
            "El nombre debe tener al menos 3 caracteres."
        );

    } else if (nombreServicio.value.trim().length > 50) {

        mostrarErrorServicio(
            nombreServicio,
            "errorNombreServicio",
            "El nombre no puede superar los 50 caracteres."
        );

    }

}

function esCodigoValido(codigo) {

    const regex = /^DEP-[0-9]{3}$/;

    return regex.test(codigo);

}


function validarCodigoServicio() {

    limpiarErrorServicio(codigoServicio, "errorCodigoServicio");

    if (codigoServicio.value.trim() === "") {

        mostrarErrorServicio(
            codigoServicio,
            "errorCodigoServicio",
            "El código del servicio es obligatorio."
        );

    } else if (!esCodigoValido(codigoServicio.value.trim())) {

        mostrarErrorServicio(
            codigoServicio,
            "errorCodigoServicio",
            "El código debe tener el formato DEP- seguido de 3 números."
        );

    }

}

function validarDuracion() {

    limpiarErrorServicio(duracion, "errorDuracion");

    if (duracion.value === "") {

        mostrarErrorServicio(
            duracion,
            "errorDuracion",
            "La duración es obligatoria."
        );

    } else if (!Number.isInteger(duracion.valueAsNumber)) {

        mostrarErrorServicio(
            duracion,
            "errorDuracion",
            "La duración debe ser un número entero."
        );

    } else if (duracion.valueAsNumber < 15) {

        mostrarErrorServicio(
            duracion,
            "errorDuracion",
            "La duración mínima es de 15 minutos."
        );

    } else if (duracion.valueAsNumber % 15 !== 0) {

        mostrarErrorServicio(
            duracion,
            "errorDuracion",
            "La duración debe ser múltiplo de 15."
        );

    }

}

function validarPrecio() {

    limpiarErrorServicio(precio, "errorPrecio");

    if (precio.value === "") {

        mostrarErrorServicio(
            precio,
            "errorPrecio",
            "El precio es obligatorio."
        );

    } else if (!Number.isFinite(precio.valueAsNumber)) {

        mostrarErrorServicio(
            precio,
            "errorPrecio",
            "Introduce un precio válido."
        );

    } else if (precio.valueAsNumber < 0) {

        mostrarErrorServicio(
            precio,
            "errorPrecio",
            "El precio no puede ser negativo."
        );

    } else if (precio.valueAsNumber > 9999.99) {

        mostrarErrorServicio(
            precio,
            "errorPrecio",
            "El precio máximo es 9999,99 euros."
        );

    } else if (precio.validity.stepMismatch) {

        mostrarErrorServicio(
            precio,
            "errorPrecio",
            "El precio debe tener como máximo dos decimales."
        );

    }

}

function validarCategoria() {

    limpiarErrorServicio(categoria, "errorCategoria");

    if (categoria.value === "") {

        mostrarErrorServicio(
            categoria,
            "errorCategoria",
            "Debes seleccionar una categoría."
        );

    }

}

function validarFormularioServicios() {

    validarNombreServicio();
    validarCodigoServicio();
    validarDuracion();
    validarPrecio();
    validarCategoria();

    return formServicios.checkValidity();

}

formServicios.addEventListener("submit", function(event) {

    event.preventDefault();

    enviadoServicios = true;

    resultadoServicios.textContent = "";

    validarFormularioServicios();


    if (formServicios.checkValidity()) {

        const datos = new FormData(formServicios);

        datos.set("nombreServicio", nombreServicio.value.trim());
        datos.set("codigoServicio", codigoServicio.value.trim());

        resultadoServicios.textContent =
            "Servicio registrado correctamente. " +
            "Nombre: " + datos.get("nombreServicio") +
            " | Código: " + datos.get("codigoServicio") +
            " | Duración: " + datos.get("duracion") +
            " minutos" +
            " | Precio: " + datos.get("precio") + " €" +
            " | Categoría: " + datos.get("categoria");

    } else {

        formServicios.querySelector(":invalid").focus();

    }

});

nombreServicio.addEventListener("input", function() {

    resultadoServicios.textContent = "";

    if (enviadoServicios) {
        validarNombreServicio();
    }

});

codigoServicio.addEventListener("input", function() {

    resultadoServicios.textContent = "";

    if (enviadoServicios) {
        validarCodigoServicio();
    }

});

duracion.addEventListener("input", function() {

    resultadoServicios.textContent = "";

    if (enviadoServicios) {
        validarDuracion();
    }

});

precio.addEventListener("input", function() {

    resultadoServicios.textContent = "";

    if (enviadoServicios) {
        validarPrecio();
    }

});

categoria.addEventListener("change", function() {

    resultadoServicios.textContent = "";

    if (enviadoServicios) {
        validarCategoria();
    }

});