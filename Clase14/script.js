document.addEventListener("DOMContentLoaded", function() {


    let boton = document.getElementById("miBoton");

    boton.addEventListener("click", function(){

        alert("hola mundo");
        let i=1;
        if(i>0){
            console.log("i es mayor que 0");
        }
    });

});



//documento.getElementById

//document.getElementsByTagName("nombreEtiqueta")

//document.getElementByClassName("clase"); Agarra todas las clase 

//document.getElementsByName("atributo_name");

//document.querySelector("button"); Selecciona el primer button que encuentre

//document.querySelectorAll("button"); Selecciona todos los button

