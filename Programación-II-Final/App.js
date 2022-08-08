import { Header } from "./Components/Vistas/Header.js";
import { Main } from "./Components/Vistas/Main.js";
import { Router } from "./Components/Rutas/Router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  Router();
}
