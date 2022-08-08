export async function Ajax(props) {
  let { url, cbSuccess, method } = props;

  await fetch(url, { method: method || "GET" })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error al acceder a la API";

      document.getElementById(
        "main"
      ).innerHTML = `<div class="error"> <p>Error ${err.status}: ${message}</p>
        </div>`;
    });
}
