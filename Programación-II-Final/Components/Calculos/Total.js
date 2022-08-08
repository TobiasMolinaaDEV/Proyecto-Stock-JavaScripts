export async function Total(listaCompra) {
  let subTotal = 0;
  for (let item of listaCompra) {
    subTotal += item.producto.precioVenta * item.cantidad;
  }

  document.getElementById("mostrarTotal").innerHTML = `<br> El total a pagar es de: $${subTotal}`;
}
