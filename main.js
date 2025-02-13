const nivel = 10; // Nivel máximo del juego
let secuencia = []; // Almacena la secuencia de colores
let nivelActual = 0; // Nivel actual del jugador
let ronda = 1; // Ronda actual
let esperandoInput = false; // Controla si el jugador puede hacer clic

// Seleccionar elementos del DOM
const buttonred = document.getElementById("red");
const buttonblue = document.getElementById("blue");
const buttongreen = document.getElementById("green");
const buttonyellow = document.getElementById("yellow");
const boton = document.querySelector(".boton");
const audio = document.querySelector(".audio");
const audiolobby1 = document.querySelector("audio2");

// Obtener o solicitar el nombre del usuario, el cliar
let userName = localStorage.getItem("userName");
if (!userName) {
    userName = prompt("Ingresa tu nombre:");
    if (userName) {
        localStorage.setItem("userName", userName);
    } else {
        userName = "Jugador"; // Nombre por defecto si el usuario no ingresa nada
        localStorage.setItem("userName", userName);
    }
}

// Mostrar el nombre del usuario en la pantalla
const userNameElement = document.createElement("div");
userNameElement.textContent = `Jugador: ${userName}`;
userNameElement.style.position = "absolute";
userNameElement.style.top = "20px";
userNameElement.style.left = "20px";
userNameElement.style.fontSize = "20px";
userNameElement.style.color = "#000";
document.body.appendChild(userNameElement);

// Función para generar una secuencia aleatoria
function generarSecuencia() {
    secuencia.push(Math.floor(Math.random() * 4)); // Añade un nuevo color a la secuencia
    console.log("Secuencia actual:", secuencia); // Para depuración
    return secuencia;
}

// Función para resaltar un botón
function resaltarBoton(boton) {
    boton.classList.add("active");
    audio.play(); // Reproducir sonido al resaltar el botón
    setTimeout(() => boton.classList.remove("active"), 500); // Quitar el resaltado después de 0.5 segundos
}

// Función para reproducir la secuencia
function reproducirSecuencia() {
    esperandoInput = false; // Bloquear inputs del jugador mientras se reproduce la secuencia
    let i = 0;
    const intervalo = setInterval(() => {
        const boton = obtenerBotonPorNumero(secuencia[i]);
        resaltarBoton(boton);
        i++;
        if (i >= secuencia.length) {
            clearInterval(intervalo);
            esperandoInput = true; // Permitir inputs del jugador
        }
    }, 2000); // Intervalo de 2 segundos entre cada color
}

// Función para obtener un botón por su número
function obtenerBotonPorNumero(numero) {
    switch (numero) {
        case 0: return buttonred; //rojo
        case 1: return buttonblue; //azul
        case 2: return buttonyellow; // Amarillo
        case 3: return buttongreen; // Verde
    }
}

// Función para manejar los clics del jugador
function manejarInput(color) {
    if (!esperandoInput) return; // Ignorar inputs si no es el turno del jugador

    const boton = obtenerBotonPorNumero(color);
    resaltarBoton(boton);

    if (color === secuencia[nivelActual]) {
        nivelActual++;
        if (nivelActual === secuencia.length) {
            // El jugador acertó la secuencia completa
            nivelActual = 0;
            ronda++;
            if (ronda > nivel) {
                alert("¡Felicidades! Has completado todas las rondas.");
                guardarPuntaje(ronda - 1);
                reiniciarJuego();
            } else {
                setTimeout(() => {
                    alert(`¡Correcto! Ronda ${ronda}.`);
                    generarSecuencia();
                    reproducirSecuencia();
                }, 1000);
            }
        }
    } else {
        // El jugador cometió un error
        guardarPuntaje(ronda - 1);
        gameOver();
    }
}

// Función para guardar el puntaje
function guardarPuntaje(puntaje) {
    const puntajes = JSON.parse(localStorage.getItem("puntajes")) || [];
    puntajes.push({ nombre: userName, puntaje });
    puntajes.sort((a, b) => b.puntaje - a.puntaje); // Ordenar de mayor a menor
    localStorage.setItem("puntajes", JSON.stringify(puntajes));
    mostrarTopPuntajes();
}

// Función para mostrar el top de puntuaciones
function mostrarTopPuntajes() {
    const puntajes = JSON.parse(localStorage.getItem("puntajes")) || [];
    const topScoresList = document.createElement("ul");
    topScoresList.style.position = "absolute";
    topScoresList.style.top = "60px"; // Ajustar posición vertical
    topScoresList.style.right = "20px";
    topScoresList.style.fontSize = "20px";
    topScoresList.style.color = "#000";
    topScoresList.innerHTML = "<h2>Top Puntuaciones</h2>";
    topScoresList.innerHTML += puntajes
        .slice(0, 5) // Mostrar solo los 5 mejores
        .map((p, i) => `<li>${i + 1}. ${p.nombre}: ${p.puntaje}</li>`)
        .join("");
    document.body.appendChild(topScoresList);
}

// Función para manejar el fin del juego
function gameOver() {
    alert(`¡Game Over! Llegaste a la ronda ${ronda - 1}.`);
    reiniciarJuego();
}

// Función para reiniciar el juego
function reiniciarJuego() {
    secuencia = [];
    nivelActual = 0;
    ronda = 1;
    esperandoInput = false;
    boton.innerHTML = "Reiniciar Juego";
}

// Event listeners para los botones de colores
buttonred.addEventListener("click", () => manejarInput(0));
buttonblue.addEventListener("click", () => manejarInput(1));
buttonyellow.addEventListener("click", () => manejarInput(2)); // Amarillo
buttongreen.addEventListener("click", () => manejarInput(3)); // Verde

// START
boton.addEventListener("click", () => {
    if (secuencia.length === 0) {
        // Solo iniciar el juego si no hay una secuencia activa
        boton.innerHTML = "El juego empezó";
        generarSecuencia();
        reproducirSecuencia();
    }
});

// Mostrar el top de puntuaciones al cargar la página
mostrarTopPuntajes();


localStorage.clear();