
const tbody = document.querySelector("#tbody");

function retornarTablaHTML(productoCarrito) {
    return `<tr>
                <td>${productoCarrito.imagen}</td>
                <td>${productoCarrito.nombre}</td>
                <td>${productoCarrito.importe}</td>
                <td id="1234" class="btn btn-danger delete">⛔️</td>
            </tr>`
}

function cargarCarrito() {
    carritoProductos.forEach(productoCarrito => {
        tbody.innerHTML += retornarTablaHTML(productoCarrito)
    });

}
cargarCarrito()

tbody.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("delete")) {
        let clave = target.parentElement.remove();
        eliminarElementoCarrito(clave);
    }
}
);

function eliminarElementoCarrito(clave) {
    if (typeof Storage !== "undefined") {
        let carrito = JSON.parse(localStorage.getItem("miCarrito")) || [];
        let indice = carrito.findIndex((producto) => producto.clave === clave);

        if (indice !== -1) {
            carrito.splice(indice, 1);
            localStorage.setItem("miCarrito", JSON.stringify(carrito));
        }

    }
}