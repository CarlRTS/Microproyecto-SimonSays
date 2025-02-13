const nivel = 10;
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');



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



const boton = document.querySelector("button")
boton.addEventListener('click', () =>{
    let start = document.querySelector ("button")
    start.innerHTML = 'El juego empezó'
})



const buttonred = document.querySelector(".red");
buttonred.addEventListener("click",() => {
    buttonred.classList.toggle("active");
});


const buttonblue = document.querySelector(".blue");
buttonblue.addEventListener("click",() => {
    buttonblue.classList.toggle("active");
});


const buttongreen = document.querySelector(".green");
buttongreen.addEventListener("click",() =>{
    buttongreen.classList.toggle("active");
});

const buttonyellow = document.querySelector(".yellow");
buttonyellow.addEventListener("click", () =>{
    buttonyellow.classList.toggle("active");
});



function generarSecuencia(){
    const secuencia = new Array(nivel).fill(0).map(n => Math.floor(Math.random() * 4) )

    console.log(secuencia);
    return secuencia;
}

function transformNumAColor(numero){
    switch(numero){
        case 0:
            return 'red'
        case 1:
            return 'blue'
        case 2:
            return 'green'
        case 3:
            return 'yellow'
    }
}

function transformColorANum(color){
    switch(color){
        case 'red':
            return 0
        case 'blue':
            return 1 
        case 'green':
            return 2
        case 'yellow':
            return 3
    }
}


(function prueba(){
    const v =generarSecuencia();
    const colores = v.map(transformColorANum)
    console.log(transformColorANum(v));
})();





