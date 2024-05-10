let dia = prompt("ingrese un numero del 1 al 7");
dia = parseInt(dia);

if(dia < 8){

switch (dia){
    case 1:
        console.log("lunes");
    break;
    case 2:
        console.log("martes");
    break;
    case 3:
        console.log("miercoles");
    break;
    case 4:
        console.log("jueves");
    break;
    case 5:
        console.log("viernes");
    break;
    case 6:
        console.log("sabado");
    break;
    case 7:
        console.log("domingo");
    break;
}}

else{
    console.log("no es un numero aceptable")
}