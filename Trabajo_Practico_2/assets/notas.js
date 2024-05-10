let notaTrimestre1 = parseInt(prompt("ingrese la nota del primer trimestre"));
let notaTrimestre2 = parseInt(prompt("ingrese la nota del segundo trimestre"));
let notaTrimestre3 = parseInt(prompt("ingrese la nota del tercer trimestre"));

let promedio = Math.round((notaTrimestre1+notaTrimestre2+notaTrimestre3)/3)

if(isNaN(notaTrimestre1) || isNaN(notaTrimestre2) || isNaN(notaTrimestre3)){
    console.log("igrese una letra. ingrese la nota en numeros porfavor");
}
else if (notaTrimestre1 > 10 || notaTrimestre1 <= 0){
    console.log("nota de primer trimestre es menor a 0 o mayor a 10")
} 
else if ( notaTrimestre2 > 10 || notaTrimestre2 <= 0){
    console.log("nota del segundo trimestre es menor a 0 o mayor a 10");
}
else if ( notaTrimestre3 > 10 || notaTrimestre3 <= 0){
    console.log_("nota del tercer trimieste es menor a 0 o mayor a 10");
}
else{
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
