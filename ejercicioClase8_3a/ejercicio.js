
let edad=parseInt(prompt("Ingrese su edad"));
let edadMaxima=parseInt(prompt("Ingrese su edad maxima"));

let snack="Dorito";

let snackPorDia=3;

const precioUnidad=200.0;

let snackPorComer=3*(365*(edadMaxima-edad));

let gastoTotal=snackPorComer*precioUnidad;

alert("Necesitas"+ snackPorComer + "para que te alcancen hasta los "+ edadMaxima +"anios");

alert("Gasto total:"+ gastoTotal);