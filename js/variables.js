function recuperarLS() {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}
const carritoProductos = recuperarLS()

const productos = [{ imagen: "🍔", nombre: "Burger", id: 1234, importe: "$20" },
{ imagen: "🍕", nombre: "Pizza", id: 5678, importe: "$15" },
{ imagen: "🍟", nombre: "Fries", id: 9876, importe: "$10" },
{ imagen: "🌭", nombre: "HotDog", id: 5432, importe: "$5" },
{ imagen: "🧇", nombre: "Waffle", id: 8568, importe: "$4" },
{ imagen: "🥓", nombre: "Bacon", id: 4895, importe: "$6" }]


