document.getElementById("carritoIcon").addEventListener("click", ()=>{
    document.getElementById("carrito").classList.toggle("active")
})



const productosGolosinas = [
    {
        id: 1,
        nombre: "Pico Dulce",
        img: "./assets/img/picoDulce.jpg",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Block de 38gr",
        img: "./assets/img/block38Gr.jpg",
        precio: 1500
    },
    {
        id: 3,
        nombre: "Rhodesia",
        img: "./assets/img/rhodesia.jpg",
        precio: 1800
    },
    {
        id: 4,
        nombre: "Natura de 125 Gr",
        img: "./assets/img/natura.jpg",
        precio: 800
    },
    {
        id: 5,
        nombre: "Turron Nevares",
        img: "../assets/img/turronNevares.jpg",
        precio: 1200
    },
    {
        id: 6,
        nombre: "Jugo Clight",
        img: "../assets/img/jugoClight.jpg",
        precio: 800
    },
    {
        id: 7,
        nombre: "Alfajor Pepito",
        img: "../assets/img/alfajorPepito.jpg",
        precio: 800
    },
];

const carrito = [];



const modelo = `
            <article class="productos cardProductos" id="productos cardProductos">
                <div>
                <img src="../assets/img/picoDulce.jpg" alt="Producto1">
                </div>

                <h3>nombre del producto</h3>
                <p>$ <span>1000</span></p>

                <button class="botonesPrincipales botonPedidos botonesCompra"><img src="../assets/img/changoReducida.jpg" alt="imagen carrito"></button>
            </article>
`



const ProductosDOM = document.getElementById("productos");

productosGolosinas.forEach(el => {
    ProductosDOM.innerHTML += `
        <article class="productos cardProductos">
            <div>
                <img src=${el.img} alt="Producto1">
            </div>
            <h3>${el.nombre}</h3>
            <p>${"$" + el.precio}</p>
            <button class="botonesPrincipales botonPedidos botonesCompra">
                <img src="../assets/img/changoReducida.jpg" alt="imagen carrito">
            </button>
        </article>
    `;
});

const BotonesProductos = document.getElementsByClassName("botonesCompra");
const arrayBotonesProductos = Array.from(BotonesProductos);


arrayBotonesProductos.forEach(boton => {
    boton.addEventListener("click", (event) => {
        const articulo = event.target.closest("article");

        const nombre = articulo.querySelector("h3").innerText;
        const precioTexto = articulo.querySelector("p").innerText.replace("$", "");
        const precio = Number(precioTexto);

        // Agregar el producto al carrito
        const cantidadChequeada = agruparProductos(nombre);
        if (!cantidadChequeada) {
            carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
        }

        alert("¡Producto agregado al carrito!");
        renderizarCarrito(); // Actualizar la vista del carrito
    });
});

function agruparProductos(nombreBuscar) {
    for (let producto of carrito) {
        if (producto.nombre === nombreBuscar) {
            producto.cantidad += 1;
            return true;
        }
    }
    return false;
}

function renderizarCarrito() {
    const carritoDom = document.getElementById("productosCarrito");
    carritoDom.innerHTML = ""; // Limpiar el contenido previo

    carrito.forEach((el, index) => {
        carritoDom.innerHTML += `
            <div class="producto">
                <h3>${el.nombre}</h3>
                <p>Precio U: ${"$" + el.precio}</p>
                <p>Cantidad: ${el.cantidad}</p>
                <p>Sub Total: ${el.cantidad * el.precio}</p>
                <button class="botonEliminar" data-index="${index}">X</button>
            </div>
        `;
    });

    // Calcular y mostrar el total
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    carritoDom.innerHTML += `<div id="total">Total: $${total}</div>`;

    // Agregar eventos a los botones "X"
    const botonesEliminar = document.getElementsByClassName("botonEliminar");
    Array.from(botonesEliminar).forEach(boton => {
        boton.addEventListener("click", (event) => {
            const index = event.target.dataset.index; // Obtener índice del producto
            eliminarProductoDelCarrito(index);
        });
    });
}

function eliminarProductoDelCarrito(index) {
    // Reducir cantidad o eliminar producto del carrito
    carrito[index].cantidad -= 1;
    if (carrito[index].cantidad === 0) {
        carrito.splice(index, 1); // Eliminar producto si cantidad es 0
    }
    renderizarCarrito(); // Actualizar vista del carrito
}



