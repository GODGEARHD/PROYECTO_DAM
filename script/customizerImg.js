function procesador() {
    var cpu = document.getElementById("cpu");
    var selectedCPU = cpu.options[cpu.selectedIndex];
    var refri = document.getElementById("refri");
    var selectedRefri = refri.options[refri.selectedIndex];
    var placa = document.getElementById("placa");
    var selectedPlaca = placa.options[placa.selectedIndex];
    if (selectedCPU.value == "Core i5-10600K") {
        document.getElementById("imgCPU").src = "../img/intel-core-i5-10600k.png";
        $("optgroup").siblings("#AMD").prop("disabled", true);
        $("optgroup").siblings("#Intel").prop("disabled", false);
        if (selectedRefri.id === "AMD") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
    }
    if (selectedCPU.value == "Core i7-11700F") {
        document.getElementById("imgCPU").src = "../img/intel-core-i7-11700f.png";
        $("optgroup").siblings("#AMD").prop("disabled", true);
        $("optgroup").siblings("#Intel").prop("disabled", false);
        if (selectedRefri.id === "AMD") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
    }
    if (selectedCPU.value == "Ryzen 5 3600") {
        document.getElementById("imgCPU").src = "../img/ryzen-5-3600.png";
        $("optgroup").siblings("#Intel").prop("disabled", true);
        $("optgroup").siblings("#AMD").prop("disabled", false);
        if (selectedRefri.id === "AMD") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
    }
    if (selectedCPU.value == "Ryzen 7 5800X") {
        document.getElementById("imgCPU").src = "../img/ryzen-7-5800x.png";
        $("optgroup").siblings("#Intel").prop("disabled", true);
        $("optgroup").siblings("#AMD").prop("disabled", false);
        if (selectedPlaca.id && selectedRefri.id === "Intel") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        /*if (selectedPlaca.id === "Intel") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }*/
    }
    if (selectedCPU.value == "-") {
        document.getElementById("imgCPU").src = "../img/transparent.png";
        $("optgroup").siblings("#Intel").prop("disabled", false);
        $("optgroup").siblings("#AMD").prop("disabled", false);
    }
}

function ventilador() {
    var refri = document.getElementById("refri");
    var selectedRefri = refri.options[refri.selectedIndex];
    if (selectedRefri.value == "Asus ROG Ryujin 360") {
        document.getElementById("imgRefri").src = "../img/intel-core-i5-10600k.png";
    }
    if (selectedRefri.value == "Cooler Master MasterLiquid ML240L RGB") {
        document.getElementById("imgRefri").src = "../img/intel-core-i7-11700f.png";
    }
    if (selectedRefri.value == "Nfortec Hydrus V2") {
        document.getElementById("imgRefri").src = "../img/ryzen-5-3600.png";
    }
    if (selectedRefri.value == "Arctic Liquid Freezer II") {
        document.getElementById("imgRefri").src = "../img/ryzen-7-5800x.png";
    }
    if (selectedRefri.value == "Nfortec Sculptor Black (Intel)") {
        document.getElementById("imgRefri").src = "../img/transparent.png";
    }
    if (selectedRefri.value == "HidiTec C12 ARGB PWM 120mm (Intel)") {
        document.getElementById("imgRefri").src = "../img/transparent.png";
    }
    if (selectedRefri.value == "Nfortec Sculptor Black (AMD)") {
        document.getElementById("imgRefri").src = "../img/transparent.png";
    }
    if (selectedRefri.value == "HidiTec C12 ARGB PWM 120mm (AMD)") {
        document.getElementById("imgRefri").src = "../img/transparent.png";
    }
    if (selectedRefri.value == "De Serie") {
        document.getElementById("imgRefri").src = "../img/transparent.png";
    }
    if (selectedRefri.value == "-") {
        document.getElementById("imgRefri").src = "../img/transparent.png";
    }
    console.log("works");
}

function memoria() {
    console.log("works");
}

function placaBase() {
    console.log("works");
}

function hdd1() {
    console.log("works");
}

function hdd2() {
    console.log("works");
}

function gabinete() {
    console.log("works");
}

function fuente() {
    console.log("works");
}

function grafica() {
    console.log("works");
}

function tarjeta() {
    console.log("works");
}

function leer() {
    console.log("works");
}

function cds() {
    console.log("works");
}

function pantalla() {
    console.log("works");
}

function teclas() {
    console.log("works");
}

function raton() {
    console.log("works");
}

function altavoz() {
    console.log("works");
}

function television() {
    console.log("works");
}

function antena() {
    console.log("works");
}

function sistema() {
    console.log("works");
}