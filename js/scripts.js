/*!
 * Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*let colores = 100;
let totalVendidos = 0;

while (colores >= 20) {
  totalVendidos = parseInt(prompt("Cuántos colores necesitas?"));

  if (totalVendidos > colores) {
    alert("No hay esa cantidad disponible");
  }

  colores = colores - totalVendidos;

  console.log(`Queda un total de ${colores}`);
}

var texto = prompt("Ingrese su nombre");
var resultado = texto;
var textoConcatenar = " ";

while (textoConcatenar != "ESC") {
  textoConcatenar = prompt("Ingrese un texto para concatenarle al inicial");
  resultado = resultado + " " + textoConcatenar;
  console.log(resultado);
}

var numero1 = parseInt(prompt("Ingrese un numero para repetir el mensaje", 0));

for (let i = 1; i <= numero1; i++);
{
  alert("hola");
}*/

alert("Bienvenido a Antonieta Handmade!");
let termino = false;
function solicitarNumero() {
  var cantidad = Number.parseInt(prompt("Cuántos desea comprar?"));
  return cantidad;
}

const cuadernos = [
  {
    tipo: "Cuaderno",
    modelo: "Summer",
    descripcion: "tapa dura, 120 hojas",
    precio: 450,
  },
  {
    tipo: "Cuaderno",
    modelo: "Spring",
    descripcion: "tapa dura, 120",
    precio: 450,
  },
  {
    tipo: "Cuaderno",
    modelo: "Smile",
    descripcion: "tapa dura, 120 hojas",
    precio: 450,
  },
];
const cuadernolas = [
  {
    tipo: "Cuadernola",
    modelo: "Candy",
    descripcion: "tapa dura, 100 hojas",
    precio: 650,
  },
  {
    tipo: "Cuadernola",
    modelo: "Rainbow",
    descripcion: "tapa dura, 100 hojas",
    precio: 650,
  },
];
const colores = [
  {
    tipo: "Colores",
    modelo: "Pastel",
    descripcion: "12 colores largos color pastel",
    precio: 190,
  },
  {
    tipo: "Colores",
    modelo: "Fluo",
    descripcion: "12 colores largos color pastel",
    precio: 200,
  },
];

let carritoCompra = [];
let comprando = true;

while (!termino) {
  let opcionarticulos = prompt(
    "Qué desea comprar, cuadernos, cuadernolas o colores?"
  );
  if (opcionarticulos === "colores") {
    let opcionesmodelo = "";
    for (let i = 0; i < colores.length; i++) {
      opcionesmodelo = opcionesmodelo + colores[i].modelo + ", ";
    }
    let eleccionusuario = prompt("Elija la opción: " + opcionesmodelo);
    let cantidadcolores = solicitarNumero();
    let opcionesprecio = 0;
    for (let i = 0; i < colores.length; i++) {
      if (eleccionusuario === colores[i].modelo) {
        opcionesprecio = colores[i].precio;
      }
    }
    let total = opcionesprecio * cantidadcolores;
    alert(`Gracias por tu compra! El total es ${total}`);
    termino = true;
  } else if (opcionarticulos === "cuadernos") {
    let opcionesmodelo = "";
    for (let i = 0; i < cuadernos.length; i++) {
      opcionesmodelo = opcionesmodelo + cuadernos[i].modelo + ", ";
    }
    let eleccionusuario = prompt("Elija la opción: " + opcionesmodelo);
    let cantidadcuadernos = solicitarNumero();
    let opcionesprecio = 0;
    for (let i = 0; i < cuadernos.length; i++) {
      if (eleccionusuario === cuadernos[i].modelo) {
        opcionesprecio = cuadernos[i].precio;
      }
    }
    let total = opcionesprecio * cantidadcuadernos;
    alert(`Gracias por tu compra! El total es ${total}`);
    termino = true;
  } else if (opcionarticulos === "cuadernolas") {
    let opcionesmodelo = "";
    for (let i = 0; i < cuadernolas.length; i++) {
      opcionesmodelo = opcionesmodelo + cuadernolas[i].modelo + ", ";
    }
    let eleccionusuario = prompt("Elija la opción: " + opcionesmodelo);
    let cantidadcuadernolas = solicitarNumero();
    let opcionesprecio = 0;
    for (let i = 0; i < cuadernolas.length; i++) {
      if (eleccionusuario === cuadernolas[i].modelo) {
        opcionesprecio = cuadernolas[i].precio;
      }
    }
    let total = opcionesprecio * cantidadcuadernolas;
    alert(`Gracias por tu compra! El total es ${total}`);
    termino = true;
  } else {
    alert("Ingrese la opción correcta (cuaderno, cuadernola o colores)");
  }
}
