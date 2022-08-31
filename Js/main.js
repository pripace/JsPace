document.addEventListener('DOMContentLoaded', () => { //carga primero html

    // Variables
    let carrito = [];
    const items = document.getElementById('items');
    const carritoLiteral = document.getElementById('carrito');
    const precioFinal = document.getElementById('total');
    const botonVaciar = document.getElementById('boton-vaciar');
    const botonPedir = document.getElementById("boton-comprar");
    document.body.style.backgroundImage = "linear-gradient(to bottom, #f5ebe0, #e3d5ca)";

    async function listaDeProductos() {
        const URLJSON = "/data.json"
        const resp = await fetch("data.json")
        const data = await resp.json()
        listaDeProductos = data;
        renderizarProductos();
    }

    listaDeProductos()


    function renderizarProductos() { //NODOS, CREACIONES
        /* listaDeProductos */
        listaDeProductos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add("card", "text-center", 'col-sm-4', "bg-light");
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h4');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.innerText = info.nombre;
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.innerText = `$${info.precio}`;
            //Stock
            const miNodoStock = document.createElement('p');
            miNodoStock.classList.add('card-text');
            miNodoStock.innerText = `Disponibles: ${info.stock}`;
            //IMAGENES
            const miNodoImg = document.createElement("img");
            miNodoImg.classList.add("card-img-top");
            miNodoImg.classList.add("imagen");
            miNodoImg.setAttribute("src", info.img);

            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-outline-info');
            miNodoBoton.innerText = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id); //con esto identifico a marcador con el id de cada prod
            miNodoBoton.addEventListener('click', agregarProductoAlCarrito);
            miNodoBoton.addEventListener("click", alerta); //Sweet alert

            // Inserto
            miNodoCardBody.append(miNodoTitle);
            miNodoCardBody.append(miNodoPrecio);
            miNodoCardBody.append(miNodoStock);
            miNodoCardBody.append(miNodoImg);
            miNodoCardBody.append(miNodoBoton);
            miNodo.append(miNodoCardBody);
            items.append(miNodo);
        });
    }


    //SWEET ALERT Bienvenida
    setTimeout(() => {
        Swal.fire({
            title: '<strong>Bienvenidos a Nuestra Tienda Online</strong>',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ir a Comprar!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
        })
    }, 1200);

    // EVENTO para añadir un producto al carrito:

    function agregarProductoAlCarrito(e) {
        // Añadimos el Nodo alcarrito
        carrito.push(e.target.getAttribute('marcador')) //ACA COMO LO LEERIA?
        // Actualizar carro
        renderizarCarrito();
        // Actualizo LocalStorage
        guardarCarritoEnLocalStorage();
        alerta(); //Sweet alert
    }

    const alerta = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al Carrito!',
            showConfirmButton: true,
            timer: 1000,
            confirmButtonText: "Seguir Comprando"
        })
    }

    //Muestro los productos guardados en el carrito

    function renderizarCarrito() {
        carritoLiteral.innerText = '';
        // Quitamos los duplicados con Operador avanzado Spread, es para que se muestre una vez el prod independiente de la cantidad (Un valor en un Set solo puede ocurrir una vez)
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total; //Operador avanzado TERNARIO
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', "list-group-item-info", 'text-right', 'mx-5', "bg-light");
            miNodo.innerText = `${miItem[0].nombre} x ${numeroUnidadesItem} = $${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-outline-warning', 'mx-5');
            miBoton.innerText = 'Quitar';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.append(miBoton);
            carritoLiteral.append(miNodo);
        });
        // Renderizamos el precio total en el HTML
        precioFinal.innerText = calcularTotal();
    }

    //Evento para borrar un elemento del carrito

    function borrarItemCarrito(e) { //Antes de eliminar el producto, consulto al cliente si esta seguro
        Swal.fire({
            title: 'Quieres eliminar este producto?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Conservar',
            denyButtonText: `Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Buena elección!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Puedes agregarlo nuevamente si lo deseas!', '', 'info');
                const id = e.target.dataset.item;
                // Borramos todos los productos
                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });
                // volvemos a renderizar
                renderizarCarrito();
                // Actualizamos el LocalStorage
                guardarCarritoEnLocalStorage();
            }
        })
    }

    //Calcula el precio total teniendo en cuenta los productos repetidos

    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0);
    }

    // Vacia el carrito y vuelve a dibujarlo

    function vaciarCarrito() {
        Swal.fire({
            title: 'Quieres vaciar tu carrito?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Conservar',
            denyButtonText: `Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Buena elección!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Te esperamos nuevamente!', '', 'info');

                // Borramos todos los productos

                // Limpiamos los productos guardados
                carrito = [];
                // Renderizamos los cambios
                renderizarCarrito();
                // Borra LocalStorage
                localStorage.removeItem('carrito');
                localStorage.clear();
                //borro del storage tambien
            }
        })
    }


    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {
        /*         ¿Existe un carrito previo guardado en LocalStorage?
                     Lo carga por storage */
        carrito = JSON.parse(localStorage.getItem('carrito')) || []; //Utilizo op logico or para recuperar carrito, en vez de if
    }

    //Confirmar Compra por mail
    const realizarPedido = ({
        value: email
    }) => {
        (async () => {

            const {
                value: email
            } = await Swal.fire({
                title: 'Te enviaremos el Link de pago',
                input: 'email',
                inputLabel: 'Ingresa tu email',
                inputPlaceholder: 'Email'
            })

            if (email) {
                Swal.fire(`Finaliza tu compra ingresando a: ${email}`)
            }
        })()
    }


    // Eventos
    botonVaciar.addEventListener('click', vaciarCarrito);
    botonPedir.addEventListener("click", realizarPedido);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();

});