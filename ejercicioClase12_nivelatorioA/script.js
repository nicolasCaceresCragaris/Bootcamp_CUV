let autos = [
    {
      marca: "Citroen",
      modelo: "C3",
      año: 2013,
      dueño: "Juan",
      color: {
        capot: "gris",
        puertas: "negro",
      },
      dueñosAnteriores: [], // Lo compro 0KM
    },
    {
      marca: "Honda",
      modelo: "Fit",
      año: 2016,
      dueño: "Santiago",
      color: {
        capot: "rojo",
        puertas: "rojo",
      },
      dueñosAnteriores: ["Jorge", "Iván"],
    },
  ];

//Supongamos que tenemos
// un Arreglo llamado autos que tiene dos Objetos (un auto marca "Citroen" y otro marca "Honda").
//Santiago le compra el auto a Juan y le pinta el capot a negro.
//¿Cómo harías para modificar esas Propiedades?

console.log("Santiago le compro el auto a Juan");

autos[0].dueño="Santiago";
autos[0].color.capot="Negro";
autos[0].dueñosAnteriores.push("Juan");

console.log(autos[0].dueño);
console.log(autos[0].color.capot);
console.log(autos[0].dueñosAnteriores);