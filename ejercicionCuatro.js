/*1).Crea un programa que utilice console.log para mostrar un mensaje de bienvenida
*/
console.log('Bienvenido');
/*2).Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log
 para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador
 */
let Nombre=('Brayan');
console.log('!Hola¡ '+Nombre);
/*3).Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!" 
*/
let nombre=('Daniel');
alert ('!Hola¡ '+nombre);
/*4).Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador
*/
let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?.');
console.log('lenguaje de programacion que me gusta es ' +lenguaje);
/*5).Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, 
realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log 
para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
 */
let Valor1 = 5;
let Valor2 = 8;
let resultado=(Valor1 + Valor2);
console.log('La Suma de '+Valor1+' + '+Valor2+ ' = ' +resultado );
/*6).Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
*/
let Valor3 = 5;
let Valor4 = 8;
let resultado2=(Valor3 - Valor4);
console.log('La Resta de '+Valor3+' + '+Valor4+ ' = ' +resultado2 );
/*7).Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si 
la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
*/
let edad= prompt('Ingrese su edad');
if (edad>18) {
    console.log('Es amyor de edad');
}else{
    console.log('Ers menor de edad');
}
/*8).Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero 
utilizando un if-else y muestra el mensaje correspondiente.
*/
let nuemro= prompt('Ingresa un numero');
if (nuemro>0) {
    alert('es Positivo');
}else if(nuemro<0) {
    alert('es negativo');
} else {
    alert('es el numero 0');
}
/*9).Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/
let numero= 1;
 while (numero<=10) {
     console.log('numero '+numero)
     numero=numero+1;
 }

/*10).Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else 
para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
 */
let nota=4;
if (nota>=7) {
    console.log('Aprobado')
    
} else {
    console.log('Reprobo')
    
}
/*11).Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
 */
numeroAleatorio = Math.random();
console.log(numeroAleatorio);
/*12).Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
 */
 numeroEntero= parseInt(Math.random()*10)+1;
console.log (numeroEntero);
/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
 */
numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroIntAleatorio);























