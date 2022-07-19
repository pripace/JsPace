               /* INGRESO Y PUESTO EN PREVENTA */

               for (let i = 1; i < 3; i++) {
                   if (i == 2) {
                       alert("Sólo queda un lugar para la preventa!")
                   }
                   let nombre = prompt("Ingrese su nombre:")
                   let apellido = prompt("Ingrese su apellido:")
                   alert("Bienvenido a nuestra tienda " + nombre + " " + apellido + ". " + "\n Su puesto para la preventa es el número: " + i)
               }
               alert("Nos quedamos sin cupo de preventa. Te avisaremos por email la próxima fecha." + "\nGracias por elegirnos.")


               /* LISTA DE PRODUCTOS */

               let producto1 = "Mat";
               let precioProducto1 = 10000;
               let stockProducto1 = 20;

               let producto2 = "Cubos";
               let precioProducto2 = 2000;
               let stockProducto2 = 15;

               let producto3 = "Cintos";
               let precioProducto3 = 1500;
               let stockProducto3 = 15;

               let producto4 = "Zafu";
               let precioProducto4 = 3500;
               let stockProducto4 = 10;

               /* COMPRA DE PRODUCTOS */

               let comprarMas = prompt("Ingrese la cantidad de productos distintos que desea comprar: \n Mat\n Cubos\n Cintos\n Zafu")
               let precioFinal = 0;

               function precioUnitario(cantidad, precio) {
                   precioFinal += precio * cantidad;
               }

               function compraProducto(stock, precio, cantidad) {
                   if (cantidad <= stock) {
                       precioUnitario(precio, cantidad);
                       alert("El valor de su compra es de $" + (precio * cantidad))
                   } else {
                       alert("No disponemos de esa cantidad. El stock disponible es de " + stock + ".")
                   }
               }


               for (let i = 0; i < comprarMas; i++) {

                   let compra = prompt("Ingrese el nombre del producto que desea: \n- Mat\n- Cubos\n- Cintos\n- Zafu");
                   let cantidad = parseInt(prompt("¿Cuántos " + compra + " quiere comprar?:"));

                   if ((compra == "Mat") || (compra == "mat") || (compra == "MAT")) {
                       compraProducto(stockProducto1, precioProducto1, cantidad)

                   } else if ((compra == "Cubos") || (compra == "cubos") || (compra == "CUBOS")) {
                       compraProducto(stockProducto2, precioProducto2, cantidad)

                   } else if ((compra == "Cintos") || (compra == "cintos") || (compra == "CINTOS")) {
                       compraProducto(stockProducto3, precioProducto3, cantidad)

                   } else if ((compra == "Zafu") || (compra == "zafu") || (compra == "ZAFU")) {
                       compraProducto(stockProducto4, precioProducto4, cantidad)

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
                   case precioFinal > 10000:
                       precioFinal = precioFinal * 0.80
                       alert("Accediste a un 20% de descuento!")
                       break;
                   default:
                       alert("Comprando más de $5.000 accedes a increibles descuentos!")
                       break;
               }
               alert("El precio actual de tu compra es de $" + precioFinal + ".")

               /* ENVIOS */

               let envios = prompt("¿Desea envío o retiro por local Patio Olmos?\n- Envío\n- Retiro")
               if ((envios == "Envio") || (envios == "envio") || (envios == ENVIO)) {
                   prompt("Ingrese su dirección:")
                   precioFinal += 500;
                   alert("Tu pedido llegará en 48 horas hábiles.")
               } else {
                   alert("Retira tu compra a partir de mañana por Patio Olmos Shopping, local 33.")
               }
               alert("El precio final de tu compra, con la entrega elegida, es de $" + precioFinal + ".")



               /*  if ((nombre != " ") || (apellido != " "))
                do{
                 alert("Bienvenido a nuestra tienda " + nombre + " " + apellido + "." + "\n Su puesto para la preventa es el número: " + i)
                } while ( nombre + apellido) */

               /* COMPRA DE PRODUCTOS */

               /*  function producto1 (producto, precio, stock) {
                    this.producto = producto
                    this.precio = precio
                    this.stock = stock
                    this.sumarIva = function (){
                        return this.precio * 1.21
                    }
                    this.sumarStock = function (cantidad){this.stock * }
               } 
               
               class producto {
               }
                             
               */