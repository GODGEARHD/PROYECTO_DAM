function procesador() {
    var cpu = document.getElementById("cpu");
    var selectedCPU = cpu.options[cpu.selectedIndex];
    var refri = document.getElementById("refri");
    var selectedRefri = refri.options[refri.selectedIndex];
    var placa = document.getElementById("placa");
    var selectedPlaca = placa.options[placa.selectedIndex];
    if (selectedCPU.value == "Core i5-10600K") {
        document.getElementById("imgCPU").src = "../img/intel-core-i5-10600k.png";
        document.getElementById("imgCPU").style = "width: 120px;";
        $("optgroup").siblings("#AMD").prop("disabled", true);
        $("optgroup").siblings("#Intel").prop("disabled", false);
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "AMD") {
            refri.value = "De Serie";
            //document.getElementById("imgRefri").src = "../img/transparent.png";
            ventilador();
        }
    }
    if (selectedCPU.value == "Core i7-11700F") {
        document.getElementById("imgCPU").src = "../img/intel-core-i7-11700f.png";
        document.getElementById("imgCPU").style = "width: 120px;";
        $("optgroup").siblings("#AMD").prop("disabled", true);
        $("optgroup").siblings("#Intel").prop("disabled", false);
        if (selectedPlaca.id === "AMD") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "AMD") {
            refri.value = "De Serie";
            //document.getElementById("imgRefri").src = "../img/transparent.png";
            ventilador();
        }
    }
    if (selectedCPU.value == "Ryzen 5 3600") {
        document.getElementById("imgCPU").src = "../img/ryzen-5-3600.png";
        document.getElementById("imgCPU").style = "width: 120px;";
        $("optgroup").siblings("#Intel").prop("disabled", true);
        $("optgroup").siblings("#AMD").prop("disabled", false);
        if (selectedPlaca.id === "Intel") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "Intel") {
            refri.value = "De Serie";
            //document.getElementById("imgRefri").src = "../img/transparent.png";
            ventilador();
        }
    }
    if (selectedCPU.value == "Ryzen 7 5800X") {
        document.getElementById("imgCPU").src = "../img/ryzen-7-5800x.png";
        document.getElementById("imgCPU").style = "width: 120px;";
        $("optgroup").siblings("#Intel").prop("disabled", true);
        $("optgroup").siblings("#AMD").prop("disabled", false);
        if (selectedPlaca.id === "Intel") {
            placa.value = "-";
            document.getElementById("imgPlaca").src = "../img/transparent.png";
        }
        if (selectedRefri.id === "Intel") {
            refri.value = "De Serie";
            //document.getElementById("imgRefri").src = "../img/transparent.png";
            ventilador();
        }
    }
    if (selectedCPU.value == "-") {
        document.getElementById("imgCPU").src = "../img/transparent.png";
        $("optgroup").siblings("#Intel").prop("disabled", false);
        $("optgroup").siblings("#AMD").prop("disabled", false);
    }
    ventilador();
}

