// variables globales


const inputNum = document.getElementById('input-num');
const botonNum = document.getElementById('boton-num');	
const botonOrdenar = document.getElementById('boton-ordenar');
const contCajas = document.querySelector('.contenedor-cajas');

// Funciones


const actualizarNumeros = () => {
	let numeros = document.querySelectorAll('.numeros');
	return numeros
}

const eliminarNumero = () => {
	actualizarNumeros().forEach(numero => {
        numero.onclick = () => {
        	contCajas.removeChild(numero);
        }
    });
}

const crearTacho = () => {
	const contTacho = document.createElement('div');
	const tacho = document.createElement('i');

	contTacho.appendChild(tacho);
	contTacho.classList.add('contenedor-tacho');

	tacho.classList.add('fa-regular', 'fa-trash-can', 'tacho');
	return contTacho;
}

const agregarNumero = () => {
	const divNum = document.createElement('DIV');
	const num = document.createElement('DIV');

	divNum.classList.add('numeros')
	divNum.appendChild(num);
	divNum.appendChild(crearTacho());

	num.innerHTML = inputNum.value;
	
	contCajas.appendChild(divNum);
	inputNum.value = '';	
	
	eliminarNumero();
}		

const crearArray = () => {
	let array = [];
	const cajas = contCajas.childNodes;

    for(let caja of cajas) {
    	const cajaHijos = caja.childNodes;
    	for(let num of cajaHijos) {
    		if(!isNaN(num.innerHTML)) {
    		    array.push(parseInt(num.innerHTML));
    	    } 
    	}
    	
    }		
	return array;
}

const ordernarArray = () => {
	let array = crearArray();
	for(let i=0; i<array.length; i++) {
		for(let j=0; j<array.length; j++) {
			if(j+1 !== array.length) {
				if(array[j]>array[j+1]) {
			     	let aux = array[j+1];
		  	    	array[j+1] = array[j];
		     		array[j] = aux;
			    }
			}
		}
	}
	return array;
}
	
const mostrarArrayOrdenado = () => {
	let arrayOrdenado = ordernarArray();
	const cajas = contCajas.childNodes;
	let i = 0;

	for(let caja of cajas) {
    	const cajaHijos = caja.childNodes;
    	for(let num of cajaHijos) {
    		if(!isNaN(num.innerHTML)) {
    		    num.innerHTML = arrayOrdenado[parseInt(i)]
    		    i++;
    	    } 
    	}
    }		
}

// Ejecutar


botonNum.onclick = () => {
	if ((inputNum.value.length>0)&&(!isNaN(inputNum.value))) {		
		agregarNumero();
	}
}

botonOrdenar.onclick = () => {
	mostrarArrayOrdenado();
}


