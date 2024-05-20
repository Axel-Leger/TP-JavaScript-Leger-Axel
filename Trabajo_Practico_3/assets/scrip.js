let listaTarea = []
let opcion =0 ;


function AgregarTarea(tarea){
    tarea=prompt("que tarea quieres ingresar");

    if(tarea.trim() === ""){
        alert("no puede estar la casilla vacia")
    }
    else if (tarea !== tarea.trim()){
        alert("no puede contener espacion al principio ni al final")
    }else{
        alert("se añadio su tarea exitosamente");
        listaTarea.push(tarea);
    }
}


function editarTarea(editar){
let TareaCambiar = prompt("que tarea quieres cambiar");
let itareaCambiar= listaTarea.indexOf(TareaCambiar);
let tareaNueva = prompt("Por cual tarea quieres cambiar");

if(TareaCambiar.trim() === ""){
    alert("ERROR: no puede estar vacia la casilla")
}
else if(TareaCambiar !== TareaCambiar.trim()){
    alert("ERROR: no puede tener espacios al principio ni al final")
}
else if (tareaNueva.trim() === ""){
    alert("ERROR: no puede estar vacia la casilla")
}
else if (tareaNueva !== tareaNueva.trim()){
    alert("ERROR: no puede tener espacios al principio ni al final")
}
else if(TareaCambiar == -1){
    alert("la tarea no se encontro")
}else{
    listaTarea.splice(itareaCambiar ,1, tareaNueva)
}

}

function verTareas(lista){
    alert(listaTarea);

}

function eliminarTarea(tarea){
    let index= listaTarea.indexOf(tarea);
    if(index !== -1){
        listaTarea.splice(index,1);
        alert("Tarea eliminada");
    }else{
        alert("tarea no encontrada");
    }
}


while(opcion !== 5){
    opcion =parseFloat( prompt("selecione una tarea\n 1. Agregar una tarea\n 2. editar Tarea\n 3. Listar Tarea\n 4. Eliminar Tarea\n 5. Salir"));
    switch (opcion){
        case 1:
            AgregarTarea();
        break;
        case 2:
            editarTarea();
        break;
        case 3:
            verTareas();
        break;
        case 4:
            let tareaEliminar=(prompt("¿que tarea desea eliminar?"))
            eliminarTarea(tareaEliminar);
        break;
        case 5:
            alert("Salio del programa")
        break;
        default:
            alert("el valor no es valido")
        break;
    }
}



