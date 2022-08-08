export async function VerArticulos() {
  const $main = document.getElementById("main");
  $main.innerHTML = `
    <section class="crud">
        <article>
            <h2 class="crud-title">Artículos</h2>
            <form class="crud-form">
                <input type="text" name="descripcion" placeholder="Descripción" required>
                <br>
                <input type="text" name="cantidad" placeholder="Cantidad" required>
                <br>
                <input type="text" name="precioCompra" placeholder="Precio de compra" required>
                <br>
                <input type="text" name="precioVenta" placeholder="Precio de venta" required>
                <br>
                <input type="text" name="stockMinimo" placeholder="Stock mínimo" required>
                <br>
                <input type="text" name="categoriaId" placeholder="Categoría" required>
                <br>
                <input type="submit" value="Enviar">
                <input type="hidden" name="id">
            </form>
        </article>
        <article>
            <table class="crud-table">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio de compra</th>
                        <th>Precio de venta</th>
                        <th>Stock mínimo</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </article>
    </section>
    <template id="crud-template">
        <tr>
            <td class="description"></td>
            <td class="stock"></td>
            <td class="purchasePrice"></td>
            <td class="salePrice"></td>
            <td class="minimumStock"></td>
            <td class="category"></td>
            <td>
                <button class="edit">Editar</button>
                <button class="delete">Eliminar</button>
            </td>
        </tr>
    </template>`;
}
