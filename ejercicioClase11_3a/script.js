let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"

let desordenado=poemaDesordenado.split(" ");
let ordenado=[];


while(desordenado.length!=0){
    ordenado.push(desordenado.shift());
    ordenado.push(desordenado.pop());
}

let poemaOrdenado=ordenado.join(" ");

console.log(poemaOrdenado);
