//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $buttonPromedio = document.querySelector('#promedio');
$buttonPromedio.onclick = function () {
    const resultadoPromedio = document.querySelectorAll('li');
    let sumaNumeros = 0
    for (i = 0; i < resultadoPromedio.length; i++) {
        sumaNumeros = sumaNumeros + (Number(resultadoPromedio[i].innerText));
    }
    let promedio = sumaNumeros / resultadoPromedio.length;
    document.querySelector('#promedio-text').textContent = `El promedio es: ${promedio}`;
}

const numerosTotales = [];
function numerosArray() {
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        numerosTotales.push(Number(document.querySelectorAll('li')[i].textContent));
    }
}

numerosArray();
document.querySelector("#numero-mas-pequeno").onclick = function () {
    let numeroMasPequeno = numerosTotales[0];
    for (let i = 0; i < numerosTotales.length; i++) {
        if (numeroMasPequeno > numerosTotales[i]) {
            numeroMasPequeno = numerosTotales[i];
        }

    }
    document.querySelector('#numero-pequeno-text').textContent = `El número más pequeño es: ${numeroMasPequeno}`;

}

document.querySelector("#numero-mas-grande").onclick = function () {
    let numeroMasGrande = numerosTotales[0];
    for (let i = 0; i < numerosTotales.length; i++) {
        if (numeroMasGrande < numerosTotales[i]) {
            numeroMasGrande = numerosTotales[i];
        }
    }
    document.querySelector('#numero-grande-text').textContent = `El número más grande es: ${numeroMasGrande}`;

}

document.querySelector("#numero-mas-frecuente").onclick = function () {
    let masFrecuente = 1
    let frecuencia = 0
    let nMasFrecuente;
    for (let i = 0; i < numerosTotales.length; i++) {
        for (let j = i; j < numerosTotales.length; j++) {
            if (numerosTotales[i] === numerosTotales[j]) {
                frecuencia++;
            }
            if (frecuencia > masFrecuente) {
                masFrecuente = frecuencia;
                nMasFrecuente = numerosTotales[i];
            }
        }
        frecuencia = 0;
    }
    document.querySelector("#numero-frecuente-text").textContent = `El número más frecuente es: ${nMasFrecuente}`;
}
