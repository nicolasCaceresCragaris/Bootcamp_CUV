function triplicador(valor){

    return valor*3;
}

function multiplicar(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}
function resto(x,y){
    return x%y;
}

let valor=parseInt(prompt("Ingrese un valor"));

console.log("Triplicador:"+triplicador(valor));
console.log("Multiplicar:"+multiplicar(2,4));
console.log("Division:"+division(4,2));
console.log("Resto:"+resto(4,2));



