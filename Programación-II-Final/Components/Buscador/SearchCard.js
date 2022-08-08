export function SearchCard(props) {
  let { id, descripcion, cantidad, precioCompra, precioVenta, stockMinimo } =
    props;

  return `
    <ul>
        <li>Id del producto: ${id}</li>
        <li>Descripción: ${descripcion}</li>
        <li>Stock: ${cantidad}</li>
        <li>Precio compra: ${precioCompra}</li>
        <li>Precio venta: ${precioVenta}</li>
        <li>Stock mínimo: ${stockMinimo}</li>
    </ul>
    `;
}

{
  /* <article class="post-card">
<p>
<h2>Id del producto: ${id}</h2>
<h2>Descripción: ${descripcion}</h2>
<h2>Stock: ${cantidad}</h2>
<h2>Precio compra: ${precioCompra}</h2>
<h2>Precio venta: ${precioVenta}</h2>
<h2>Stock mínimo: ${stockMinimo}</h2>
</p>
</article> */
}
