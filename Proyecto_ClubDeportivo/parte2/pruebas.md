# Pruebas del proyecto Club Deportivo

## 1. Ejecución de la aplicación

Para ejecutar la aplicación, se debe abrir el archivo `index.html` en un navegador web.

La aplicación utiliza HTML, CSS y JavaScript, por lo que no necesita servidor, base de datos ni conexión a Internet.

Los formularios permiten comprobar los datos introducidos y muestran mensajes de error cuando algún campo no cumple las condiciones establecidas. Cuando todos los datos son correctos, se muestra una confirmación del envío.

## 2. Pruebas del formulario de socios

Se han realizado pruebas para comprobar el funcionamiento de todos los campos del formulario de socios.

En el campo nombre, se ha comprobado que no se permite dejarlo vacío, introducir únicamente espacios ni escribir menos de cuatro caracteres. También se ha comprobado que acepta nombres que cumplen la longitud establecida y que permite utilizar letras y espacios.

En el nombre de usuario, se ha comprobado que debe tener entre cinco y veinte caracteres, comenzar por una letra y contener únicamente letras y números.

En el correo electrónico, se ha comprobado que se muestran errores cuando el campo está vacío o cuando se introduce una dirección con un formato incorrecto. También se ha probado una dirección de correo válida.

En el campo edad, se ha comprobado que solo se aceptan números enteros entre 18 y 100. Se han probado valores inferiores al mínimo, superiores al máximo, valores decimales y el campo vacío.

También se ha comprobado que es obligatorio seleccionar una modalidad, que la contraseña debe tener entre ocho y dieciséis caracteres, que debe comenzar por una letra y que únicamente puede contener letras, números y guiones bajos.

La confirmación de contraseña debe coincidir con la contraseña introducida.

En el teléfono, se ha comprobado que debe cumplir el formato establecido: prefijo +34 y número separado mediante espacios.

En la fotografía, se ha probado el envío sin seleccionar ningún archivo, la selección de una imagen PNG y la selección de una imagen JPEG válida. También se ha comprobado que no se permite seleccionar una imagen que supere los cinco megabytes.

Por último, se ha comprobado que es obligatorio aceptar las condiciones y que, cuando todos los campos son correctos, se muestra una confirmación con los datos del socio.

## 3. Pruebas del formulario de servicios

En el formulario de servicios se ha comprobado que el nombre del servicio es obligatorio y que debe tener entre tres y cincuenta caracteres.

También se ha comprobado que el código del servicio debe cumplir el formato establecido, comenzando por `DEP-` y seguido de tres números.

En la duración, se ha comprobado que el campo es obligatorio, que el valor mínimo es de quince minutos y que la duración debe ser un múltiplo de quince. Se han probado valores inferiores al mínimo y valores que no cumplen esta condición.

En el precio, se ha comprobado que no se permiten valores negativos, que el precio debe estar dentro del límite establecido y que solo se aceptan valores con un máximo de dos decimales.

También se ha comprobado que es obligatorio seleccionar una categoría y que, cuando todos los datos son correctos, se muestra una confirmación con la información del servicio.

## 4. Pruebas del formulario de testimonios

En el formulario de testimonios se ha comprobado que el autor es obligatorio y que debe tener entre dos y cincuenta caracteres.

En el texto del testimonio, se ha comprobado que es obligatorio introducir contenido y que debe tener entre diez y quinientos caracteres. También se ha comprobado el funcionamiento del contador de caracteres mientras se escribe.

Se ha probado la casilla de autorización de publicación. Cuando está marcada, se indica que el testimonio está autorizado para publicarse. Cuando no está marcada, se indica que el testimonio será privado.

Además, se ha añadido una funcionalidad para buscar números dentro de un texto. Se ha comprobado que permite encontrar números y que muestra un mensaje cuando no se encuentran números.

Finalmente, se ha comprobado que, cuando todos los datos obligatorios son correctos, se muestra una confirmación del envío.

## 5. Pruebas del formulario de noticias

En el formulario de noticias se ha comprobado que el título es obligatorio y que debe tener entre tres y cien caracteres.

