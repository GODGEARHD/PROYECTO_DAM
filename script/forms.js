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

    var d = document.forms["myForm"]["cpu"].value;
    var e = document.forms["myForm"]["refri"].value;
    var f = document.forms["myForm"]["ram"].value;
    var g = document.forms["myForm"]["placa"].value;
    var h = document.forms["myForm"]["disco1"].value;
    var i = document.forms["myForm"]["disco2"].value;
    var j = document.forms["myForm"]["caja"].value;
    var k = document.forms["myForm"]["psu"].value;
    var l = document.forms["myForm"]["gpu"].value;
    var m = document.forms["myForm"]["audio"].value;
    var n = document.forms["myForm"]["lector"].value;
    var o = document.forms["myForm"]["dvd"].value;
    var p = document.forms["myForm"]["monitor"].value;
    var q = document.forms["myForm"]["teclado"].value;
    var r = document.forms["myForm"]["raton"].value;
    var s = document.forms["myForm"]["altavoces"].value;
    var t = document.forms["myForm"]["tv"].value;
    var u = document.forms["myForm"]["red"].value;
    var v = document.forms["myForm"]["montaje"].value;
    var z = document.forms["myForm"]["so"].value;

    if (d == "-" && e == "De Serie" && f == "-" && g == "-" && h == "-" &&
        i == "-" && j == "-" && k == "-" && l == "-" && m == "-" && n == "-" &&
        o == "-" && p == "-" && q == "-" && r == "-" && s == "-" && t == "-" &&
        u == "-" && v == "off" && z == "-") {
        alert("Lo sentimos, pero no puedes enviar un PCMR Custom vacío, " +
            "escoge al menos 1 producto y rellena todos los campos obligatorios (marcados con *)");
        document.getElementById("custom").action = "/customizer";
        return false;
    } else if (((w == "") || (x == "") || (y == "")) && ((a == "") || (b == "") || (c == ""))) {
        alert("Asegúrate de rellenar todos los campos obligatorios (marcados con *)");
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