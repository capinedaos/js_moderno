// En el video anterior videos el for of ,en este video veremos el for in...

// el for in va a iterar sobretodas las propiedades de un objeto, pero primero veamos como recorrer un arreglo con objetos...

const carrito = [
  { id: 1, producto: "Libro" },
  { id: 2, producto: "Camisa" },
  { id: 3, producto: "Disco" },
];

for (let producto of carrito) {
  console.log(producto.producto);
}

console.log("");

let automovil = {
  modelo: "Camaro",
  motor: "6.0",
  anio: "1969",
  marca: "Chevrolet",
};
for (let auto in automovil) {
  console.log(`${auto} : ${automovil[auto]}`);
}

console.log("");
// ejemplo de for of sobre eobjeto pero agragando Object.entries apartir de em7
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(`${llave} : ${valor}`);
}

// Y con eso terminamos lo que son los iteradores, veamos una serie de Array Methods, que son similares a estos iteradores y sus usos. ya vamos terminando toda la parte de básicos de JavaScript para movernos al DOM pero vamos viendo un tema más!
