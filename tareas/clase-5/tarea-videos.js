//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcular = document.querySelector('#calcular-tiempo-total');

$botonCalcular.onclick = function () {
    const totalHoras = document.querySelectorAll('.horas');
    const totalMinutos = document.querySelectorAll('.minutos');
    const totalSegundos = document.querySelectorAll('.segundos');


    let horas = 0, minutos = 0, segundos = 0;

    for (let i = 0; i < totalSegundos.length; i++) { 
        segundos += Number(totalSegundos[i].value);
        minutos += Number(totalMinutos[i].value);
        horas += Number(totalHoras[i].value);
    }
    minutos += Math.floor(segundos / 60); 
    segundos = segundos % 60; 
    horas += Math.floor(minutos / 60); 
    minutos = minutos % 60; 
    document.querySelector("#mensaje-final").innerText = `Tiempo total: ${horas}Hs ${minutos}' ${segundos}''`; //Devuelvo el resultado al HTML
    return false;
}

