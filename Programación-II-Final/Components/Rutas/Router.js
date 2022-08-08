import { Inicio } from "./Inicio.js";
import { Busqueda } from "./Busqueda.js";
import { Ventas } from "./Ventas.js";
import { Productos } from "./Productos.js";

export async function Router() {
  const d = document;
  const $main = d.getElementById("main");
  let { hash } = location;
  console.log(hash);
  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    Inicio();
  } else if (hash.includes("#/search")) {
    Busqueda();
  } else if (hash === "#/ventas") {
    Ventas();
  } else if (hash === "#/productos") {
    Productos();
  }
}
