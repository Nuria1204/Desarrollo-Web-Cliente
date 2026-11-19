const formTestimonios = document.getElementById("formTestimonios");
const autorTestimonio = document.getElementById("autorTestimonio");
const textoTestimonio = document.getElementById("textoTestimonio");
const autorizacion = document.getElementById("autorizacion");
const errorAutor = document.getElementById("errorAutor");
const errorTestimonio = document.getElementById("errorTestimonio");
const contador = document.getElementById("contador");
const resultadoTestimonios = document.getElementById("resultadoTestimonios");
const textoBusqueda = document.getElementById("textoBusqueda");
const buscarNumeros = document.getElementById("buscarNumeros");
const resultadoNumeros = document.getElementById("resultadoNumeros");

let enviadoTestimonios = false;


function mostrarErrorTestimonio(campo, error, mensaje) {

    campo.setCustomValidity(mensaje);
    error.textContent = mensaje;
    campo.setAttribute("aria-invalid", "true");

}

function limpiarErrorTestimonio(campo, error) {

    campo.setCustomValidity("");
    error.textContent = "";
    campo.setAttribute("aria-invalid", "false");

}

function validarAutor() {

    limpiarErrorTestimonio(autorTestimonio, errorAutor);

    const autor = autorTestimonio.value.trim();

    if (autor === "") {

        mostrarErrorTestimonio(
            autorTestimonio,
            errorAutor,
            "El autor es obligatorio."
        );

    } else if (autor.length < 2 || autor.length > 50) {

        mostrarErrorTestimonio(
            autorTestimonio,
            errorAutor,
            "El autor debe tener entre 2 y 50 caracteres."
        );

    }

}

function validarTestimonio() {

    limpiarErrorTestimonio(textoTestimonio, errorTestimonio);

    const texto = textoTestimonio.value.trim();

    if (texto === "") {

        mostrarErrorTestimonio(
            textoTestimonio,
            errorTestimonio,
            "El testimonio es obligatorio."
        );

    } else if (texto.length < 10 || texto.length > 500) {

        mostrarErrorTestimonio(
            textoTestimonio,
            errorTestimonio,
            "El testimonio debe tener entre 10 y 500 caracteres."
        );

    }

}

function actualizarContador() {

    contador.textContent =
        textoTestimonio.value.length + " / 500 caracteres";

}

function validarFormularioTestimonios() {

    validarAutor();
    validarTestimonio();

    return formTestimonios.checkValidity();

}

formTestimonios.addEventListener("submit", function (evento) {

    evento.preventDefault();

    enviadoTestimonios = true;

    resultadoTestimonios.textContent = "";

    if (validarFormularioTestimonios()) {

        const datos = new FormData(formTestimonios);

        const autor = datos.get("autor").trim();
        const testimonio = datos.get("testimonio").trim();

        let mensaje;

        if (autorizacion.checked) {

            mensaje = "El testimonio ha sido enviado y autorizado para su publicación.";

        } else {

            mensaje = "El testimonio ha sido enviado, pero será privado.";

        }

        resultadoTestimonios.textContent =
            "Autor: " + autor +
            " | Testimonio: " + testimonio +
            " | " + mensaje;

    } else {

        const primerCampoIncorrecto =
            formTestimonios.querySelector(":invalid");

        if (primerCampoIncorrecto) {

            primerCampoIncorrecto.focus();

        }

    }

});

autorTestimonio.addEventListener("input", function () {

    resultadoTestimonios.textContent = "";

    if (enviadoTestimonios) {

        validarAutor();

    }

});

textoTestimonio.addEventListener("input", function () {

    resultadoTestimonios.textContent = "";

    actualizarContador();

    if (enviadoTestimonios) {

        validarTestimonio();

    }

});

autorizacion.addEventListener("change", function () {

    resultadoTestimonios.textContent = "";

});

buscarNumeros.addEventListener("click", function () {

    const texto = textoBusqueda.value;

    const numeros = texto.match(/[0-9]+/g);

    if (numeros === null) {

        resultadoNumeros.textContent = "No se han encontrado números.";

    } else {

        resultadoNumeros.textContent =
            "Números encontrados: " + numeros.join(", ");

    }

});

actualizarContador();
