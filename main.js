
var audio = document.querySelector("audio");
const nivel = 10;


(function clear(){
    localStorage.clear();
})();

(function guardar_user(){

let Username = localStorage.getItem("Username") || prompt('Escribe tu nombre de usuario!: ');

localStorage.setItem("Username", Username);

const user = document.createElement("div");
user.style.alignmentBaseline = "center";
user.style.position = "absolute";
user.style.top = "60px";
user.style.left = "50px";
user.style.transform = "translateX(1000)";
user.style.fontFamily = "Roboto";
user.style.fontSize = "20px";
user.style.color = "#fff";
user.style.background = "#2596be"
user.style.top = "800px";
user.style.borderRadius = "10px";
user.style.alignSelf = "center";
user.style.backgroundColor = "0000FF";

user.innerHTML = 'Jugador: '+Username;

document.body.appendChild(user);

})();

function mostrar_user(){
    localStorage.getItem("Username")
}


function generarSecuencia(){
    const secuencia = new Array(nivel).fill(0).map(n => Math.floor(Math.random() * 4) )
    if(secuencia[0]==0){
        buttonred.classList.toggle("active");
    }
    if(secuencia[0]==1){
        buttonblue.classList.toggle("active");
    }
    if(secuencia[0]==2){
        buttonyellow.classList.toggle("active");
    }
    if(secuencia[0]==3){
        buttongreen.classList.toggle("active");
    }
    
    console.log(secuencia);
    return secuencia;
}
const buttonred = document.querySelector(".red");
const buttonblue = document.querySelector(".blue");
const buttongreen = document.querySelector(".green");
const buttonyellow = document.querySelector(".yellow");
const boton = document.querySelector("button")
boton.addEventListener('click', () =>{
    let start = document.querySelector ("button")
    audio.play();
    start.innerHTML = 'El juego empezó'
    generarSecuencia();
    
    
    /*buttonred.addEventListener("click",() => {
        buttonred.classList.toggle("active");
    });
    buttonblue.addEventListener("click",() => {
        buttonblue.classList.toggle("active");
    });
    buttongreen.addEventListener("click",() =>{
        buttongreen.classList.toggle("active");
    });
        buttonyellow.addEventListener("click", () =>{
        buttonyellow.classList.toggle("active");
});*/
    
})










