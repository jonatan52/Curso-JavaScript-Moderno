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

const{nombre, informacion, informacion:{fabricacion}}=producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);