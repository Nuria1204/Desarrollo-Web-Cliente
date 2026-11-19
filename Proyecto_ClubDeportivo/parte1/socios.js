const formSocios = document.getElementById("formSocios");
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const contrasena = document.getElementById("contrasena");
const confirmacion = document.getElementById("confirmacion");
const telefono = document.getElementById("telefono");
const foto = document.getElementById("foto");
const condiciones = document.getElementById("condiciones");
const resultado = document.getElementById("resultado");
const modalidades = document.querySelectorAll('input[name="modalidad"]');

let enviado = false;

function mostrarError(campo, idError, mensaje) {

    campo.setCustomValidity(mensaje);

    document.getElementById(idError).textContent = mensaje;

    campo.setAttribute("aria-invalid", "true");
}

function limpiarError(campo, idError) {

    campo.setCustomValidity("");

    document.getElementById(idError).textContent = "";

    campo.setAttribute("aria-invalid", "false");
}

function limpiarErrorModalidad() {

    modalidades.forEach(function(radio) {
        radio.setCustomValidity("");
        radio.setAttribute("aria-invalid", "false");
    });

    document.getElementById("errorModalidad").textContent = "";
}

function validarNombre() {

    limpiarError(nombre, "errorNombre");

    if (nombre.value.trim() === "") {

        mostrarError(
            nombre,
            "errorNombre",
            "El nombre es obligatorio."
        );

    } else if (nombre.value.trim().length < 4) {

        mostrarError(
            nombre,
            "errorNombre",
            "El nombre debe tener al menos 4 caracteres."
        );

    } else if (nombre.value.trim().length > 50) {

        mostrarError(
            nombre,
            "errorNombre",
            "El nombre no puede superar los 50 caracteres."
        );

    }

}

function validarUsuario() {

    limpiarError(usuario, "errorUsuario");

    if (usuario.value.trim() === "") {

        mostrarError(
            usuario,
            "errorUsuario",
            "El usuario es obligatorio."
        );

    } else if (usuario.value.trim().length < 5) {

        mostrarError(
            usuario,
            "errorUsuario",
            "El usuario debe tener al menos 5 caracteres."
        );

    } else if (usuario.value.trim().length > 20) {

        mostrarError(
            usuario,
            "errorUsuario",
            "El usuario no puede superar los 20 caracteres."
        );

    }

}

function validarCorreo() {

    limpiarError(correo, "errorCorreo");

    if (correo.value.trim() === "") {

        mostrarError(
            correo,
            "errorCorreo",
            "El correo es obligatorio."
        );

    } else if (!correo.validity.valid) {

        mostrarError(
            correo,
            "errorCorreo",
            "Introduce un correo electrónico válido."
        );

    }

}

function validarEdad() {

    limpiarError(edad, "errorEdad");

    if (edad.value === "") {

        mostrarError(
            edad,
            "errorEdad",
            "La edad es obligatoria."
        );

    } else if (!Number.isInteger(edad.valueAsNumber)) {

        mostrarError(
            edad,
            "errorEdad",
            "La edad debe ser un número entero."
        );

    } else if (edad.valueAsNumber < 18) {

        mostrarError(
            edad,
            "errorEdad",
            "La edad mínima es de 18 años."
        );

    } else if (edad.valueAsNumber > 100) {

        mostrarError(
            edad,
            "errorEdad",
            "La edad máxima es de 100 años."
        );

    }

}

function validarModalidad() {

    limpiarErrorModalidad();

    const modalidad = document.querySelector(
        'input[name="modalidad"]:checked'
    );

    if (modalidad === null) {

        mostrarError(
            modalidades[0],
            "errorModalidad",
            "Debes seleccionar una modalidad."
        );

    }

}

