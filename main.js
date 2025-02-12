

(function clear(){
    localStorage.clear();
})();

(function guardar_user(){

let Username = localStorage.getItem("Username") || prompt('Escribe tu nombre de usuario!: ');

localStorage.setItem("Username", Username);

const user = document.createElement("div");
user.style.position = "absolute";
user.style.top = "60px";
user.style.left = "50px";
user.style.transform = "translateX(50)";
user.style.fontFamily = "Roboto";
user.style.fontSize = "20px";
user.style.color = "#fff";
user.style.alignSelf = "center";
user.style.backgroundColor = "0000FF";

user.innerHTML = 'Jugador: '+Username;

document.body.appendChild(user);

})();

function mostrar_user(){
    localStorage.getItem("Username")
}





