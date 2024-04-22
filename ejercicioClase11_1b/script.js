let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"] 

let amigoBuscar=prompt("Ingrese un nombre");

function verificar(amigoBuscar){

    if(amigos.indexOf(amigoBuscar)>=0){
        console.log(`Tenes un amigo llamado ${amigoBuscar}`);
    }else{
        console.log("No se encontro ningun amigo");
    }
    
}

verificar(amigoBuscar);

