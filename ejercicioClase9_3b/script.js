
let adivino=false;
let intentos=0;

numero=parseInt(prompt("Ingrese un numero de 1 al 10"));

numeroMagico=Math.floor(Math.random()*numero);

alert("Numero:"+numeroMagico);

numeroAdivinar=parseInt(prompt("Ingrese un numero para adivinar"));

while(adivino!=true){

    
    
    if(numeroAdivinar==numeroMagico){

        alert("Adivinaste");
        adivino=true;
    }

    if(numeroAdivinar<numeroMagico){

        alert("El valor es mas grande");
        numeroAdivinar=parseInt(prompt("Ingrese un numero para adivinar"));
    }

    if(numeroAdivinar>numeroMagico){
        alert("El valor es mas chico");
        numeroAdivinar=parseInt(prompt("Ingrese un numero para adivinar"));
    }
    intentos++;

}

prompt("Intentos:"+intentos);