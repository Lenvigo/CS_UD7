
//const base_url = "http://localhost:3000/TAREA_7.1/UD7_Ejemplo_SPA/controller/FrontController.php";
const base_url = "http://localhost:3000/UD7ytarea/CS_UD7/TAREA_7.1/UD7_Ejemplo_SPA/controller/FrontController.php";

//1. Crea  una variable global de javascript userId y almacena en ella  el userId que se recibe cuando se ha logrado un login exitoso en la parte cliente. Si no, su valor debe ser null.
var userId = null;
window.onload = onceLoaded;


function onceLoaded() {

    console.debug("window loaded");
    document.querySelector('#formLogin').onsubmit = login;
    
    getRoles();
}

