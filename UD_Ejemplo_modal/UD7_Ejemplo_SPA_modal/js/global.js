//http://localhost:3000/UD_Ejemplo_modal/UD7_Ejemplo_SPA_modal/controller/FrontController.php
const base_url = "http://localhost:3000/UD_Ejemplo_modal/UD7_Ejemplo_SPA_modal/controller/FrontController.php";

window.onload = onceLoaded;


function onceLoaded() {

    console.debug("window loaded");
    document.querySelector('#formLogin').onsubmit = confirmLoginJSON;
    
    getRoles();
}

