let boton= document.getElementsByClassName("comprar");
let i=0;

console.log(boton.length);

while(i<boton.length){
    
    let boton_id = boton[i].getAttribute("id");

    boton[i].addEventListener("click", function(){


        //OBTENER EL ID

        alert("comprar "+boton_id);
        console.log("ola");
    });
    i++;
}