En el contenido, se ha comprobado que es obligatorio introducir texto y que debe tener entre veinte y dos mil caracteres.

En las etiquetas, se ha comprobado que se pueden introducir varias separadas por comas y que se eliminan los espacios innecesarios.

En la fecha de publicación, se ha comprobado que no se permite dejar el campo vacío, seleccionar una fecha anterior a la actual ni seleccionar el día de hoy. Se ha comprobado que únicamente se acepta una fecha posterior al día actual.

En la imagen, se ha probado el envío sin seleccionar ningún archivo, la selección de imágenes de formatos diferentes a JPEG y la selección de una imagen JPEG válida. También se ha comprobado que no se permite seleccionar archivos que superen los cinco megabytes.

Cuando todos los datos son correctos, se muestra una confirmación de la publicación de la noticia.

## 6. Pruebas del formulario de citas

En el formulario de citas se ha comprobado que es obligatorio seleccionar un socio y un servicio.

También se ha comprobado que la referencia de la cita debe cumplir el formato establecido, utilizando los prefijos `CITA-` o `RES-` seguidos de cuatro números.

En la fecha y hora, se ha probado el envío sin introducir ningún dato y la selección de fechas y horas anteriores al momento actual. Se ha comprobado que únicamente se aceptan fechas y horas futuras.

También se ha comprobado que es obligatorio marcar la casilla de confirmación de los datos de la cita.

Cuando todos los campos son correctos, se muestra un resumen de la cita con el socio seleccionado, el servicio, la referencia y la fecha y hora.

## 7. Pruebas generales de funcionamiento

Se han realizado pruebas enviando los formularios sin completar para comprobar que se muestran los mensajes de error correspondientes.

También se han introducido varios datos incorrectos al mismo tiempo para comprobar que se muestran todos los errores y que el foco se sitúa en el primer campo incorrecto.

Se ha comprobado que, después de enviar un formulario con errores, al corregir los datos los mensajes de error desaparecen.

Además, se ha comprobado que, cuando se modifica un formulario después de haberlo enviado correctamente, se elimina la confirmación anterior.

También se ha probado el envío de los formularios utilizando el teclado.

## 8. Pruebas automatizadas

Se ha creado un archivo `pruebas.js` para comprobar automáticamente diferentes funciones de validación.

Las pruebas incluyen casos correctos e incorrectos para comprobar el funcionamiento de las siguientes validaciones:

- Nombre.
- Nombre de usuario.
- Contraseña.
- Teléfono.
- Código de servicio.
- Referencia de cita.

También se han realizado comprobaciones relacionadas con la extracción de números de un texto y la separación de etiquetas.

Las pruebas se ejecutan desde la consola del navegador y muestran el resultado de cada comprobación.

## 9. Validación en el servidor

En una aplicación real, la validación realizada en JavaScript no sería suficiente, ya que los usuarios podrían modificar los datos desde el navegador o desactivar JavaScript.

Por este motivo, el servidor tendría que volver a comprobar todos los datos recibidos, incluyendo los campos obligatorios, las longitudes de los textos, los formatos, los valores numéricos, las fechas, las selecciones y los archivos enviados.

También sería necesario comprobar que los archivos corresponden realmente al formato indicado y que no superan el tamaño permitido.

En este proyecto no se utiliza servidor ni base de datos. Las operaciones son simuladas y los datos únicamente se validan y muestran en el navegador.

## 10. Conclusión

Se han creado cinco formularios independientes para gestionar socios, servicios, testimonios, noticias y citas.

Se han implementado validaciones mediante HTML y JavaScript, mensajes de error junto a los campos, corrección de errores después del envío y confirmaciones cuando los datos son válidos.

Además, se han añadido nuevas funcionalidades mediante expresiones regulares, búsqueda de números, etiquetas para noticias y referencias para citas.

Se han realizado pruebas manuales y automatizadas para comprobar el funcionamiento de las diferentes validaciones.

La aplicación cumple la función de práctica de formularios y validación del lado del cliente.
