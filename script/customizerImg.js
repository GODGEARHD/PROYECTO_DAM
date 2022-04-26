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
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "AMD") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
    }
    if (selectedCPU.value == "Core i7-11700F") {
        document.getElementById("imgCPU").src = "../img/intel-core-i7-11700f.png";
        $("optgroup").siblings("#AMD").prop("disabled", true);
        $("optgroup").siblings("#Intel").prop("disabled", false);
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "AMD") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
    }
    if (selectedCPU.value == "Ryzen 5 3600") {
        document.getElementById("imgCPU").src = "../img/ryzen-5-3600.png";
        $("optgroup").siblings("#Intel").prop("disabled", true);
        $("optgroup").siblings("#AMD").prop("disabled", false);
        if (selectedPlaca.id === "Intel") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "Intel") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
    }
    if (selectedCPU.value == "Ryzen 7 5800X") {
        document.getElementById("imgCPU").src = "../img/ryzen-7-5800x.png";
        $("optgroup").siblings("#Intel").prop("disabled", true);
        $("optgroup").siblings("#AMD").prop("disabled", false);
        if (selectedPlaca.id === "Intel") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "Intel") {
            refri.value = "-";
            document.getElementById("imgRefri").src = "../img/transparent.png";
        }
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
}

function memoria() {
    var ram = document.getElementById("ram");
    var selectedRAM = ram.options[ram.selectedIndex];
    if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 3600 MHz 16GB 2x8GB CL17") {
        document.getElementById("imgRAM").src = "../img/kingston-fury-beast-rgb-ddr4-3600-mhz-16gb-2x8gb-cl17.png";
        document.getElementById("imgRAM").style = "width: 120px;";
    }
    if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 2666 MHz 32GB 4x8GB CL16") {
        document.getElementById("imgRAM").src = "../img/kingston-fury-beast-ddr4-2666-mhz-32gb-4x8gb-cl16.png";
        document.getElementById("imgRAM").style = "width: 120px;";
    }
    if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 2666 MHz 16GB 2x8GB CL16") {
        document.getElementById("imgRAM").src = "../img/kingston-fury-beast-rgb-ddr4-2666-mhz-16gb-2x8gb-cl16.png";
        document.getElementById("imgRAM").style = "width: 120px;";
    }
    if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 3733 MHz 8GB CL19") {
        document.getElementById("imgRAM").src = "../img/kingston-fury-beast-rgb-ddr4-3733-mhz-8gb-cl19.png";
        document.getElementById("imgRAM").style = "width: 120px;";
    }
    if (selectedRAM.value == "-") {
        document.getElementById("imgRAM").src = "../img/transparent.png";
    }
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

function mouse() {
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