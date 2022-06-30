/**
 * Includes, para encontrar un numero en nuestro arreglo
 */
 let numbers = [1, 2, 3, 7, 8];
 const VALUE = 7;
 
 if (numbers.includes(VALUE)) {
   console.log(`Sí se encuentra el valor ${VALUE}`);
 } else {
   console.log(`No se encuentra el valor ${VALUE}`);
 }
 
 /**
  * Pow, elevacion
  */
 let base = 4;
 let exponent = 4;
 let result = base ** exponent;
 console.log(`Result -> ${result}`);