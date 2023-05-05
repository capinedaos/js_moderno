// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..

let i = 0;
while (i < 100) {
  // condicion

  // Bloque de código...
  if (i % 15 === 0) {
    console.log(`${i} FIZZ BUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }

  i++; // incremento
}

// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicicializamos en 20, no hará nada..

/* Intenta realizar los mismos ejemplos  Detectar pares y nones y el fizz buzz con el while, seguramente va a quedar mucho mas claro... */
