var check = 0;
function checkIt() {
    var so = document.getElementById('so');
    var z = document.querySelector("#checkit");
    var selectedOption = so.options[so.selectedIndex];
    if ((selectedOption.value == "Windows 11 Home") || (selectedOption.value == "Windows 11 Pro")) {
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
    var a = document.forms["myForm"]["nombre2"].value;
    var b = document.forms["myForm"]["email2"].value;
    var c = document.forms["myForm"]["paypal2"].value;
    if (((w == "") || (x == "") || (y == "")) && ((a == "") || (b == "") || (c == ""))) {
        alert("Asegúrate de rellenar todos los campos necesarios (marcados con *)");
        document.getElementById("custom").action = "/customizer";
        return false;
    } else {
        return true;
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
        document.getElementById("feed").action = "/account/feedback";
    }
}

//function 