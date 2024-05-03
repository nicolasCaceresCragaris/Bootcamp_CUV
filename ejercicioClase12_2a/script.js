
//EJERCICIO 1 Aumentar la nota

let estudiantes=[
 {Estudiante: "Juan", nota: 6 },
 { Estudiante: "Mario", nota: 8 },
 { Estudiante: "Julia", nota: 10 },
 { Estudiante: "Sofia", nota: 2 },
];


for(let i=0;i<estudiantes.length;i++){
    if(estudiantes[i].nota>5 && estudiantes[i].nota<9){
        estudiantes[i].nota+=2;
    }

}

console.log(estudiantes);


//EJERCICIO 2 Base de datos de peliculas

let peliculas=[
    {titulo:"Norbit", rating:5, loHasVisto:"Viste"},
    {titulo:"Narnia", rating:2, loHasVisto:"NoViste"},
    {titulo:"PeterPan", rating:4, loHasVisto:"Viste"},
    {titulo:"PoweRanger", rating:3, loHasVisto:"NoViste"},

];

    
peliculas.forEach((pelicula)=>{

    console.log(`${pelicula.loHasVisto} "${pelicula.titulo}" - ${pelicula.rating} estrellas`);

})