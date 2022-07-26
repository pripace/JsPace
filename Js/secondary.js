class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre.toLowerCase()
        this.precio = parseFloat(precio)
        this.stock = stock
    }
}

let listaDeProductos = []
listaDeProductos.push(new Producto("Mat", 10000, 20));
listaDeProductos.push(new Producto("Cubos", 2000, 15));
listaDeProductos.push(new Producto("Cintos", 1500, 15));
listaDeProductos.push(new Producto("Zafu", 3500, 10));

console.log(listaDeProductos)