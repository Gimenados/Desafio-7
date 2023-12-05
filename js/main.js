//Punto 1
document.addEventListener('DOMContentLoaded', function () {
    console.log("El contenido se cargó completamente.")

//Punto 3
document.getElementById('origen').value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

//Punto 4
    const clickText = document.getElementById('origen');

        let entradas = document.getElementsByTagName("input");
        let btn = document.getElementsByTagName("button" )[0]
        
//        console.log(entradas)
//        console.log(btn)

        clickText.addEventListener ("click", function(e){
            habilitar(entradas, btn);
        })


function habilitar(entradas, btn) {
   console.log("entro");
    for (let i = 0; i < entradas.length; i++) {
        entradas[i].disabled =false;
    }
    btn.disabled =false;
}

//Punto 5 Remplazar

// Variable global para almacenar el valor del textarea
let destenyTxt = "";
const textReplace = document.getElementById("btn-reemplazar");
textReplace.addEventListener("click", function () {
  const origenValue = document.getElementById("origen").value;
  destenyTxt = origenValue;
  document.getElementById("destino").innerHTML = destenyTxt;
});

// Todos los Agregar
let arrayAgregar = document.getElementsByClassName("btn-agregar");

function forClass() {
    for (let i = 0; i < arrayAgregar.length; i++) {
        arrayAgregar[i].addEventListener("click", function(event) {
            switch (i) {
                case 0:
                    document.getElementById('destino').innerHTML += destenyTxt.repeat(1);
                    break;
                case 1:
                    document.getElementById('destino').innerHTML += destenyTxt.repeat(5);
                    break;
                case 2:
                    document.getElementById('destino').innerHTML += destenyTxt.repeat(10);
                    break;
                case 3:
                    let n = prompt("¿Cuántas veces deseas agregar el texto?");
                    if (n !== null) {
                        document.getElementById('destino').innerHTML += destenyTxt.repeat(parseInt(n));
                    }
                    break;
                default:
                    break;
            }
        });
    }
}

forClass();


// Botón vaciar
let botonVaciar = document.querySelector(".btn-vaciar");
botonVaciar.addEventListener("click", function() {
    let contenidoDiv = document.getElementById("destino");
    contenidoDiv.innerHTML = "";
});

// Botón convertir a mayúsculas
let botonMayuscula = document.querySelector(".btn-convertir-a-mayusculas");
botonMayuscula.addEventListener("click", function() {
    let contenidoMsg = document.getElementById("destino");
    contenidoMsg.innerHTML = contenidoMsg.innerHTML.toUpperCase();
});

// Botón convertir a minúsculas
let botonMinuscula = document.querySelector("button");
botonMinuscula.addEventListener("click", function() {
    let contenidoText = document.getElementById("destino");
    contenidoText.innerHTML = contenidoMsg.innerHTML.toLowerCase();
});

});

//Punto 6
document.addEventListener("DOMContentLoaded", function () {
    let listaItems = document.getElementsByTagName("li");

    for (let i = 0; i < listaItems.length; i++) {
        let contenidoActual = listaItems[i].innerHTML;
        listaItems[i].innerHTML = "[Ok] " + contenidoActual;
    }
});


