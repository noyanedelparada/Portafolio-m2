let contadorCarrito = document.getElementById("contador-carrito");
let contador = 0;
let agregarCarrito = document.getElementById("agregar-carrito");

agregarCarrito.addEventListener("click", function (event) {
    contador++;
    contadorCarrito.innerText = contador;
    alert("Su producto se ha agregado exitosamente al carrito");
});
