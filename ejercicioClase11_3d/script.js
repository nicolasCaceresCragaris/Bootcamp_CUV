
let mayoresOIgualesA5 = arr =>{

    let mayores=arr.filter((number => number>=5));

    return mayores;
}

let pares = arr =>{

    let pares=arr.filter((number)=>number%2==0);

    return pares;
}

let palabrasCortas = arr =>{
    
    let cortas=arr.filter((palabra)=>palabra.length<=3);
    return cortas;
}

let filtrarPorString = arr =>{

    let soloString=arr.filter((palabra)=>"string"==typeof(palabra));
    return soloString;
}

let arr=[3,6,8,21];
let arrDos=[3, 7, 6, 13, 2, 24, 99];
let palabras=['Et','Voluptua','Sed','At','Diam','Lorem'];

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
   ];


console.log(mayoresOIgualesA5(arr));
console.log(pares(arrDos));
console.log(palabrasCortas(palabras));
console.log(filtrarPorString(mix));

