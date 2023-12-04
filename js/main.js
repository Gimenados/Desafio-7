//Punto 1
document.addEventListener('DOMContentLoaded', function () {
    console.log("El contenido se cargó completamente.")

//Punto 3
const text = document.getElementById('origen').value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

//Punto 4
    const clickText = document.getElementById('origen');

        let entradas = document.getElementsByTagName("input");
        let btn = document.getElementsByTagName("button" )[0]
        
        console.log(entradas)
        console.log(btn)

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
const textReplace = document.getElementById("btn-reemplazar");
textReplace.addEventListener("click", function () {
  const origenValue = document.getElementById("origen").value;
  const destenyTxt = (document.getElementById("destino").innerHTML = `${origenValue}`);
  document.getElementById("origen").value = "";
});

//Todos los Agregar 
let arrayAgregar = document.getElementsByClassName("btn-agregar");

function forClass() {
    for (let i = 0; i < arrayAgregar.length; i++) {
        arrayAgregar[i].addEventListener("click", function(event) {
            switch (i) {
                case 0:
                    document.getElementById('destino').innerHTML = `${text.repeat(1)}`;
                    break;
                case 1:
                  document.getElementById('destino').innerHTML = `${text.repeat(5)}`;
                    break;
                case 2:
                    document.getElementById('destino').innerHTML = `${text.repeat(10)}`;
                    break;
                case 3:
                    let n = prompt("¿Cuántas veces deseas agregar el texto?");
                    if (n !== null) {
                        document.getElementById('destino').innerHTML = `${text.repeat(parseInt(n))}`;
                    }
                    break;
                default:
                    break;
            }
        });
    }
}
forClass();

//Boton vaciar 
let botonVaciar = document.querySelector(".btn-vaciar");

botonVaciar.addEventListener("click", function() {
    let contenidoDiv = document.getElementById("destino");
    contenidoDiv.innerHTML = ""; 
});

//Mayuscula
let botonMayuscula = document.querySelector(".btn-convertir-a-mayusculas");

botonMayuscula.addEventListener("click", function() {
    let contenidoMsg = document.getElementById("destino");
    contenidoMsg.innerHTML = contenidoMsg.innerHTML.toUpperCase();
});

//Minuscula
let botonMinuscula = document.querySelector("button");
let contenidoMsg = document.getElementById("destino");

botonMinuscula.addEventListener("click", function() {
    contenidoMsg.innerHTML = contenidoMsg.innerHTML.toLowerCase();
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


