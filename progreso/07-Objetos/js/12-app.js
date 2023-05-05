// Object literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Object constructor
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
  }
}

const producto2 = new Producto("Monitor 24 Pulgadas", 500);
const producto3 = new Producto("Celular Samsung Note", 3500);

console.log(producto2);
console.log(producto3);
