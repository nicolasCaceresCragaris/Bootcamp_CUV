
//EJERCICIO 1

let usuarios ={
    usuario:"UnNuevoUsuario",
    edad:  23,
    direccion: "Calle de mentira",
    fechaDeNacimiento: "14/03/1999",
    contraseña:"unacontraseñamuysegura"
}

//EJERCICIO 2

let miAuto={}

miAuto.marca="volskwagen";
miAuto.anio=1990;
miAuto.nuevo=false;

let propertyKey="modelo";

miAuto[propertyKey]="v202";

let anothcerPropertyKey="precio";

miAuto[anothcerPropertyKey]=2000;


let nextProperty="color";

miAuto[nextProperty]="Negro";

console.log(miAuto);

for (let propiedad in miAuto){
    console.log(propiedad+":"+miAuto[propiedad]);
}