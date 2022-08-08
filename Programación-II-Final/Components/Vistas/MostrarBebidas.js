export async function MostrarBebidas(listaCompra) {

  var opc = document.getElementById("bebidas");
  var prod = opc.options[opc.selectedIndex].text;

  let cantidadBeb = document.getElementById("cantidadBeb").value || "0";

  if (opc.selectedIndex === 0 || cantidadBeb === "0"){
    return;
  }

  let mostrar = await axios.get(
    `http://localhost:3000/articulos?descripcion=${prod}`
  );
  
  listaCompra.push({
    producto: mostrar.data[0],
    cantidad: cantidadBeb
  });
  for (let item of mostrar.data) {
    document.getElementById(
      "mostrarBebidas"
    ).innerHTML += `<br> ${item.descripcion}: $${item.precioVenta} x ${cantidadBeb} <br>`;
  }
}



