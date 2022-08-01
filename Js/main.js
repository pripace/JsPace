               /* INGRESO Y PUESTO EN PREVENTA */

               alert("Bienvenid@!  \nSólo queda un lugar para la preventa de Objetos Personalizados!")

               let nombre = prompt("Ingrese su nombre:")
               let apellido = prompt("Ingrese su apellido:")
               alert(`Bienvenido a nuestra tienda ${nombre} ${apellido}. \n Su puesto para la preventa es el número: 1`)

               /* CREANDO PRODUCTOS */
               class Producto { //FUNCION QUE CREA NUEVOS OBJETOS PUEDE SER FUNCTION O CLASS
                   constructor(nombre, precio, stock) {
                       this.nombre = nombre
                       this.precio = parseFloat(precio)
                       this.stock = stock
                   }
               }

               /*OBJETO NUEVO A PARTIR DE FUNCION CONSTRUCTORA O CLASE*/
               const producto1 = new Producto("Mat", 10000, 20);
               const producto2 = new Producto("Cubos", 2000, 15);
               const producto3 = new Producto("Cintos", 1500, 15);
               const producto4 = new Producto("Zafu", 3500, 10);

               let listaDeProductos = [producto1, producto2, producto3, producto4]

               for (const producto of listaDeProductos) {

                   if (producto.stock > 0) {

                       let card = document.createElement("div")

                       card.innerHTML = `<h3>${producto.nombre}</h3>
                                     <p>$ ${producto.precio}</p>
                                     <p>Quedan dispnibles: ${producto.stock} unidades.</p>`

                       document.body.append(card)
                   }
               }

               let nombreDeProductos = listaDeProductos.map((producto) => producto.nombre) //USO MAP EN VEZ DE UNA FUNCION ENTERA


               /* COMPRA DE PRODUCTOS */

               let comprarMas = prompt("Ingrese la cantidad de productos distintos que desea comprar: \n- " + nombreDeProductos.join("\n- "))
               let precioFinal = 0;


               function compraProducto(stock, precio, cantidad) {
                   if ((cantidad <= stock) && (cantidad > 0)) {
                       precioFinal += precio * cantidad; //UNIFIQUE ESTA FUNCION AQUI DENTRO YA QUE SOLO LA USABA ACA
                       alert("El valor de su compra es de $" + (precio * cantidad))
                   } else {
                       alert(`No disponemos de esa cantidad. El stock disponible es de ${stock} unidades.`)
                   }
               }


               for (let i = 0; i < comprarMas; i++) { //AGREGO +1 PRODUCTO

                   let compra = prompt("Ingrese el nombre del producto que desea: \n- " + nombreDeProductos.join("\n- ")).toLowerCase();
                   let cantidad = parseInt(prompt("¿Cuántos " + compra + " quiere comprar?:"));

                   if (compra == producto1.nombre.toLowerCase()) {
                       compraProducto(producto1.stock, producto1.precio, cantidad)

                   } else if (compra == producto2.nombre.toLowerCase()) {
                       compraProducto(producto2.stock, producto2.precio, cantidad)

                   } else if (compra == producto3.nombre.toLowerCase()) {
                       compraProducto(producto3.stock, producto3.precio, cantidad)

                   } else if (compra == producto4.nombre.toLowerCase()) {
                       compraProducto(producto4.stock, producto4.precio, cantidad)

                   } else {
                       alert("No tenemos el producto solicitado.")
                   }
               }

               /* APLICANDO DESCUENTOS */

               switch (true) {
                   case precioFinal > 5000 && precioFinal < 6000:
                       precioFinal = precioFinal * 0.90
                       alert("Accediste a un 10% de descuento!")
                       break;
                   case precioFinal > 6000 && precioFinal < 10000:
                       precioFinal = precioFinal * 0.85
                       alert("Accediste a un 15% de descuento!")
                       break;
                   case precioFinal >= 10000:
                       precioFinal = precioFinal * 0.80
                       alert("Accediste a un 20% de descuento!")
                       break;
                   default:
                       alert("Comprando más de $5.000 accedes a increibles descuentos!")
                       break;
               }
               alert("El precio actual de tu compra es de $" + precioFinal + ".")

               /* ENVIOS */

               let envios = prompt("¿Desea envío o retiro por local Patio Olmos?\n- Envío\n- Retiro").toLowerCase()
               let fechaCompra = new Date()
               if (envios == "envio") {
                   prompt("Ingrese su dirección:")
                   precioFinal += 500;
                   alert("Tu pedido llegará en 48 horas hábiles. Compra efectuada:" + fechaCompra)
               } else {
                   alert("Retira tu compra a partir de mañana por Patio Olmos Shopping, local 33. Compra efectuada:" + fechaCompra.toLocaleString())
               }
               alert("El precio final de tu compra, con la entrega elegida, es de $" + precioFinal + ".")

               //DOM

               let titulo = document.getElementById("titulo")

               console.log(titulo)

               titulo.innerText = "Tienda Online de Yoga y Vida" //CAMBIO EL TITULO

               let nuevoProducto = document.createElement("li") //AGREGO ELEMENTO. QUEDA SOLO VISIBLE EN PAG YA QUE NO LE AGREGUE PROPIEDADES

               nuevoProducto.innerText = "Manta"

               let lista = document.getElementById("lista")

               lista.append(nuevoProducto)