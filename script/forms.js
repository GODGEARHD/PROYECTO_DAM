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

function validateForm() {
    var w = document.forms["myForm"]["nombre"].value;
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["paypal"].value;
    if ((w == "") || (x == "") || (y == "")) {
        alert("Asegúrate de rellenar todos los campos necesarios (marcados con *)");
        document.getElementById("custom").action = "#";
        return false;
    } else {
        document.getElementById("custom").action = "./account/customize";
    }
}

function validateForm2() {
    var w = document.forms["myForm"]["nombre"].value;
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["telefono"].value;
    var z = document.forms["myForm"]["resumen"].value;
    if ((w == "") || (x == "") || (y == "") || (z == "")) {
        alert("Asegúrate de rellenar todos los campos");
        document.getElementById("feed").action = "#";
        return false;
    } else {
        document.getElementById("feed").action = "./account/feedback";
    }
}