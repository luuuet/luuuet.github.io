let carrito = [];
if (localStorage.getItem("carrito") !== null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

function mostrarCarrito(mensajeToastify) {
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

fetch("/datos/productos.json")
  .then((respuesta) => respuesta.json())
  .then((productos) => {
    let templateProducto = "";
    productos.forEach((producto) => {
      templateProducto += ` <div class="col mb-5 card-animation">
      <div class="card h-100">
          <!-- Sale badge-->
          <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
              New!
          </div>
          <!-- Product image-->
          <img class="card-img-top" src="${producto.imagen}" alt="..." />
          <!-- Product details-->
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">${producto.nombre}</h5>
                  <!-- Product price-->
                  $${producto.precio}
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                  <button id="${producto.identificador}" class="btn btn-outline-dark mt-auto" href="#">Agregar al
                      carrito</button>
              </div>
          </div>
      </div>
    </div>`;
    });

    const productoshtml = document.getElementById("productos");
    console.log(productoshtml, templateProducto);
    productoshtml.innerHTML = templateProducto;

    productos.forEach((producto) => {
      const boton = document.getElementById(producto.identificador);
      boton.addEventListener("click", () => {
        console.log("diste click");
        carrito.push(producto);
        mostrarCarrito();
        mostrarToastify(`Qué crack! Agregaste ${producto.nombre}`);
      });
    });
  });
