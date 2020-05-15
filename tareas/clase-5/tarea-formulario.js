//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



const $button = document.querySelector('button');
const $saludo = document.querySelector('h1');
const $resultado = document.querySelector('#resultado');

$button.onclick = function () {
    const $nombres = document.querySelector('#nombres-usuario').value;
    const $apellidos = document.querySelector('#apellidos-usuario').value;

    $saludo.textContent = `Bienvenido, ${$nombres} ${$apellidos}!`;
    $resultado.textContent = $nombres + " " + $apellidos;

    return false;
}
