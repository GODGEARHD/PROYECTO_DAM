var check = 0;
function checkIt() {
    var so = document.getElementById('so');
    var z = document.querySelector("#checkit");
    var selectedOption = so.options[so.selectedIndex];
    if ((selectedOption.value == "Windows 11 Home - 170.00€") || (selectedOption.value == "Windows 11 Pro - 280.00€")) {
        check = 1;
        z.checked = true;
    } else {
        if (check == 0) {
            check = check;
        } else {
            check = 0;
            z.checked = false;
        }
    }
}

function validar() {
    var w = document.forms["myForm"]["nombre"].value;
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["paypal"].value;
    if ((w == "") || (x == "") || (y == "")) {
        alert("Asegúrate de rellenar todos los campos necesarios (marcados con *)");
        return false;
    }
}