// Objeto Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.image = "imagen.jpg"

// Eleiminar propiedades del objeto
delete producto.disponible;

console.log(producto);