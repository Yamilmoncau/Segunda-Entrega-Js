
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

const ProductosDOM = document.getElementById("productos")

const modelo = `
            <article class="productos cardProductos" id="productos cardProductos">
                <div>
                    <img src="../assets/img/picoDulce.jpg" alt="Producto1">
                </div>
                <h3>chupapija</h3>
                <p>$1000</p>
                <button class="botonesPrincipales botonPedidos botonesCompra"><img src="../assets/img/changoReducida.jpg" alt="imagen carrito"></button>
            </article>
`

productosGolosinas.forEach(el => {
    ProductosDOM.innerHTML += `<div class="img">
    <img src="${el.img}" alt="">
    </div>`	
    ProductosDOM.innerHTML += `<h2>${el.nombre}</h2>`
    ProductosDOM.innerHTML += `<p>Precio: $ <span>${el.precio}</span></p>`
    ProductosDOM.innerHTML += `<button class="botonesCompra">Comprar</button>`
});


const BotonesProductos = document.getElementsByClassName("botonesCompra")
const arrayBotonesProductos = Array.from(BotonesProductos)


