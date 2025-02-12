
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











