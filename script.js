// DATOS MOSTRADOS POR CONSOLA
const formularioPedidos = document.getElementById("formularioPedidos")
const contenedorPedidos = document.getElementById("contenedorPedidos")

const pedidos = []

const renderizarPedidos = () => {
    contenedorPedidos.innerHTML = ""
    for(const pedido of pedidos) {
        if(`${pedido.juego}` === "counter strike 2") {
            contenedorPedidos.innerHTML += `
            <div class="card-juegos">
                <h2 class="titulo-juego">${pedido.juego}</h2>
                <img class="img-juego" src="./img/cs2_portada.jpg" alt="portada counter strike 2">
                <div class="botones">
                    <div class="btn-compra">$1000</div>
                    <div class="btn">Pedir</div>
                </div>
            </div>
            `
        }
        else if(`${pedido.juego}` === "mortal kombat 11") {
            contenedorPedidos.innerHTML += `
            <div class="card-juegos">
                <h2 class="titulo-juego">${pedido.juego}</h2>
                <img class="img-juego" src="./img/MK11_Portada.webp" alt="portada mortal kombat">
                <div class="botones">
                    <div class="btn-compra">$3000</div>
                    <div class="btn">Pedir</div>
                </div>
            </div>
            `
        }
        else if(`${pedido.juego}` === "resident evil 4 remake") {
            contenedorPedidos.innerHTML += `
            <div class="card-juegos">
                <h2 class="titulo-juego">${pedido.juego}</h2>
                <img class="img-juego" src="./img/re4_portada.jpg" alt="resident evil 4 remake">
                <div class="botones">
                    <div class="btn-compra">$13000</div>
                    <div class="btn">Pedir</div>
                </div>
            </div>
            `
        }
        else {
            contenedorPedidos.innerHTML += `
            <div class="card-juegos">
            <h2>No se seleccionó ningun videjuego</h2>
            `
        }

    }
    
}

formularioPedidos.addEventListener("submit", (event) => {
    event.preventDefault()
    pedidos.push({
        nombre: formularioPedidos.nombre.value,
        correo: formularioPedidos.correo.value,
        documento: formularioPedidos.documento.value,
        telefono: formularioPedidos.telefono.value,
        pais: formularioPedidos.pais.value,
        juego: formularioPedidos.juego.value
    })
    renderizarPedidos()
    formularioPedidos.reset()
})
