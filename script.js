// DATOS MOSTRADOS POR CONSOLA
const formularioPedidos = document.getElementById("formularioPedidos")

formularioPedidos.addEventListener("submit", (event) => {
    // event.preventDefault()
    console.log(formularioPedidos.nombre.value)
    console.log(formularioPedidos.correo.value)
    console.log(formularioPedidos.documento.value)
    console.log(formularioPedidos.pedido.value)
})
