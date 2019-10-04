function palabra(){
    var cadena = document.forms[0].elements[0].value;
    var letra = document.forms[0].elements[4].value;
    var numeroVocales = cadena.match(/[aeiou]/gi).length;
    var numeroConsonantes = cadena.match(/[qwrtypsdfghjklñzxcvbnm]/gi).length;
    var cantida=0;
    var cadenaNueva="";
    for(i=0; i<=cadena.length; i++){
        if(cadena.charAt(i)==letra){
            cantida++;
        }
    }
    for(i=0; i<=cadena.length; i++){
        if((i%2)==0){
            cadenaNueva+=cadena.charAt(i).toUpperCase();
        }
        else{
            cadenaNueva+=cadena.charAt(i).toLowerCase();
        }
        
    }
    document.forms[0].elements[2].value=numeroVocales;
    document.forms[0].elements[3].value=numeroConsonantes;
    document.forms[0].elements[5].value=cantida;
    document.forms[0].elements[6].value=cadenaNueva;
}

