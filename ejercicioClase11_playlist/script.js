let playlist = [
    "Smells Like Teen Spirit",
    "Everlong",
    "Come As You Are",
    "The Pretender",
    "Heart-Shaped Box",
    "Learn to Fly",
    "Lithium",
  ];

  let playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

 /*
    Si cancion no se encuentra en escuchada 
 */
let playlistSinEscuchar =playlist.filter((cancion)=>playlistEscuchada.indexOf(cancion)<0);

console.log(playlistSinEscuchar);