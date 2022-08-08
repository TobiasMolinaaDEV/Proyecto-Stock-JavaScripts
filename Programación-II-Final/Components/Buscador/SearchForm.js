import { Ajax } from "../../Helpers/Ajax.js";
import { SearchCard } from "./SearchCard.js";

export function SearchForm(apiURL, placeholder) {
  const d = document;
  const $form = document.createElement("form");
  const $input = document.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = placeholder;
  $input.autocomplete = "off";

  $form.appendChild($input);

  $input.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
  });

  $form.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    location.hash = `#/search?search=${e.target.search.value}`;
    let query = $input.value;
    if (!query) {
      return false;
    }
    Ajax({
      url: `${apiURL}${query}`,
      cbSuccess: (articulos) => {
        console.log(articulos);
        let html = "";
        if (articulos.length === 0) {
          html = `
                    <p class="error">
                    No existen resultados de búsqueda para el término <mark>${query}</mark>
                    </p>
                    `;
        } else {
          articulos.forEach((artic) => (html += SearchCard(artic)));
        }
        const $main = d.getElementById("main");
        $main.innerHTML = html;
      },
    });
  });

  return $form;
}
