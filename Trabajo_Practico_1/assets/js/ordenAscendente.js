let num1 = prompt("ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");
let num3 = prompt("ingrese el tercer numero");
/* 3-2-1*/ 
if(num1 > num2 && num1> num3 && num2>num3){

    console.log("los numeros que pusiste son: numero 1= " + num1 + ", numero 2= " + num2 + ", numero 3= " + num3);

    console.log("los numero en orden ascendente: " + num3 + " " + num2 + " " + num1);
}

/* 1-2-3 */

else if(num3 > num2 && num3 > num1 && num2 > num1){

    console.log("los numeros que pusiste son: numero 1= " + num1 + ", numero 2= " + num2 + ", numero 3= " + num3);

    console.log("los numero en orden ascendente: " + num1 + " " + num2 + " " + num3);
}

/*1-3-2*/ 

else if(num2 > num1 && num2 > num3 && num3 > num1){

    console.log("los numeros que pusiste son: numero 1= " + num1 + ", numero 2= " + num2 + ", numero 3= " + num3);

    console.log("los numero en orden ascendente: " + num1 + " " + num3 + " " + num2);
}

/* 2-1-3 */

else if(num3 > num2 && num3 > num1 && num1 > num2){

    console.log("los numeros que pusiste son: numero 1= " + num1 + ", numero 2= " + num2 + ", numero 3= " + num3);

    console.log("los numero en orden ascendente: " + num2 + " " + num1 + " " + num3);
}

/* 3-1-2 */
else if(num2 > num1 && num2 > num3 && num1 > num3){

    console.log("los numeros que pusiste son: numero 1= " + num1 + ", numero 2= " + num2 + ", numero 3= " + num3);

    console.log("los numero en orden ascendente: " + num3 + " " + num1 + " " + num2);
}

/* 2-3-1*/

else if(num1 > num2 && num1 > num3 && num3 > num2){

    console.log("los numeros que pusiste son: numero 1= " + num1 + ", numero 2= " + num2 + ", numero 3= " + num3);

    console.log("los numero en orden ascendente: " + num2 + " " + num3 + " " + num1);
}


else{
    console.log("mal");
}