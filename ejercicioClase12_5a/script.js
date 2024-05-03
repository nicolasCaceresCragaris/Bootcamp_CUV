//EJERCICIO SOFTWARE FACTORY


let ecommerce = [
    { nombre: "Samsung TV", precio: 6000, articulos: 10 },
    { nombre: "DELL notebook", precio: 4000, articulos: 30 },
    { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
    { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
    { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
  ];

  
function listarArticulos(ecommerce){

    let listadoNuevo=[];

    ecommerce.forEach((articulo) => {
        articulo.total=articulo.articulos*articulo.precio;
        listadoNuevo.push(articulo);

    });
    return listadoNuevo;
}
  
console.log(listarArticulos(ecommerce));


//EJERCICIO CONTAR CARACTERES

let palabra="banana";


function contarCaracteres(palabra){

    

    let contador={};

    //AGREGA LAS LETRAS AL ARREGLO

    for(let i=0;i<palabra.length;i++){

        contador[palabra[i]]=0;
        console.log("Letra agregada");
    }

    //CUENTA

    for(let i=0;i<palabra.length;i++){

        contador[palabra[i]]++;
    }

    return contador

}


console.log(contarCaracteres(palabra));