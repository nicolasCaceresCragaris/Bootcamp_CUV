let numero=parseInt(prompt("Ingrese un valor para determinar si es positivo o no. Si ingresa un negativo se detendra la ejecucion"));

let positivos=0;

while(numero>=0){

    positivos++;
    numero=parseInt(prompt("Ingrese un valor para determinar si es positivo o no. Si ingresa un negativo se detendra la ejecucion"));

}

alert("Ingreso "+ positivos +" numeros positivos");