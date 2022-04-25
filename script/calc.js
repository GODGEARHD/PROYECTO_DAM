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

    /*//Select de PlacaBase
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

    //Select de HDD1
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

    //Select de HDD2
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

    //Select de Gabinete
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

    //Select de Fuente
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

    //Select de Gráfica
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