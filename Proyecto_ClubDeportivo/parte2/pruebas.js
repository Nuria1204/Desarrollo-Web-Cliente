function comprobarPrueba(nombre, resultadoEsperado, resultadoReal) {

    if (resultadoEsperado === resultadoReal) {

        console.log("CORRECTO: " + nombre);

    } else {

        console.log("ERROR: " + nombre);

    }

}

comprobarPrueba(
    "Nombre válido",
    true,
    esNombreValido("María López")
);

comprobarPrueba(
    "Nombre demasiado corto",
    false,
    esNombreValido("Ana")
);

comprobarPrueba(
    "Nombre con números",
    false,
    esNombreValido("María123")
);

comprobarPrueba(
    "Nombre con espacios",
    true,
    esNombreValido("  María   López  ")
);

comprobarPrueba(
    "Usuario válido",
    true,
    esUsuarioValido("Usuario123")
);

comprobarPrueba(
    "Usuario demasiado corto",
    false,
    esUsuarioValido("Ab12")
);

comprobarPrueba(
    "Usuario que empieza por número",
    false,
    esUsuarioValido("123Usuario")
);

comprobarPrueba(
    "Usuario con caracteres especiales",
    false,
    esUsuarioValido("Usuario_123")
);

comprobarPrueba(
    "Contraseña válida",
    true,
    esPasswordValido("Clave123")
);

comprobarPrueba(
    "Contraseña demasiado corta",
    false,
    esPasswordValido("Ab123")
);

comprobarPrueba(
    "Contraseña que empieza por número",
    false,
    esPasswordValido("123Clave")
);

comprobarPrueba(
    "Contraseña con guion bajo",
    true,
    esPasswordValido("Clave_123")
);

comprobarPrueba(
    "Teléfono válido",
    true,
    esTelefonoValido("+34 612 345 678")
);

comprobarPrueba(
    "Teléfono sin espacios",
    false,
    esTelefonoValido("+34612345678")
);

comprobarPrueba(
    "Teléfono con formato incorrecto",
    false,
    esTelefonoValido("123456789")
);

comprobarPrueba(
    "Código de servicio válido",
    true,
    esCodigoValido("DEP-123")
);

comprobarPrueba(
    "Código sin letras",
    false,
    esCodigoValido("123")
);

comprobarPrueba(
    "Código con demasiados números",
    false,
    esCodigoValido("DEP-1234")
);

comprobarPrueba(
    "Código con letras minúsculas",
    false,
    esCodigoValido("dep-123")
);

comprobarPrueba(
    "Referencia válida",
    true,
    esReferenciaValida("CITA-1234")
);

comprobarPrueba(
    "Referencia RES válida",
    true,
    esReferenciaValida("RES-5678")
);

comprobarPrueba(
    "Referencia incorrecta",
    false,
    esReferenciaValida("CITA1234")
);

comprobarPrueba(
    "Referencia con menos números",
    false,
    esReferenciaValida("CITA-123")
);

const textoNumeros = "Tengo 2 entrenamientos y 15 partidos.";

const numerosEncontrados = textoNumeros.match(/[0-9]+/g);

comprobarPrueba(
    "Extracción de números",
    "2,15",
    numerosEncontrados.join(",")
);

const etiquetasTexto = "fútbol, entrenamiento, salud";

const etiquetas = etiquetasTexto.split(",").map(function(etiqueta) {

    return etiqueta.trim();

});

comprobarPrueba(
    "Separación de etiquetas",
    3,
    etiquetas.length
);

comprobarPrueba(
    "Limpieza de etiquetas",
    "fútbol",
    etiquetas[0]
);


console.log("Pruebas finalizadas.");