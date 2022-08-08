import { ListarArticulos } from "../CRUD/ListarArticulos.js";

export function Productos() {
  const $main = document.getElementById("main");
  $main.innerHTML = `
    <h2>Sección de productos</h2>
    <h3>Elija la categoría:</h3>
    <button id=btnListarBebidas>Bebidas</button>
    <button id=btnListarComestibles>Comestibles</button>
    `;

  document
    .getElementById("btnListarBebidas")
    .addEventListener("click", () => ListarArticulos(1));
  document
    .getElementById("btnListarComestibles")
    .addEventListener("click", () => ListarArticulos(2));
}
