
let diasTotales = parseInt(prompt("Ingrese los dias que se ira de vaciones."));

let presupuestoMaximo = parseFloat(prompt("Ingrese su presupuesto maximo."));

let comidasTotales =  parseInt(prompt("Ingrese un estimativo de comidas."));

let presupuestoPorComida= presupuestoMaximo/comidasTotales;

alert("Podes gastar"+presupuestoPorComida+"en cada comida para que te alcance plata durante los"+diasTotales+"del viaje");