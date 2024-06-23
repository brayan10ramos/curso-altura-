/*
 Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
 */
 let numero= 1;
 while (numero<=10) {
     alert ('numero '+numero)
     numero=numero+1;
 }
 
 /*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
  */
 let contador = 10;
 while (contador >= 0) {
 alert(contador);
 contador--;
 }
 /*Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número
  utilizando un bucle 'while' en la consola del navegador.
  */
  let numeroMaximo= prompt('Ingresa un numero para la cuenta regresiva');
  while (numeroMaximo >= 0) {
     alert(numeroMaximo);
     numeroMaximo--;
     }
 
  /*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número
   utilizando un bucle 'while' en la consola del navegador.
   */
 let numreoUsuario = prompt('Ingresa un numero para la cuenta Progresiva ');
 let progresiva = 0;
while (progresiva <= numreoUsuario) {
    alert(+progresiva);
progresiva++
}
