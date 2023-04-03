// Objeto Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true
}

// Destructuring
const {nombre, precio, disponible} = producto;
// const {precio} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
