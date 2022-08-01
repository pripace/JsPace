/* for (let i = 1; i < 3; i++) {
    if (i == 2) {
        alert("Bienvenido! Sólo queda un lugar para la preventa!")
    }
    let nombre = prompt("Ingrese su nombre:")
    let apellido = prompt("Ingrese su apellido:")
    alert("Bienvenido a nuestra tienda " + nombre + " " + apellido + ". " + "\n Su puesto para la preventa es el número: " + i)
}
alert("Nos quedamos sin cupo de preventa. Te avisaremos por email la próxima fecha." + "\nGracias por elegirnos.") */


/* class Producto {
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

console.log(listaDeProductos) */

/*                function enlistarProductos() { ESTA LA CAMBIE POR MAP
                   for (let producto of listaDeProductos) {
                       nombreDeProductos.push(producto.nombre)
                   }
               } */

const elementos = [
    {nombre: "CubosYogui", precio: 2000},
    {nombre: "CintosYogui", precio: 1500},
]

const mostrar = elementos.map((elem) => elem.precio)

console.log(mostrar)

//ARRAY PARA MOSTRAR POR CONSOLA
/*    listaDeProductos.push(new Producto("Mat", 10000, 20));
    listaDeProductos.push(new Producto("Cubos", 2000, 15));
    listaDeProductos.push(new Producto("Cintos", 1500, 15));
    listaDeProductos.push(new Producto("Zafu", 3500, 10));

    console.log(listaDeProductos) */


/* let producto1 = {  COMO CREAR UN OBJETO NUEVO CUANDO SOLO NECESITO UNO
                   nombre: "Mat",
                   precio: 10000,
                   stock: 20,
               } */

/*                function precioUnitario(cantidad, precio) {
    precioFinal += precio * cantidad;
}

function compraProducto(stock, precio, cantidad) {
    if (cantidad <= stock) {
        precioUnitario(precio, cantidad);
        alert("El valor de su compra es de $" + (precio * cantidad))
    } else {
        alert("No disponemos de esa cantidad. El stock disponible es de " + stock + ".")
    }
} */


let nuevoProducto = document.createElement("li") //AGREGO ELEMENTO. QUEDA SOLO VISIBLE EN PAG YA QUE NO LE AGREGUE PROPIEDADES

nuevoProducto.innerText = "Manta"

let lista = document.getElementById("lista")

lista.append(nuevoProducto)

