

let accion=prompt("Que desea hacer? nuevo:Le permite agrega una nueva tarea|Listar:mostrara sus tareas en la consola | borrar: eliminara la tarea que quiera| salir: cerarra el programa");
let listado=[];
let tareaBorrar;
let tareaAgregar;


while(accion.toLowerCase()!="salir"){
    console.log(accion);
    if(accion.toLowerCase()=="nuevo"){
        tareaAgregar=prompt("Que tarea quiere agregar?")
        listado.push(tareaAgregar);
        console.log("Tarea agregada");
    }

    if(accion.toLowerCase()=="listar"){
        listado.forEach((tarea)=> console.log(tarea));
    }

    if(accion.toLowerCase()=="borrar"){
        tareaBorrar=prompt("Ingrese la tarea que desea borrar");
        
        if(listado.indexOf(tareaBorrar)>=0){
            listado.splice(listado.indexOf(tareaBorrar),1);
            console.log("Elemento eliminado correctamente");
        }
    }

    accion=prompt("Que desea hacer? nuevo:Le permite agrega una nueva tarea|Listar:mostrara sus tareas en la consola | borrar: eliminara la tarea que quiera| salir: cerarra el programa");

}