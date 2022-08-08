import { Menu } from "./Menu.js";
import { Titulo } from "./Titulo.js";

export function Header() {
  const $header = document.createElement("header");
  $header.id = "header";
  $header.classList.add("header");
  $header.appendChild(Titulo());
  $header.appendChild(Menu());

  return $header;
}
