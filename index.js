//INCLUIMOS LIBRERIAS/MODULOS QUE NECESITAMOS
//ESTO ES CON NODE LA FORMA DIFICIL DE INICIAR UN SERVIDOR
/*
let http= require("http");

let fs= require("fs");

http.createServer(function(req,res){
    
    //CABECERA DE LA RESPUESTA QUE VA A DAR EL SERVIDOR

    res.writeHead(200,{
        "Content-Type":"text/html",
        "Access-Control-Allow-Origin":"*"
    });

    //TOMAMOS EL ARCHIVO index.html usando fs (file system)

    let archivoHtml = fs.createReadStream(__dirname + '/index.html');

    //ENVIAMOS EL INDEX.HTML AL USUARIO

    archivoHtml.pipe(res);

    console.log("Estamos visitando el sitio http://localhost:3000")

}).listen(3000); //EL SERVIDOR ESCUCHA EL PUERTO 3000 */

//CREANDO UN SERVIDOR USANDO EXPRESS


//instanciamos express
var express = require("express");
var app=express();
 
//ACA ESPECIFICAMOS LA RUTA O METODO DE LA PETICION
app.get('/hola',function(req,res){
    //ENVIAR EL ARCHIVO
    
    res.send("hola");
})


//ESCUCHAR EL PUERTO 3000

app.listen(3000);

