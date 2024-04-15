
let numero=parseInt(prompt("Ingrese un valor para determinar si es par o no. Si ingresa 0 se detendra la ejecucion"));


while(numero!=0){

    if(numero%2==0){
        alert("Numero par");
    }
    if(numero%2!=0){
        alert("Numero impar");
    }
    
    numero=parseInt(prompt("Ingrese un valor para determinar si es par o no. Si ingresa 0 se detendra la ejecucion"));

}