function validarContrasena() {

    limpiarError(contrasena, "errorContrasena");

    if (contrasena.value === "") {

        mostrarError(
            contrasena,
            "errorContrasena",
            "La contraseña es obligatoria."
        );

    } else if (contrasena.value.length < 8) {

        mostrarError(
            contrasena,
            "errorContrasena",
            "La contraseña debe tener al menos 8 caracteres."
        );

    } else if (contrasena.value.length > 16) {

        mostrarError(
            contrasena,
            "errorContrasena",
            "La contraseña no puede superar los 16 caracteres."
        );

    }

}

function validarConfirmacion() {

    limpiarError(confirmacion, "errorConfirmacion");

    if (confirmacion.value === "") {

        mostrarError(
            confirmacion,
            "errorConfirmacion",
            "Debes confirmar la contraseña."
        );

    } else if (confirmacion.value !== contrasena.value) {

        mostrarError(
            confirmacion,
            "errorConfirmacion",
            "Las contraseñas no coinciden."
        );

    }

}

function validarTelefono() {

    limpiarError(telefono, "errorTelefono");

    if (telefono.value.trim() === "") {

        mostrarError(
            telefono,
            "errorTelefono",
            "El teléfono es obligatorio."
        );

    }

}

function validarFoto() {

    limpiarError(foto, "errorFoto");

    const archivo = foto.files[0];

    if (archivo === undefined) {

        mostrarError(
            foto,
            "errorFoto",
            "Debes seleccionar una foto."
        );

    } else if (archivo.type !== "image/jpeg") {

        mostrarError(
            foto,
            "errorFoto",
            "La foto debe ser un archivo JPEG."
        );

    } else if (archivo.size > 5000000) {

        mostrarError(
            foto,
            "errorFoto",
            "La foto no puede superar los 5.000.000 bytes."
        );

    }

}

function validarCondiciones() {

    condiciones.setCustomValidity("");

    condiciones.setAttribute("aria-invalid", "false");

    const error = document.getElementById("errorCondiciones");

    error.textContent = "";

    if (!condiciones.checked) {

        condiciones.setCustomValidity(
            "Debes aceptar las condiciones."
        );

        condiciones.setAttribute("aria-invalid", "true");

        error.textContent = "Debes aceptar las condiciones.";

    }

}

function validarFormulario() {

    validarNombre();
    validarUsuario();
    validarCorreo();
    validarEdad();
    validarModalidad();
    validarContrasena();
    validarConfirmacion();
    validarTelefono();
    validarFoto();
    validarCondiciones();

    return formSocios.checkValidity();

}

formSocios.addEventListener("submit", function(event) {

    event.preventDefault();

    enviado = true;

    resultado.textContent = "";

    validarFormulario();


    if (formSocios.checkValidity()) {

        const datos = new FormData(formSocios);

        datos.set("nombre", nombre.value.trim());
        datos.set("usuario", usuario.value.trim());
        datos.set("telefono", telefono.value.trim());

        const modalidad = document.querySelector(
            'input[name="modalidad"]:checked'
        );


        resultado.textContent =
            "Socio registrado correctamente. " +
            "Nombre: " + datos.get("nombre") +
            " | Usuario: " + datos.get("usuario") +
            " | Modalidad: " + modalidad.value;


    } else {

        formSocios.querySelector(":invalid").focus();

    }

});

nombre.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {
        validarNombre();
    }

});

usuario.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {
        validarUsuario();
    }

});

correo.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {
        validarCorreo();
    }

});

edad.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {
        validarEdad();
    }

});

modalidades.forEach(function(radio) {

    radio.addEventListener("change", function() {

        resultado.textContent = "";

        if (enviado) {
            validarModalidad();
        }

    });

});

contrasena.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {

        validarContrasena();

        validarConfirmacion();

    }

});

confirmacion.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {
        validarConfirmacion();
    }

});

telefono.addEventListener("input", function() {

    resultado.textContent = "";

    if (enviado) {
        validarTelefono();
    }

});

foto.addEventListener("change", function() {

    resultado.textContent = "";

    if (enviado) {
        validarFoto();
    }

});

condiciones.addEventListener("change", function() {

    resultado.textContent = "";

    if (enviado) {
        validarCondiciones();
    }

});