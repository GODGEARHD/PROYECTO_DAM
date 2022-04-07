function calc() {
    var total = 0;
    var procesador = document.getElementsByName('cpu');
    var ventilador = document.getElementsByName('refri');
    var memoria = document.getElementsByName('ram');
    var placaBase = document.getElementsByName('placa');
    var hdd1 = document.getElementsByName('disco1');
    var hdd2 = document.getElementsByName('disco2');
    var gabinete = document.getElementsByName('caja');
    var fuente = document.getElementsByName('psu');
    var grafica = document.getElementsByName('gpu');
    var tarjeta = document.getElementsByName('audio');
    var leer = document.getElementsByName('lector');
    var cds = document.getElementsByName('dvd');
    var pantalla = document.getElementsByName('monitor');
    var teclas = document.getElementsByName('teclado');
    var raton = document.getElementsByName('raton');
    var altavoz = document.getElementsByName('altavoces');
    var television = document.getElementsByName('tv');
    var antena = document.getElementsByName('red');
    var montaje = document.querySelector("#checkit");
    var sistema = document.getElementsByName('so');
    

    /*//Select de Procesador
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

    //Select de Ventilador
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

    //Select de Memoria
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

    //Select de PlacaBase
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

    document.getElementById("totalMuestra").innerHTML =total + "€";
    document.getElementById("totalOculto").value =total;
}