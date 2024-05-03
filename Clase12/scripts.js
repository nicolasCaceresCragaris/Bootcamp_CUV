//OBJETOS

let persona = {

    nombre:"Guille",
    edad:22,
    ciudadNatal:"Montevideo",
    hermanos:["clara", "carlitos"],

//PUEDEN TENER FUNCIONES TAMBIEN
    saludar: function(nombre){
        console.log("Hola"+nombre);
    }
};

let objeto={
    clave1:"Valor1",
    clave2:"valor2"
}


let auto={
    marca:"testla",
    modelo:"model Y",
    kilometros: 0,
    nuevo:true ,
    arrancar: function(){
        alert("el auto se enciende");
    },
    partes:[{nombre:"bateria",estado:"nuevo"},{nombre:"motor",estado:"nuevo"}]
}

let heroe={
    nombre:"mario",
    profesion:"promero"
}

let nuevaHeroina={
    nombreAvenger:"capitana marvel",
    nombreHumano:"carol danvers",
    poder:"ser archi fuerte y volar por el espacio"
}

//ACCEDER A OBJETOS
//BRACKET NOTATION
    console.log(auto["marca"]);
    console.log(auto["modelo"]);
//DOT NOTATION

//Mucho mas como de escribir pero el problema que tiene es que es mas limitado porque no acepta variables.
    console.log(auto.kilometros);
    console.log(auto.nuevo);
    console.log(auto.propiedad);

//MODIFICAR OBJETO

console.log(heroe.nombre);

heroe.nombre="luigi";

console.log(heroe.nombre);

//AGREGANDO PROPIEDAD A UN OBJETO

heroe.nacionalidad="italiano";

console.log(heroe.nacionalidad);

//OBJETOS DENTRO DE ARREGLOS

console.log(auto.partes[0].estado);

//RECORRER OBJETOS

for(let propiedad in nuevaHeroina){
    console.log(nuevaHeroina[propiedad]);
}
