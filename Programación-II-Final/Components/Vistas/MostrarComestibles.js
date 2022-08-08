export async function MostrarComestibles(listaCompra) {
  
  var opc = document.getElementById("comestibles");
  var prod = opc.options[opc.selectedIndex].text;

  let cantidadCom = document.getElementById("cantidadCom").value || "0";

  if (opc.selectedIndex === 0 || cantidadCom === "0"){
    return;
  }

  let mostrar = await axios.get(
    `http://localhost:3000/articulos?descripcion=${prod}`
  );

  listaCompra.push({
    producto: mostrar.data[0],
    cantidad: cantidadCom
  });
  for (let item of mostrar.data) {
    document.getElementById(
      "mostrarComestibles"
    ).innerHTML += `<br>${item.descripcion}: $${item.precioVenta} x ${cantidadCom}<br>`;
  }
}
