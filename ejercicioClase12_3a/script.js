//1 Numeros duplicados

let numeros=[2,4,5,37,0];
let numerosDuplicados={};

numeros.forEach((numero) =>{
    numerosDuplicados[numero]=numero*2;
})

console.log(numerosDuplicados);

//2 Desafio+27

let personas=[
    {nombre:"Ana", edad:28},
    {nombre:"Maria", edad:24},
    {nombre:"Jose",edad:31},
];

let personasFiltrado=[];

personasFiltrado.push(personas.filter((persona)=>persona.edad>27));

console.log(personasFiltrado);