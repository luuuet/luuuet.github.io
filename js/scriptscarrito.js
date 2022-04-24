let carrito = [];
if (localStorage.getItem("carrito") !== null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}
function mostrarNumerocarrito() {
  const carritoNumerohtml = document.getElementById("carritoNumero");
  carritoNumerohtml.innerHTML = carrito.length;
}

function mostrarCarrito() {
  console.log(carrito);
  let total = 0;

  const carritohtml = document.getElementById("tablaCarrito");
  let template = "";
  carrito.forEach((item) => {
    template += `
    <tr> 
    <th scope="row">${item.nombre}</th>
                            <td>1</td>
                            <td>${item.precio}</td>
    </tr>
    `;
    total = total + item.precio;
  });
  carritohtml.innerHTML = template;
  console.log(`El total es $${total}`);
  const totalhtml = document.getElementById("totalCarrito");
  totalhtml.innerHTML = `El total es $${total}`;

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarToastify(mensajeToastify) {
  Toastify({
    text: mensajeToastify,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

mostrarCarrito();
mostrarNumerocarrito();

const boton = document.getElementById("pagarBoton");
boton.addEventListener("click", () => {
  mostrarToastify("Gracias por tu compra!");
  localStorage.clear();
  carrito = [];
  mostrarCarrito();
});
