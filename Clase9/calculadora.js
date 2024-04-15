
let operacion = prompt ("Ingrese una operacion matematica:suma,resta,multiplicacion,division");

let valorA = parseInt(prompt("Ingrese un numero"));
let valorB = parseInt(prompt("Ingrese otro numero"));

if(operacion=="suma"){

    alert(valorA+valorB);
}if(operacion=="resta"){

    alert(valorA-valorB);
}if(operacion=="multiplicacion"){

    alert(valorA*valorB);
}if(operacion=="division" && valorB!=0){

    alert(valorA/valorB);
}if(operacion=="division" && valorB==0){
    alert("Error:division por 0");
}
