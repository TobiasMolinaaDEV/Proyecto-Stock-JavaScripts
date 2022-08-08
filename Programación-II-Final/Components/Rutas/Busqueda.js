import { SearchForm } from "../Buscador/SearchForm.js";
import Api from "../../Helpers/Api.js";

export function Busqueda() {
  const $main = document.getElementById("main");

  $main.innerHTML = `<h2>Buscador</h2>`;

  $main.appendChild(
    SearchForm(Api.SEARCHDESCRIPCION, "Buscar por descripción")
  );
  $main.appendChild(SearchForm(Api.SEARCHCATEGORIA, "Buscar por categoría"));
}
