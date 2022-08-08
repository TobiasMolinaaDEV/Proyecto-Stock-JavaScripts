import { Total } from "../Calculos/Total.js";
import { CargarSelects } from "../Vistas/CargarSelects.js";
import { MostrarBebidas } from "../Vistas/MostrarBebidas.js";
import { MostrarComestibles } from "../Vistas/MostrarComestibles.js";

export async function Ventas() {
  CargarSelects();

  const $main = document.getElementById("main");
  $main.innerHTML = `
    <h2>Sección de ventas</h2>
    
    <h3>Seleccione los productos</h3>
    <br>
    <label>Bebidas</label>
    <select id="bebidas">
        <option value = "0" selected disabled>Elija una bebida</option>
    </select>
    <label>Cantidad</label>
    <input type="number" id="cantidadBeb" class="cantidad"></input> 
    <button id="btnMostrarBebidas">Agregar</button>
    
    <label>Comestibles</label>
    <select id="comestibles">
        <option value = "0" selected disabled>Elija un comestible</option>
    </select>
    <label>Cantidad</label>
    <input type="number" id="cantidadCom" class="cantidad"></input> 
    <button id="btnMostrarComestibles">Agregar</button>

    <div id="mostrarBebidas"></div>
    <div id="mostrarComestibles"></div>

    <br><br>

    <div id="agregarBebidas"></div>

    <br>
    <br>

    <button id="btnTotal">Total</button>
    <br>
    <div id="mostrarTotal"></div>
    `;

    let listaCompra = [];


  document
    .getElementById("btnMostrarBebidas")
    .addEventListener("click", () => MostrarBebidas(listaCompra));
  document
    .getElementById("btnMostrarComestibles")
    .addEventListener("click", () => MostrarComestibles(listaCompra));
  document
    .getElementById("btnTotal")
    .addEventListener("click", () => Total(listaCompra));
}

