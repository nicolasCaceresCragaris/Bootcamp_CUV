
let productos=[];
let producto;

producto=prompt("Ingrese un producto");

while(producto.toLowerCase()!="no"){
    productos.push(producto);
    console.log("Producto agregado!");
    producto=prompt("Ingrese un producto");
}

for(let i=0;i<productos.length;i++){
    console.log(productos[i]);
}