/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/
let DiaSemana = prompt ("¿qué día de la semana es?");
console.log (DiaSemana);
if (DiaSemana == 'sabado' || DiaSemana == 'domingo')
 {
    alert ('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
};
/*Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
*/
let nuemro =prompt('Ingeresa un número Positivo o Negativo');
console.log (nuemro);
if (nuemro>0){
    alert ('El Nuermo es Positivo')
}else if (nuemro < 0) {
    alert ('El numero es negativo')
    
}else{
    alert ('El nuemro es Cero')
}
/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100,
 muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".  
*/
let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo
*/ 
let saldoCuenta = 500; 
alert('Tu saldo es de: '+saldoCuenta);
/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
 */
let NombreUsuario = prompt ('Ingresa tu nombre')
alert ('Bienvenido '+NombreUsuario )