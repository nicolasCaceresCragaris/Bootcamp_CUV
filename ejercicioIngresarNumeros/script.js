
let numero=prompt("Ingrese un numero. Ingrese stop para dejar de ingresar.");
let conjunto=[];
let sumatoria=0;

while(numero.toLowerCase()!="stop"){

    conjunto.push(parseInt(numero));
    console.log("NUmero agregado!")
    numero=prompt("Ingrese un numero. Ingrese stop para dejar de ingresar.");

}

console.log(`Total de numeros ingresados ${conjunto.length}.`);

if(conjunto.length>=3){

    console.log(`El tercer elementos es:${conjunto[2]}`);

}else{
    console.log("No existe un tercer elemento");
}

console.log(`El ultimo elemento es: ${conjunto[conjunto.length-1]}`);

for(let i=0; i<conjunto.length;i++){
    sumatoria+=conjunto[i];
}

console.log(`La sumatoria es:${sumatoria}`);