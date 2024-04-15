
console.log("Ejercicio A");

let numero=-10;

while(numero>-11 && numero<20){
    console.log(numero);
    numero++;
}

numero=10;

console.log("Ejercicio B");

while(numero>9 && numero<41){
    if(numero%2==0){
        console.log(numero);
    }
    numero++;
}

console.log("Ejercicio C");

numero=0;

while(numero<334){
    if(numero>299 && numero<334 && numero%2!=0){
        console.log(numero);
    }
    numero++;
}


numero=0;

console.log("Ejercicio D");

while(numero<51){

    if(numero>4 && numero<51 && numero%3==0 && numero%5==0){
        console.log(numero);
    }

    numero++;
}
