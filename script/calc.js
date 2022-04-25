function calc() {
    var total = 0;
    var procesador = document.getElementById('cpu');
    var ventilador = document.getElementById('refri');
    var memoria = document.getElementById('ram');
    var placaBase = document.getElementById('placa');
    var hdd1 = document.getElementById('disco1');
    var hdd2 = document.getElementById('disco2');
    var gabinete = document.getElementById('caja');
    var fuente = document.getElementById('psu');
    var grafica = document.getElementById('gpu');
    var tarjeta = document.getElementById('audio');
    var leer = document.getElementById('lector');
    var cds = document.getElementById('dvd');
    var pantalla = document.getElementById('monitor');
    var teclas = document.getElementById('teclado');
    var raton = document.getElementById('raton');
    var altavoz = document.getElementById('altavoces');
    var television = document.getElementById('tv');
    var antena = document.getElementById('red');
    var montaje = document.querySelector("#checkit");
    var sistema = document.getElementById('so');
    

    //Select de Procesador
    var selectedProcesador = procesador.options[procesador.selectedIndex];
    if (selectedProcesador.value == "Core i5-10600K") {
        total+=268.36;
    } else if (selectedProcesador.value == "Core i7-11700F") {
        total+=346.49;
    } else if (selectedProcesador.value == "Ryzen 5 3600") {
        total+=310;
    } else if (selectedProcesador.value == "Ryzen 7 5800X") {
        total+=375;
    } else if (selectedProcesador.value == "-") {
        total+=0;
    }

    //Select de Ventilador
    var selectedRefri = ventilador.options[ventilador.selectedIndex];
    if (selectedRefri.value == "Asus ROG Ryujin 360") {
        total+=238.85;
    } else if (selectedRefri.value == "Cooler Master MasterLiquid ML240L RGB") {
        total+=65.91;
    } else if (selectedRefri.value == "Nfortec Hydrus V2") {
        total+=54.51;
    } else if (selectedRefri.value == "Arctic Liquid Freezer II") {
        total+=119.99;
    } else if (selectedRefri.value == "Nfortec Sculptor Black (Intel)") {
        total+=42.34;
    } else if (selectedRefri.value == "HidiTec C12 ARGB PWM 120mm (Intel)") {
        total+=31.73;
    } else if (selectedRefri.value == "Nfortec Sculptor Black (AMD)") {
        total+=42.34;
    } else if (selectedRefri.value == "HidiTec C12 ARGB PWM 120mm (AMD)") {
        total+=31.73;
    } else if ((selectedRefri.value == "De Serie") || (selectedRefri.value == "-")) {
        total+=0;
    }

    //Select de Memoria
    var selectedRAM = memoria.options[memoria.selectedIndex];
    if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 3600 MHz 16GB 2x8GB CL17") {
        total+=91.57;
    } else if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 2666 MHz 32GB 4x8GB CL16") {
        total+=160.87;
    } else if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 2666 MHz 16GB 2x8GB CL16") {
        total+=91.62;
    } else if (selectedRAM.value == "Kingston FURY Beast RGB DDR4 3733 MHz 8GB CL19") {
        total+=49.36;
    } else if (selectedRAM.value == "-") {
        total+=0;
    }

    //Select de PlacaBase
    var selectedPlaca = placaBase.options[placaBase.selectedIndex];
    if (selectedPlaca.value == "MSI B560M PRO-VDH") {
        total+=99.98;
    } else if (selectedPlaca.value == "MSI MPG B550 GAMING PLUS") {
        total+=139.89;
    } else if (selectedPlaca.value == "MSI H510M-A Pro") {
        total+=68.91;
    } else if (selectedPlaca.value == "MSI Z690 TORPEDO") {
        total+=285.60;
    } else if (selectedPlaca.value == "-") {
        total+=0;
    }

    //Select de HDD1
    var selectedHDD1 = hdd1.options[hdd1.selectedIndex];
    if (selectedHDD1.value == 'Seagate BarraCuda 3.5" 1TB SATA3') {
        total+=36.63;
    } else if (selectedHDD1.value == 'Seagate BarraCuda 3.5" 2TB SATA 3') {
        total+=47.48;
    } else if (selectedHDD1.value == 'Kioxia Exceria G2 Unidad SSD 1TB NVMe M.2 2280') {
        total+=106.20;
    } else if (selectedHDD1.value == 'Samsung 870 QVO SSD 2TB SATA3') {
        total+=188.81;
    } else if (selectedHDD1.value == "-") {
        total+=0;
    }

    //Select de HDD2
    var selectedHDD2 = hdd2.options[hdd2.selectedIndex];
    if (selectedHDD2.value == 'Seagate BarraCuda 3.5" 1TB SATA3') {
        total+=36.63;
    } else if (selectedHDD2.value == 'Seagate BarraCuda 3.5" 2TB SATA 3') {
        total+=47.48;
    } else if (selectedHDD2.value == 'Kioxia Exceria G2 Unidad SSD 1TB NVMe M.2 2280') {
        total+=106.20;
    } else if (selectedHDD2.value == 'Samsung 870 QVO SSD 2TB SATA3') {
        total+=188.81;
    } else if (selectedHDD2.value == "-") {
        total+=0;
    }

    //Select de Gabinete
    var selectedCaja = gabinete.options[gabinete.selectedIndex];
    if (selectedCaja.value == "Silverstone Raven RVZ03B-ARGB USB 3.0 Negra") {
        total+=90.99;
    } else if (selectedCaja.value == "Aerocool Atomic ARGB Cristal Templado USB 3.0 Negra") {
        total+=60.89;
    } else if (selectedCaja.value == "Forgeon Mithril ARGB Cristal Templado USB 3.2 Blanca") {
        total+=149.99;
    } else if (selectedCaja.value == "MSI MAG Vampiric 010M Cristal Templado USB 3.2 RGB Negra") {
        total+=56.41;
    } else if (selectedCaja.value == "-") {
        total+=0;
    }

    //Select de Fuente
    var selectedFuente = fuente.options[fuente.selectedIndex];
    if (selectedFuente.value == "Nfortec Sagitta RGB 650W 80 Plus Gold Full Modular") {
        total+=79.94;
    } else if (selectedFuente.value == "Corsair RM Series RM750 750W 80 Plus Gold Full Modular") {
        total+=89.90;
    } else if (selectedFuente.value == "Seasonic Focus+ 1000W 80 Plus Gold Modular") {
        total+=145.99;
    } else if (selectedFuente.value == "-") {
        total+=0;
    }

    /*//Select de Gráfica
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Tarjeta
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Leer
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de CDS
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Pantalla
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Teclas
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Raton
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Altavoz
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Television
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    //Select de Antena
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home - 145.00€") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro - 259.00€") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home - 170.00€") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro - 280.00€") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }*/

    //CheckBox de Montaje
    if (montaje.checked == true) {
        total+=25;
    } else if (montaje.checked == false) {
        total+=0;
    }

    //Select de Sistema
    var selectedSistema = sistema.options[sistema.selectedIndex];
    if (selectedSistema.value == "Windows 10 Home") {
        total+=145;
    } else if (selectedSistema.value == "Windows 10 Pro") {
        total+=259;
    } else if (selectedSistema.value == "Windows 11 Home") {
        total+=170;
    } else if (selectedSistema.value == "Windows 11 Pro") {
        total+=280;
    } else if (selectedSistema.value == "-") {
        total+=0;
    }

    var totalCentimos = total.toFixed(2);

    document.getElementById("totalMuestra").innerHTML = totalCentimos + "€";
    document.getElementById("totalOculto").value = totalCentimos;
}