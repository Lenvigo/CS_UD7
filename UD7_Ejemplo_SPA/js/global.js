const base_url =
  // OJO MODIFICAR A LA CARPETA QUE TENGAMOS EN NUESTRO ENTORNO
  "http://localhost:3000/UD7_Ejemplo_SPA/controller/FrontController.php";
userId = null;
window.onload = onceLoaded;

function onceLoaded() {
  console.debug("window loaded");
  document.querySelector("#formLogin").onsubmit = loginJSON;

  getRoles();
}
