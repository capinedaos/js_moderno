// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log("numero en string");
console.log(numero1);
console.log("Convertir de String a Número entero");
console.log(Number.parseInt(numero2));
console.log("Convertir de Strings a Números flotantes");
console.log(Number.parseFloat(numero2));
console.log("Convertir a cadena de texto a numero entero");
console.log(Number.parseInt(numero3));
console.log("Revisar si un número es entero o no");
console.log(Number.isInteger(numero4));
console.log("Revisar si un número es entero o no");
console.log(Number.isInteger(numero3));
console.log("Convertir numero a string");
console.log(numero4.toString());
