
const base_url = "http://localhost:3000/controller/FrontController.php";
userId = null;
window.onload = onceLoaded;


function onceLoaded() {

    console.debug("window loaded");
    document.querySelector('#formLogin').onsubmit = login;
    
    getRoles();
}

