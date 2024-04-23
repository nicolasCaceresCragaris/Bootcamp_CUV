
function fibonacci(posicion){

    var anterior=0;
    var inicial=1;
    var resultado=0;

    if(posicion!=1 && posicion!=2){

        for(let i=0;i<posicion-2;i++){
            resultado=anterior+inicial;
    
            anterior=inicial;
            inicial=resultado;
    
        }
    }
    return resultado;

    if(posicion==1){
        return 0;
    }
    if(posicion==2){
        return 1;
    }
}



console.log(fibonacci(8));