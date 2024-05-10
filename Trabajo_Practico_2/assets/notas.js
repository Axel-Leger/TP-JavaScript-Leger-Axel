let notaTrimestre1 = parseInt(prompt("ingrese la nota del primer trimestre"));
let notaTrimestre2 = parseInt(prompt("ingrese la nota del segundo trimestre"));
let notaTrimestre3 = parseInt(prompt("ingrese la nota del tercer trimestre"));

let promedio = Math.round((notaTrimestre1+notaTrimestre2+notaTrimestre3)/3)

if (notaTrimestre1 <= 10 && notaTrimestre1 > 0 && notaTrimestre2 <= 10 && notaTrimestre2 > 0 && notaTrimestre3 <= 10 && notaTrimestre3 > 0){

    if(promedio >= 1 && promedio <= 3){
        console.log('Nota Insuficiente');
    }
    else if (promedio == 4 || promedio == 5 ){
        console.log('Nota Regular');
    }
    else if(promedio == 6 || promedio == 7 ){
        console.log('Nota Buena');
    }
    else if(promedio == 8 || promedio == 9){
        console.log('Nota Muy Buena');
    }
    else if(promedio == 10 ){
        console.log('Nota Sobresaliente');
    }
}
else{
    console.log("alguna de las tres notas no es una nota valida");
    console.log("NOTAS VALIDAS: NUMERO MAYORES A 0 Y MENORES O IGUALES A 10");
}