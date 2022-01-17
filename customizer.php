$message = '';

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>PCMR World - 404 Not Found</title>
    <link rel="icon" href="img/favicon.png" type="image/gif" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css'>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel="stylesheet" href="./styles.css">

</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header animated fadeInRight slow">
                    <h1 class="display-3">PCMR <small>World</small></h1>
                </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Estás en:</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent" id="semi-transparente">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Más
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="news">Foro de Noticias</a>
                                    <a class="dropdown-item" href="non-existent">Contáctanos</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="about">Sobre Nosotros</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="store">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="sesion1" href="/account/login">Iniciar Sesión</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="sesion2" href="/account/signup">Registrarse</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar <i
                                    class="fa fa-search my-2 my-sm-0 btn-outline-success"></i></button>
                        </form>
                    </div>
                </nav>
                <hr>
                <div class="jumbotron" id="semi-transparente">
                    <h1 class="text-black display-3">
                        404 Página No Encontrada
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></script>
    <script>
        if ((document.cookie.match(/^(.*;)?\s*PHPSESSID\s*=\s*[^;]+(.*)?$/)) != null) {
            document.getElementById("sesion1").innerHTML = "¡Bienvenid@ de vuelta!";
            document.getElementById("sesion1").href = "#";
            document.getElementById("sesion1").classList.add("disabled");
            document.getElementById("sesion2").innerHTML = "Cerrar Sesión";
            document.getElementById("sesion2").href = "/account/logout";
        }
    </script>
</body>

</html>