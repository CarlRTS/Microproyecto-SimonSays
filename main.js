document.addEventListener("DOMContentLoaded", () => {
	const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
		$btnIniciar = document.querySelector("#btnIniciar"),
		$btnPausar = document.querySelector("#btnPausar"),
		$btnMarca = document.querySelector("#btnMarca"),
		$btnDetener = document.querySelector("#btnDetener"),
		$contenedorMarcas = document.querySelector("#contenedorMarcas");
	let marcas = [],
		idInterval,
		tiempoInicio = null;
	let diferenciaTemporal = 0;

	const ocultarElemento = elemento => {
		elemento.style.display = "none";
	}

	const mostrarElemento = elemento => {
		elemento.style.display = "";
	}

	const agregarCeroSiEsNecesario = valor => {
		if (valor < 10) {
			return "0" + valor;
		} else {
			return "" + valor;
		}
	}

	const milisegundosAMinutosYSegundos = (milisegundos) => {
		const minutos = parseInt(milisegundos / 1000 / 60);
		milisegundos -= minutos * 60 * 1000;
		segundos = (milisegundos / 1000);
		return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(1))}`;
	};


	const iniciar = () => {
		const ahora = new Date();
		tiempoInicio = new Date(ahora.getTime() - diferenciaTemporal);
		clearInterval(idInterval);
		idInterval = setInterval(refrescarTiempo, 100);
		ocultarElemento($btnIniciar);
		ocultarElemento($btnDetener);
		mostrarElemento($btnMarca);
		mostrarElemento($btnPausar);
	};
	const pausar = () => {
		diferenciaTemporal = new Date() - tiempoInicio.getTime();
		clearInterval(idInterval);
		mostrarElemento($btnIniciar);
		ocultarElemento($btnMarca);
		ocultarElemento($btnPausar);
		mostrarElemento($btnDetener);
	};
	const refrescarTiempo = () => {
		const ahora = new Date();
		const diferencia = ahora.getTime() - tiempoInicio.getTime();
		$tiempoTranscurrido.textContent = milisegundosAMinutosYSegundos(diferencia);
	};
	const ponerMarca = () => {
		marcas.unshift(new Date() - tiempoInicio.getTime());
		dibujarMarcas();
	};
	const dibujarMarcas = () => {
		$contenedorMarcas.innerHTML = "";
		for (const [indice, marca] of marcas.entries()) {
			const $li = document.createElement("p");
			$li.innerHTML = `<strong class="is-size-4">${marcas.length - indice}.</strong> ${milisegundosAMinutosYSegundos(marca)}`;
			$li.classList.add("is-size-3");
			$contenedorMarcas.append($li);
		}
	};

	const detener = () => {
		if (!confirm("¿Detener?")) {
			return;
		}
		clearInterval(idInterval);
		init();
		marcas = [];
		dibujarMarcas();
		diferenciaTemporal = 0;
	}

	const init = () => {
		$tiempoTranscurrido.textContent = "00:00.0";
		ocultarElemento($btnPausar);
		ocultarElemento($btnMarca);
		ocultarElemento($btnDetener);
	};
	init();

	$btnIniciar.onclick = iniciar;
	$btnMarca.onclick = ponerMarca;
	$btnPausar.onclick = pausar;
	$btnDetener.onclick = detener;
});


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
    seleccionado.click()
})





