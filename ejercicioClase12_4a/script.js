let actoresVocales = [];

let actoresPrincipales = [
  "Tom Hanks",
  "Johnny Depp",
  "Elizabeth Taylor",
  "Morgan Freeman",
  "Jennifer Aniston",
  "Meryl Streep",
  "Natalie Portman",
  "Ashton Kutcher",
];

let peliculas = [];


let actoresPrincipalesPorPelicula = {
    Titanic: "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    Matrix: "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt",
  };

  let peliculaPorActor={};

//ITERA ACTORES PRINCIPALES Y LLEVA A ACTORES VOCALES AQUELLOS CUYOS NOMBRE O APELLIDO COMIENCE CON UNA VOCAL
actoresPrincipales.forEach((actor)=>{
    if(actor[0]=='A' || actor[0]=='E' || actor[0]=='I' || actor[0]=='O' || actor[0]=='U'){
        actoresVocales.push(actor);
    }
})


//Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.

for(let pelicula in actoresPrincipalesPorPelicula){
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
}

//Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.

for(pelicula in actoresPrincipalesPorPelicula){
    peliculas.push(pelicula);
}


console.log(actoresVocales);
console.log(actoresPrincipales);
console.log(peliculas);