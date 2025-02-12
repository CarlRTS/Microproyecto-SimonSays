
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
user.style.transform = "translateX(1000)";
user.style.fontFamily = "Roboto";
user.style.fontSize = "20px";
user.style.color = "#fff";
user.style.background = "#2596be"
user.style.top = 10;
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


    


const recuadro = document.querySelector("red")
recuadro.addEventListener('click', () =>{
    let seleccionado = document.querySelector("red")
    
})


let h = 0, m = 0, s = 0;
        let cronometro;
        const actualizarCronometro = () => {
            s++;
            if (s === 60) {
                s = 0;
                m++;
                if (m === 60) {
                    m = 0;
                    h++;
                }
            }
            document.getElementById('cronometro').textContent = 
                (h < 10 ? '0' + h : h) + ':' + 
                (m < 10 ? '0' + m : m) + ':' + 
                (s < 10 ? '0' + s : s);
        };
        document.getElementById('start').addEventListener('click', () => {
            cronometro = setInterval(actualizarCronometro, 1000);
        });
        document.getElementById('stop').addEventListener('click', () => {
            clearInterval(cronometro);
        });
        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(cronometro);
            h = 0; m = 0; s = 0;
            document.getElementById('cronometro').textContent = '00:00:00';
        });







