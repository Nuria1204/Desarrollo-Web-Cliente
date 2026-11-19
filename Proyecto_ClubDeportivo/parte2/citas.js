const formCitas = document.getElementById("formCitas");
const socioCita = document.getElementById("socioCita");
const servicioCita = document.getElementById("servicioCita");
const referenciaCita = document.getElementById("referenciaCita");
const fechaCita = document.getElementById("fechaCita");
const confirmacionCita = document.getElementById("confirmacionCita");
const errorSocio = document.getElementById("errorSocio");
const errorServicioCita = document.getElementById("errorServicioCita");
const errorReferenciaCita = document.getElementById("errorReferenciaCita");
const errorFechaCita = document.getElementById("errorFechaCita");
const errorConfirmacionCita = document.getElementById("errorConfirmacionCita");
const resultadoCitas = document.getElementById("resultadoCitas");

let enviadoCitas = false;


function mostrarErrorCita(campo, error, mensaje) {

    campo.setCustomValidity(mensaje);
    error.textContent = mensaje;
    campo.setAttribute("aria-invalid", "true");

}

function limpiarErrorCita(campo, error) {

    campo.setCustomValidity("");
    error.textContent = "";
    campo.setAttribute("aria-invalid", "false");

}

function validarSocioCita() {

    limpiarErrorCita(socioCita, errorSocio);

    if (socioCita.value === "") {

        mostrarErrorCita(
            socioCita,
            errorSocio,
            "Debes seleccionar un socio."
        );

    }

}

function validarServicioCita() {

    limpiarErrorCita(servicioCita, errorServicioCita);

    if (servicioCita.value === "") {

        mostrarErrorCita(
            servicioCita,
            errorServicioCita,
            "Debes seleccionar un servicio."
        );

    }

}

function esReferenciaValida(referencia) {

    const regex = /^(CITA|RES)-[0-9]{4}$/;

    return regex.test(referencia);

}

function validarReferenciaCita() {

    limpiarErrorCita(referenciaCita, errorReferenciaCita);

    const referencia = referenciaCita.value.trim();

    if (referencia === "") {

        mostrarErrorCita(
            referenciaCita,
            errorReferenciaCita,
            "La referencia de la cita es obligatoria."
        );

    } else if (!esReferenciaValida(referencia)) {

        mostrarErrorCita(
            referenciaCita,
            errorReferenciaCita,
            "La referencia debe tener el formato CITA-1234 o RES-1234."
        );

    }

}

function validarFechaCita() {

    limpiarErrorCita(fechaCita, errorFechaCita);

    if (fechaCita.value === "") {

        mostrarErrorCita(
            fechaCita,
            errorFechaCita,
            "La fecha y hora son obligatorias."
        );

    } else {

        const partes = fechaCita.value.split("T");

        const fecha = partes[0].split("-");

        const hora = partes[1].split(":");

        const año = Number(fecha[0]);
        const mes = Number(fecha[1]) - 1;
        const dia = Number(fecha[2]);

        const horas = Number(hora[0]);
        const minutos = Number(hora[1]);

        const fechaSeleccionada = new Date(
            año,
            mes,
            dia,
            horas,
            minutos
        );

        const ahora = new Date();

        if (fechaSeleccionada <= ahora) {

            mostrarErrorCita(
                fechaCita,
                errorFechaCita,
                "La cita debe ser posterior al momento actual."
            );

        }

    }

}

function validarConfirmacionCita() {

    limpiarErrorCita(
        confirmacionCita,
        errorConfirmacionCita
    );

    if (!confirmacionCita.checked) {

        mostrarErrorCita(
            confirmacionCita,
            errorConfirmacionCita,
            "Debes confirmar que has revisado los datos."
        );

    }

}

function validarFormularioCitas() {

    validarSocioCita();
    validarServicioCita();
    validarReferenciaCita();
    validarFechaCita();
    validarConfirmacionCita();

    return formCitas.checkValidity();

}

formCitas.addEventListener("submit", function(evento) {

    evento.preventDefault();

    enviadoCitas = true;

    resultadoCitas.textContent = "";

    if (validarFormularioCitas()) {

        const datos = new FormData(formCitas);

        const socio = datos.get("socio");

        const servicio = datos.get("servicio");

        const referencia = referenciaCita.value.trim();

        const fecha = datos.get("fecha");

        const fechaFormateada = fecha.replace("T", " ");

        resultadoCitas.textContent =
            "Cita reservada correctamente. " +
            "Socio: " + socio +
            " | Servicio: " + servicio +
            " | Referencia: " + referencia +
            " | Fecha: " + fechaFormateada;

    } else {

        const primerCampoIncorrecto =
            formCitas.querySelector(":invalid");

        if (primerCampoIncorrecto) {

            primerCampoIncorrecto.focus();

        }

    }

});

socioCita.addEventListener("change", function() {

    resultadoCitas.textContent = "";

    if (enviadoCitas) {

        validarSocioCita();

    }

});

servicioCita.addEventListener("change", function() {

    resultadoCitas.textContent = "";

    if (enviadoCitas) {

        validarServicioCita();

    }

});

referenciaCita.addEventListener("input", function() {

    resultadoCitas.textContent = "";

    if (enviadoCitas) {

        validarReferenciaCita();

    }

});

fechaCita.addEventListener("change", function() {

    resultadoCitas.textContent = "";

    if (enviadoCitas) {

        validarFechaCita();

    }

});

confirmacionCita.addEventListener("change", function() {

    resultadoCitas.textContent = "";

    if (enviadoCitas) {

        validarConfirmacionCita();

    }

});
