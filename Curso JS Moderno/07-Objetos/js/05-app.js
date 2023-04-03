// Objetos dentro de otro
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1KG",
            medida: "1M"
        },
        fabricacion: {
            pais: "china"
        }

    }
}

// console.log(producto)
// console.log(producto.infromacion)
// console.log(producto.infromacion.peso)
console.log(producto.informacion.fabricacion.pais);
