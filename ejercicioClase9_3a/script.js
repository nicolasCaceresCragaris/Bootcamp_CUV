
let seleccionJugador;
let seleccionMaquina;
let valor;
let jugar;

jugar=prompt("Desea jugar un piedra papel o tijeras?");

while(jugar.toLowerCase()=="si"){
    seleccionJugador= prompt("Ingrese piedra papel o tijeras");
    seleccionMaquina;
    valor=Math.floor(Math.random() * 2);

    console.log(valor);

    if(valor==0){
        seleccionMaquina="piedra";
    }
    if(valor==1){
        seleccionMaquina="papel";
    }
    if(valor==2){
        seleccionMaquina="tijera";
    }

    alert("Jugador saco:"+seleccionJugador);
    alert("Maquina saco:"+seleccionMaquina);

    if(seleccionJugador=="piedra" && seleccionMaquina=="papel"){
        alert("GANA LA MAQUINA");
    }
    if(seleccionJugador=="piedra" && seleccionMaquina=="tijera"){
        alert("GANA JUGADOR");

    }

    if(seleccionJugador=="papel" && seleccionMaquina=="piedra"){
        alert("GANA JUGADOR");

    }
    if(seleccionJugador=="papel" && seleccionMaquina=="tijera"){
        alert("GANA LA MAQUINA");

    }

    if(seleccionJugador=="tijera" && seleccionMaquina=="piedra"){
        alert("GANA LA MAQUINA");

    }
    if(seleccionJugador=="tijera" && seleccionMaquina=="papel"){
        alert("GANA JUGADOR");

    }

    if(seleccionJugador=="papel" && seleccionMaquina=="papel"){
        alert("ES UN EMPATE");
    }

    if(seleccionJugador=="tijera" && seleccionMaquina=="tijera"){
        alert("ES UN EMPATE");

    }
    if(seleccionJugador=="piedra" && seleccionMaquina=="piedra"){
        alert("ES UN EMPATE");

    }

    

    jugar=prompt("Desea jugar un piedra papel o tijeras?");
}

alert("Fin del juego");