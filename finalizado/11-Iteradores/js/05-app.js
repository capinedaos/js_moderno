// Veamos otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...

// a diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.
let i = 0; // probar con 1000

do {
  if (i % 15 === 0) {
    console.log(`${i} FIZZ BUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }

  i++;
} while (i < 100);

// Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...

// cambiamos el i a 100 y revisamos...
