let personas=[
  { nombre: "Alba", edad: 15 },
  { nombre: "Estrella", edad: 30 },
  { nombre: "Belen", edad: 20 },
  { nombre: "Santiago", edad: 4 },
  { nombre: "Katherine", edad: 55 },
];

let personasOrdenadas=[];

let persona;
let contarMasGrandes=0;

for(let i=0; i<personas.length;i++){
    persona=personas[i];
    for(let j=0;j<personas.length;j++){
        if(i!=j){
            if(personas[i].edad<personas[j].edad){
                contarMasGrandes++;
            }
        }
    }
    persona.posicion=personas.length-contarMasGrandes;
    contarMasGrandes=0;
}


personas.forEach((persona)=>{

    personasOrdenadas[persona.posicion-1]=persona;
})

console.log(personasOrdenadas);