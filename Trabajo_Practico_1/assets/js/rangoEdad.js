let UsuarioEdad = prompt("¿que edad tiene?");

if ( UsuarioEdad < 13){
    console.log("niño");
}
else if (UsuarioEdad >=13 && UsuarioEdad < 20 ){
    console.log("adolecente");
}
else if (UsuarioEdad >=20 && UsuarioEdad < 60 ){
    console.log("adulto");
}
else if (UsuarioEdad >= 60 ){
    console.log("adulto mayor");
}
else{
    console.log("edad no valida");
}
