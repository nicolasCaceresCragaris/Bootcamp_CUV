document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.querySelector("h1");
    let parrafo = document.querySelector("p");
    
    let amaANico=parseInt(prompt("Cuanto ama a nico Alichon"));

    if(amaANico>60){
        titulo.textContent=`Alichon ama a nico un total de ${amaANico}`;
        parrafo.textContent="Beso beso mua mua";
    }
    if(amaANico<60){
        titulo.textContent=`Alichon ama a nico un total de ${amaANico}`;
       parrafo.textContent="Te pego puto";
    }
});

let contrasenia=prompt("Ingrese contrasenia");

    if(contrasenia=="gomita"){
        window.location = "http://www.google.com";
    }