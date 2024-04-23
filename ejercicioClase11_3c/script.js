function biggest_smallest(arr){
    max=arr[0];
    min=arr[0];

    arr.forEach(numero => {
        if(numero>max){
           max=numero;
        }
        if(numero<min){
          min=numero;
        }
    });

    console.log("Maximo:"+max);
    console.log("Minimo:"+min);
}

arrNumeros=[111,27,31,44,101,213,33,58];

biggest_smallest(arrNumeros);