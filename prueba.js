
//let numeroSecreto = 7;
numeroSecreto = Math.floor(Math.random()*10)+1;
let nuemroUsuario=0;
let intentos=1;
let palabraVeces='Vez';
let MaximoIntentos= 3;
console.log(numeroSecreto);

while (nuemroUsuario != numeroSecreto ){
    nuemroUsuario =parseInt(prompt("Me idicas un número ente 1 y 10 por favor:"));

    console.log(nuemroUsuario);

if (nuemroUsuario == numeroSecreto ){
    alert ('Acertaste, el numero era: ' +numeroSecreto+ ' la cantidad de intentos fueron: ' +intentos+ ' ' +palabraVeces);
}else{
    if (nuemroUsuario > numeroSecreto) {
        alert ('el numero secreto es menor que '+nuemroUsuario  );
    }else{
        alert('El numero es mayor que ' +nuemroUsuario)
         }
         intentos++;
         palabraVeces='Veces';
         if (intentos>MaximoIntentos) {
            alert('Has llegado al numero maximo de ' +MaximoIntentos+ ' intentos');
            alert('el nuemro secreto era: '+numeroSecreto);
            break;
            
         }

         
         
    }
 
}

