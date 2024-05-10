let productos = parseInt(prompt("ingrese cuantos productos esta llevando"));
let precio = parseInt(prompt("ingrese el precio toral"));
let precioConDescuento = parseInt((precio*85)/100)


if (productos < 1 || precio <1){
    console.log("no se puede ingrese productos o precio menores a 1");
}
else if (productos >= 10 && precio >= 20000){
    console.log("el precio total con descuento del 15% es: " + precioConDescuento);
}
else if  (productos < 10 || precio < 20000){
    console.log("no se supero los productos o precio necesario para el descuento");
    console.log("el precio total es: "+ precio);
}
else{
    console.log("mal");
}

