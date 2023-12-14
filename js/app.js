const container = document.querySelector("#container");

const retornoCardHTML = (producto) => {
    return `<div class="card p-5" style="width: 18rem;">
        <div class="imagen">${producto.imagen}</div>
        <div class="card-title nombre">${producto.nombre}</div>
        <div class="card-title nombre">${producto.importe}</div>
        <div class="comprar"><button id="${producto.id}" class="btn btn-primary">Añadir al carrito</button></div>
</div>`
}

function cargarContainer() {
    container.innerHTML = ""
    productos.forEach((producto) => container.innerHTML += retornoCardHTML(producto))
    activarClickEnBotones()
}
cargarContainer()



function activarClickEnBotones() {
    const botones = document.querySelectorAll('.btn.btn-primary')
    for (let boton of botones) {
        boton.addEventListener('click', (e) => {
            const productoElegido = productos.find((producto) => (producto.id === parseInt(e.target.id)))
            carritoProductos.push(productoElegido)
            localStorage.setItem('miCarrito', JSON.stringify(carritoProductos))
        })
    }
}


