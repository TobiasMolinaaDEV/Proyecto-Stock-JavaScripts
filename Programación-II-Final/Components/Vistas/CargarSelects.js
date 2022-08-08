export async function CargarSelects() {
  try {
    let beb = await axios.get(`http://localhost:3000/articulos?categoriaId=1`);
    let com = await axios.get(`http://localhost:3000/articulos?categoriaId=2`);
    let opt = "";
    for (let item of beb.data) {
      opt += `<option value=${item.id}>${item.descripcion}</option>`;
    }
    document.getElementById("bebidas").innerHTML += opt;
    opt = "";
    for (let item of com.data) {
      opt += `<option value=${item.id}>${item.descripcion}</option>`;
    }
    document.getElementById("comestibles").innerHTML += opt;
    opt = "";
  } catch (err) {
    console.log(err.request);
  }
}
