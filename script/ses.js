ses();

function ses() {
    if ((document.cookie.match(/^(.*;)?\s*PHPSESSID\s*=\s*[^;]+(.*)?$/)) != null) {
        document.getElementById("sesion1").innerHTML = "¡Bienvenid@ de vuelta!";
        document.getElementById("sesion1").href = "#";
        document.getElementById("sesion1").classList.add("disabled");
        document.getElementById("sesion2").innerHTML = "Cerrar Sesión";
        document.getElementById("sesion2").href = "/account/logout";
    }
}