function ventilador() {
    var cpu = document.getElementById("cpu");
    var selectedCPU = cpu.options[cpu.selectedIndex];
    var refri = document.getElementById("refri");
    var selectedRefri = refri.options[refri.selectedIndex];
    if (selectedRefri.value == "Asus ROG Ryujin 360") {
        document.getElementById("imgRefri").src = "../img/asus-rog-ryujin-360-kit-refrigeracion-liquida.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "Cooler Master MasterLiquid ML240L RGB") {
        document.getElementById("imgRefri").src = "../img/cooler-master-masterliquid-ml240l-rgb.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "Nfortec Hydrus V2") {
        document.getElementById("imgRefri").src = "../img/nfortec-hydrus-v2-120-red-kit-de-refrigeracion-liquida.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "Arctic Liquid Freezer II") {
        document.getElementById("imgRefri").src = "../img/arctic-liquid-freezer-ii-360-kit-de-refrigeracion-liquida.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "Nfortec Sculptor Black (Intel)") {
        document.getElementById("imgRefri").src = "../img/nfortec-sculptor-black-disipador-de-alto-rendimiento-negro.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "HidiTec C12 ARGB PWM 120mm (Intel)") {
        document.getElementById("imgRefri").src = "../img/hiditec-c12-argb-pwm-ventilador-cpu-120mm.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "Nfortec Sculptor Black (AMD)") {
        document.getElementById("imgRefri").src = "../img/nfortec-sculptor-black-disipador-de-alto-rendimiento-negro.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "HidiTec C12 ARGB PWM 120mm (AMD)") {
        document.getElementById("imgRefri").src = "../img/hiditec-c12-argb-pwm-ventilador-cpu-120mm.png";
        document.getElementById("imgRefri").style = "width: 120px;";
    }
    if (selectedRefri.value == "De Serie") {
        if (selectedCPU.id == "Intel") {
            document.getElementById("imgRefri").src = "../img/intel-serial-ref.png";
            document.getElementById("imgRefri").style = "width: 120px;";
        }
        if (selectedCPU.id == "AMD-low") {
            document.getElementById("imgRefri").src = "../img/amd-serial-ref-low.png";
            document.getElementById("imgRefri").style = "width: 120px;";
        }
        if (selectedCPU.id == "AMD-high") {
            document.getElementById("imgRefri").src = "../img/amd-serial-ref-high.png";
            document.getElementById("imgRefri").style = "width: 120px;";
        }
        if (selectedCPU.value == "-") {
            document.getElementById("imgRefri").src = "../img/seleccion.png";
            document.getElementById("imgRefri").style = "width: 120px;";
        }
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
    var placa = document.getElementById("placa");
    var selectedPlaca = placa.options[placa.selectedIndex];
    if (selectedPlaca.value == "MSI B560M PRO-VDH") {
        document.getElementById("imgPlaca").src = "../img/msi-b560m-pro-vdh.png";
        document.getElementById("imgPlaca").style = "width: 120px;";
    }
    if (selectedPlaca.value == "Gigabyte X570S UD") {
        document.getElementById("imgPlaca").src = "../img/gigabyte-x570s-ud.png";
        document.getElementById("imgPlaca").style = "width: 120px;";
    }
    if (selectedPlaca.value == "MSI H510M-A Pro") {
        document.getElementById("imgPlaca").src = "../img/msi-h510m-a-pro.png";
        document.getElementById("imgPlaca").style = "width: 120px;";
    }
    if (selectedPlaca.value == "MSI Z690 TORPEDO") {
        document.getElementById("imgPlaca").src = "../img/msi-z690-torpedo.png";
        document.getElementById("imgPlaca").style = "width: 120px;";
    }
    if (selectedPlaca.value == "-") {
        document.getElementById("imgPlaca").src = "../img/transparent.png";
    }
    console.log("works");
}

function hdd1() {
    var disco1 = document.getElementById("disco1");
    var selectedDisco1 = disco1.options[disco1.selectedIndex];
    if (selectedDisco1.value == 'Seagate BarraCuda 3.5" 1TB SATA3') {
        document.getElementById("imgHDD1").src = "../img/seagate-barracuda-35-1tb-sata3.png";
        document.getElementById("imgHDD1").style = "width: 120px;";
    }
    if (selectedDisco1.value == 'Seagate BarraCuda 3.5" 2TB SATA 3') {
        document.getElementById("imgHDD1").src = "../img/seagate-barracuda-35-2tb-sata-3.png";
        document.getElementById("imgHDD1").style = "width: 120px;";
    }
    if (selectedDisco1.value == 'Kioxia Exceria G2 Unidad SSD 1TB NVMe M.2 2280') {
        document.getElementById("imgHDD1").src = "../img/kioxia-exceria-g2-unidad-ssd-1tb-nvme-m2-2280.png";
        document.getElementById("imgHDD1").style = "width: 120px;";
    }
    if (selectedDisco1.value == 'Samsung 870 QVO SSD 2TB SATA3') {
        document.getElementById("imgHDD1").src = "../img/samsung-870-qvo-ssd-2tb-sata3.png";
        document.getElementById("imgHDD1").style = "width: 120px;";
    }
    if (selectedDisco1.value == "-") {
        document.getElementById("imgHDD1").src = "../img/transparent.png";
    }
    console.log("works");
}

function hdd2() {
    var disco2 = document.getElementById("disco2");
    var selectedDisco2 = disco2.options[disco2.selectedIndex];
    if (selectedDisco2.value == 'Seagate BarraCuda 3.5" 1TB SATA3') {
        document.getElementById("imgHDD2").src = "../img/seagate-barracuda-35-1tb-sata3.png";
        document.getElementById("imgHDD2").style = "width: 120px;";
    }
    if (selectedDisco2.value == 'Seagate BarraCuda 3.5" 2TB SATA 3') {
        document.getElementById("imgHDD2").src = "../img/seagate-barracuda-35-2tb-sata-3.png";
        document.getElementById("imgHDD2").style = "width: 120px;";
    }
    if (selectedDisco2.value == 'Kioxia Exceria G2 Unidad SSD 1TB NVMe M.2 2280') {
        document.getElementById("imgHDD2").src = "../img/kioxia-exceria-g2-unidad-ssd-1tb-nvme-m2-2280.png";
        document.getElementById("imgHDD2").style = "width: 120px;";
    }
    if (selectedDisco2.value == 'Samsung 870 QVO SSD 2TB SATA3') {
        document.getElementById("imgHDD2").src = "../img/samsung-870-qvo-ssd-2tb-sata3.png";
        document.getElementById("imgHDD2").style = "width: 120px;";
    }
    if (selectedDisco2.value == "-") {
        document.getElementById("imgHDD2").src = "../img/transparent.png";
    }
    console.log("works");
}

function gabinete() {
    var caja = document.getElementById("caja");
    var selectedCaja = caja.options[caja.selectedIndex];
    if (selectedCaja.value == 'Silverstone Raven RVZ03B-ARGB USB 3.0 Negra') {
        document.getElementById("imgCaja").src = "../img/silverstone-raven-rvz03b-argb-usb-30-negra.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == 'Aerocool Atomic ARGB Cristal Templado USB 3.0 Negra') {
        document.getElementById("imgCaja").src = "../img/aerocool-atomic-argb-cristal-templado-usb-30-negra.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == 'Forgeon Mithril ARGB Cristal Templado USB 3.2 Blanca') {
        document.getElementById("imgCaja").src = "../img/forgeon-mithril-argb-cristal-templado-usb-32-blanca.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == 'MSI MAG Vampiric 010M Cristal Templado USB 3.2 RGB Negra') {
        document.getElementById("imgCaja").src = "../img/msi-mag-vampiric-010m-cristal-templado-usb-32-rgb-negra.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == "-") {
        document.getElementById("imgCaja").src = "../img/transparent.png";
    }
    console.log("works");
}

function fuente() {
    var caja = document.getElementById("caja");
    var selectedCaja = caja.options[caja.selectedIndex];
    if (selectedCaja.value == 'Silverstone Raven RVZ03B-ARGB USB 3.0 Negra') {
        document.getElementById("imgCaja").src = "../img/silverstone-raven-rvz03b-argb-usb-30-negra.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == 'Aerocool Atomic ARGB Cristal Templado USB 3.0 Negra') {
        document.getElementById("imgCaja").src = "../img/aerocool-atomic-argb-cristal-templado-usb-30-negra.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == 'Forgeon Mithril ARGB Cristal Templado USB 3.2 Blanca') {
        document.getElementById("imgCaja").src = "../img/forgeon-mithril-argb-cristal-templado-usb-32-blanca.png";
        document.getElementById("imgCaja").style = "width: 120px;";
    }
    if (selectedCaja.value == "-") {
        document.getElementById("imgCaja").src = "../img/transparent.png";
    }
    console.log("works");
}

function grafica() {
    var gpu = document.getElementById("gpu");
    var selectedGPU = gpu.options[gpu.selectedIndex];
    if (selectedGPU.value == 'MAXSUN AMD Radeon RX 550 4 GB GDDR5') {
        document.getElementById("imgGPU").src = "../img/silverstone-raven-rvz03b-argb-usb-30-negra.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'XFX Radeon RX 5700 XT THICC III Ultra 8GB GDDR6') {
        document.getElementById("imgGPU").src = "../img/aerocool-atomic-argb-cristal-templado-usb-30-negra.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'ASUS ROG Strix AMD Radeon RX 6700 XT OC Edition') {
        document.getElementById("imgGPU").src = "../img/forgeon-mithril-argb-cristal-templado-usb-32-blanca.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'MSI Radeon RX 6800 XT GAMING Z TRIO 16GB GDDR6') {
        document.getElementById("imgGPU").src = "../img/msi-mag-vampiric-010m-cristal-templado-usb-32-rgb-negra.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'MSI GeForce GTX 1650 SUPER GAMING X 4GB GDDR6') {
        document.getElementById("imgGPU").src = "../img/silverstone-raven-rvz03b-argb-usb-30-negra.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'MSI GeForce RTX 2060 VENTUS GP OC 6GB GDDR6') {
        document.getElementById("imgGPU").src = "../img/aerocool-atomic-argb-cristal-templado-usb-30-negra.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'Gigabyte GeForce RTX 3060 Ti VISION OC 8GB GDDR6 Rev 2.0') {
        document.getElementById("imgGPU").src = "../img/forgeon-mithril-argb-cristal-templado-usb-32-blanca.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == 'Gigabyte AORUS GeForce RTX 3070 MASTER 8GB GDDR6') {
        document.getElementById("imgGPU").src = "../img/msi-mag-vampiric-010m-cristal-templado-usb-32-rgb-negra.png";
        document.getElementById("imgGPU").style = "width: 120px;";
    }
    if (selectedGPU.value == "-") {
        document.getElementById("imgGPU").src = "../img/transparent.png";
    }
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
    var teclado = document.getElementById("teclado");
    var selectedTeclado = teclado.options[teclado.selectedIndex];
    if (selectedTeclado.value == 'Logitech 920G Pro') {
        document.getElementById("imgTeclado").src = "../img/logitech-920-g-pro.png";
        document.getElementById("imgTeclado").style = "width: 120px;";
    }
    if (selectedTeclado.value == 'Redragon K552') {
        document.getElementById("imgTeclado").src = "../img/redragon-k552.png";
        document.getElementById("imgTeclado").style = "width: 120px;";
    }
    if (selectedTeclado.value == 'XTRFY K4 TKL RGB') {
        document.getElementById("imgTeclado").src = "../img/xtrfy-k4-tkl-rgb.png";
        document.getElementById("imgTeclado").style = "width: 120px;";
    }
    if (selectedTeclado.value == "-") {
        document.getElementById("imgTeclado").src = "../img/transparent.png";
    }
    console.log("works");
}

function mouse() {
    var raton = document.getElementById("raton");
    var selectedMouse = raton.options[raton.selectedIndex];
    if (selectedMouse.value == 'Razer Deathadder Essential 2021') {
        document.getElementById("imgRaton").src = "../img/razer_deathadder_essential_2021.png";
        document.getElementById("imgRaton").style = "width: 120px;";
    }
    if (selectedMouse.value == 'Razer Deathadder Essential White Edition') {
        document.getElementById("imgRaton").src = "../img/razer_deathadder_essential_white.png";
        document.getElementById("imgRaton").style = "width: 120px;";
    }
    if (selectedMouse.value == 'Logitech G502 Hero KDA Edition') {
        document.getElementById("imgRaton").src = "../img/logitech_g502_hero_kda.png";
        document.getElementById("imgRaton").style = "width: 120px;";
    }
    if (selectedMouse.value == "-") {
        document.getElementById("imgRaton").src = "../img/transparent.png";
    }
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
    var so = document.getElementById("so");
    var selectedSistema = so.options[so.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home") {
        document.getElementById("imgSO").src = "../img/windows-10-home.png";
        document.getElementById("imgSO").style = "width: 120px;";
    }
    if (selectedSistema.value == "Windows 10 Pro") {
        document.getElementById("imgSO").src = "../img/windows-10-pro.png";
        document.getElementById("imgSO").style = "width: 120px;";
    }
    if (selectedSistema.value == "Windows 11 Home") {
        document.getElementById("imgSO").src = "../img/windows-11-home.png";
        document.getElementById("imgSO").style = "width: 120px;";
    }
    if (selectedSistema.value == "Windows 11 Pro") {
        document.getElementById("imgSO").src = "../img/windows-11-pro.png";
        document.getElementById("imgSO").style = "width: 120px;";
    }
    if (selectedSistema.value == "-") {
        document.getElementById("imgSO").src = "../img/transparent.png";
    }
    console.log("works");
}