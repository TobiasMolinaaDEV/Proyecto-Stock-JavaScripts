import { VerArticulos } from "./VerArticulos.js";

export async function ListarArticulos(categoriaId) {
  VerArticulos();

  const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

  try {
    let res = await fetch(
        `http://localhost:3000/articulos?categoriaId=${categoriaId}`
      ),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      $template.querySelector(".description").textContent = el.descripcion;
      $template.querySelector(".stock").textContent = el.cantidad;
      $template.querySelector(".purchasePrice").textContent = el.precioCompra;
      $template.querySelector(".salePrice").textContent = el.precioVenta;
      $template.querySelector(".minimumStock").textContent = el.stockMinimo;
      $template.querySelector(".category").textContent = el.categoriaId;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.description = el.descripcion;
      $template.querySelector(".edit").dataset.stock = el.cantidad;
      $template.querySelector(".edit").dataset.purchasePrice = el.precioCompra;
      $template.querySelector(".edit").dataset.salePrice = el.precioVenta;
      $template.querySelector(".edit").dataset.minimumStock = el.stockMinimo;
      $template.querySelector(".edit").dataset.category = el.categoriaId;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error${err.status}:${message}</b></p>`
    );
  }

  d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
      e.preventDefault();

      if (!e.target.id.value) {
        //Create - POST
        try {
          let options = {
              method: "POST",
              headers: {
                "Content-type": "application/json;charset=utf-8",
              },
              body: JSON.stringify({
                descripcion: e.target.descripcion.value,
                cantidad: e.target.cantidad.value,
                precioCompra: e.target.precioCompra.value,
                precioVenta: e.target.precioVenta.value,
                stockMinimo: e.target.stockMinimo.value,
                categoriaId: e.target.categoriaId.value,
              }),
            },
            res = await fetch(
              `http://localhost:3000/articulos?categoriaId=${categoriaId}`,
              options
            ),
            json = await res.json();

          if (!res.ok) throw { status: res.status, statusText: res.statusText };
          location.reload(); //para recargar la db
        } catch (err) {
          let message = err.statusText || "Ocurrió un error";
          $form.insertAdjacentHTML(
            "afterend",
            `<p><b>Error${err.status}:${message}</b></p>`
          );
        }
      } else {
        //Update - PUT
        try {
          let options = {
              method: "PUT",
              headers: {
                "Content-type": "application/json;charset=utf-8",
              },
              body: JSON.stringify({
                descripcion: e.target.descripcion.value,
                cantidad: e.target.cantidad.value,
                precioCompra: e.target.precioCompra.value,
                precioVenta: e.target.precioVenta.value,
                stockMinimo: e.target.stockMinimo.value,
                categoriaId: e.target.categoriaId.value,
              }),
            },
            res = await fetch(
              `http://localhost:3000/articulos/${e.target.id.value}`,
              options
            ),
            //res= await fetch(`http://localhost:3000/articulos?categoriaId=1/${e.target.id.value}`,options),
            json = await res.json();

          if (!res.ok) throw { status: res.status, statusText: res.statusText };

          location.reload();
        } catch (err) {
          let message = err.statusText || "Ocurrió un error";
          $form.insertAdjacentHTML(
            "afterend",
            `<p><b>Error${err.status}:${message}</b></p>`
          );
        }
      }
    }
  });

  d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
      $title.textContent = "Editar artículo";
      $form.descripcion.value = e.target.dataset.description;
      $form.cantidad.value = e.target.dataset.stock;
      $form.precioCompra.value = e.target.dataset.purchasePrice;
      $form.precioVenta.value = e.target.dataset.salePrice;
      $form.stockMinimo.value = e.target.dataset.minimumStock;
      $form.categoriaId.value = e.target.dataset.category;
      $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
      let isDelete = confirm(
        `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
      );

      if (isDelete) {
        //Delete - DELETE
        try {
          let options = {
              method: "DELETE",
              headers: {
                "Content-type": "application/json; charset=utf-8",
              },
            },
            res = await fetch(
              `http://localhost:3000/articulos/${e.target.dataset.id}`,
              options
            ),
            //res = await fetch(`http://localhost:3000/articulos?categoriaId=1/${e.target.dataset.id}`,options),
            json = await res.json();

          if (!res.ok) throw { status: res.status, statusText: res.statusText };

          location.reload();
        } catch (err) {
          let message = err.statusText || "Ocurrió un error";
          $form.insertAdjacentHTML(
            "afterend",
            `<p><b>Error${err.status}:${message}</b></p>`
          );
        }
      }
    }
  });
}
