               /* INGRESO Y PUESTO EN PREVENTA */

               for (let i = 1; i < 3; i++) {
                   if (i == 2) {
                       alert("Sólo queda un lugar para la preventa!")
                   }
                   let nombre = prompt("Ingrese su nombre:")
                   let apellido = prompt("Ingrese su apellido")
                   alert("Bienvenido a nuestra tienda " + nombre + " " + apellido + "." + "\n Su puesto para la preventa es el número: " + i)
               }
               alert("Nos quedamos sin cupo de preventa. Te avisaremos por email la próxima fecha." + "\nGracias por elegirnos.")

               /* COMPRA DE PRODUCTOS */

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

               let comprarMas = prompt("Ingrese la cantidad de productos distintos que desea comprar: \n Mat\n Cubos\n Cintos\n Zafu")
               let precioFinal = 0;

               for (let i = 0; i < comprarMas; i++) {

                   let compra = prompt("Ingrese el nombre del producto que desea: \n- Mat\n- Cubos\n- Cintos\n- Zafu");
                   let cantidad = parseInt(prompt("¿Cuántos " + compra + " quiere comprar?:"));

                   if ((compra == "Mat") || (compra == "mat")) {
                       if (cantidad <= stockProducto1) {
                           precioFinal += precioProducto1 * cantidad;
                           alert("El valor de su compra es de $" + (precioProducto1 * cantidad))
                       } else {
                           alert("No disponemos de esa cantidad. El stock disponible es de " + stockProducto1 + ".")
                       }
                   } else if ((compra == "Cubos") || (compra == "cubos")) {
                       if (cantidad <= stockProducto2) {
                           precioFinal += precioProducto2 * cantidad;
                           alert("El valor de su compra es de $" + (precioProducto2 * cantidad))
                       } else {
                           alert("No disponemos de esa cantidad. El stock disponible es de " + stockProducto2 + ".")
                       }
                   } else if ((compra == "Cintos") || (compra == "cintos")) {
                       if (cantidad <= stockProducto3) {
                           precioFinal += precioProducto3 * cantidad;
                           alert("El valor de su compra es de $" + (precioProducto3 * cantidad))
                       } else {
                           alert("No disponemos de esa cantidad. El stock disponible es de " + stockProducto3 + ".")
                       }
                   } else if ((compra == "Zafu") || (compra == "zafu")) {
                       if (cantidad <= stockProducto4) {
                           precioFinal += precioProducto4 * cantidad;
                           alert("El valor de su compra es de $" + (precioProducto4 * cantidad))
                       } else {
                           alert("No disponemos de esa cantidad. El stock disponible es de " + stockProducto3 + ".")
                       }
                   } else {
                       alert("No tenemos el producto solicitado.")
                   }
               }

               if (comprarMas > 1) {
                   alert("El valor total de tu compra es de $" + precioFinal + ".")
               }


               /* APLICANDO DESCUENTOS */

               switch (true) {
                   case precioFinal > 5000:
                    precioFinal = precioFinal * 0,90
                       alert("Accediste a un 10% de descuento!")
                       break;
                       case precioFinal > 6000:
                        precioFinal = precioFinal * 0,85
                       alert("Accediste a un 15% de descuento!")
                       break;
                       case precioFinal > 10000:
                        precioFinal = precioFinal * 0,80
                       alert("Accediste a un 20% de descuento!")
                       break;
                   default:
                       alert("Comprando más de $4.000 accedes a increibles descuentos!")
                       break;
               }


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