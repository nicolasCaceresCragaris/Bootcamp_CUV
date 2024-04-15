
let clientesTotales=0;
let clientes;
let clientesMax=20;
let mesa=1;

while(clientesTotales<20){

    clientes=parseInt(prompt("Cuantos son para comer?"));

    if(clientes>clientesMax){
        alert("Son muchos, agotan nuestra capacidad de"+clientesMax);
    }


    if(clientes<=clientesMax){

        clientesTotales+=clientes;
        clientesMax-=clientes;

        alert("Bienvenido a mi cafe, su mesa es la "+mesa);

        mesa++;
    }
   
   
}

