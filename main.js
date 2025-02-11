

/* Sonido para los botones 
const sonidoBoton = new Audio("./Sonido/sonidoBoton.mp3");
*/


/*
function Almacenar(Nombre,Puntaje){
    const v =localStorage.setItem(Nombre,Puntaje);
    
    return v
}
/*
function SumarPuntaje(v){
    if(VerificarNombre()==true){
        const i =localStorage.getItem(Puntaje);
        Puntaje=i+1;
        localStorage.setItem(Nombre,Puntaje);

    }



}
*/
const puntaje=0;

let gameTime=200;

let timeLeft= gameTime;

let timeInterval;

const TimerDisplay = document.createElement("div");

TimerDisplay.id="timer";
TimerDisplay.style.position = "absolute";

TimerDisplay.style.top="20px"
TimerDisplay.style.left = "50%"
TimerDisplay.style.fontSize="24px"
TimerDisplay.style.color = "#fff"

document.body.appendChild(TimerDisplay);

function actualizarTimer(){
    let minutes = Math.floor(timeLeft/60);

    let seconds = timeInterval % 60

    TimerDisplay.innerText = "Tiempo "+minutes+":"+seconds

    if(timeLeft --- 0){
        clearInterval(timeInterval);
    }
    timeLeft --;

}

(function starTime(){
    timeInterval= setInterval(actualizarTimer,1000)
})()

//revisarrrr
let nombreJugador = localStorage.getItem("nombreJugador") || prompt("Ingrese el nombre del jugador");

const jugador = document.cretateElement("div");
infoDisplay.style.position ="absolute";
infoDisplay.style.top ="60px";
infoDisplay.style.left ="50%x";
infoDisplay.style.transform ="translateX(-50%)";
infoDisplay.style.frontSize ="20px";
infoDisplay.style.color ="#fff";


jugador.innterHTML ="Nombre del jugador"+{nombreJugador};

document.body.appendChild(jugador);

///1:23
console.log(localStorage.setItem("nombreJugador"));


