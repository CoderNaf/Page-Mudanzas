<?php
    
require ("email.php");

function validate($name, $email, $subject, $message) {
    return !empty($name) && !empty($email) && !empty($subject) && !empty($message);
}



$status="";

if(isset($_POST["form"])){
    
    if(validate($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])){

        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];

        $body = "$name <$email> te ha enviado un nuevo mensaje: <br><br> $message";

        sendMail($subject, $body, $email, $name, true);

        $status = "success";

        header("Location: ../index.html");
        exit();
    }else{
        $status = "danger";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="form.css">
    <title>Formulario de contacto</title>
    <link rel="icon" href="../assets/logo/logo2.gif" type="image/x-icon">
    <link rel="stylesheet" href="./css/form.css">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/tablets.css" media="(min-width:760px)">
    <link rel="stylesheet" href="../css/deckstop.css" media="(min-width:1024px)">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

    
<div class="mobile-menu">
        <section class="menu-mobile mobile">
            <section class="menu-mobile--content">
                <nav>
                    <ul>
                        <li class="homeMobile"><span></span>inicio</li>
                        <li class="aboutUsMobile"><span></span>sobre nosotros</li>
                        <li class="portfolioMobile"><span></span>portafolio</li>
                        <li class="testimonialsMobile"><span></span>testimonios</li>
                    </ul>
                </nav>
            </section>
            <span class="menu-mobile-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: #fff;"><path d="M21.842 6.218a1.977 1.977 0 0 0-.424-.628A1.99 1.99 0 0 0 20 5H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6c.191.228.472.36.769.36h12a1.977 1.977 0 0 0 1.41-.582A1.99 1.99 0 0 0 22 17V7c0-.266-.052-.525-.158-.782zm-4.135 8.075-1.414 1.414L14 13.414l-2.293 2.293-1.414-1.414L12.586 12l-2.293-2.293 1.414-1.414L14 10.586l2.293-2.293 1.414 1.414L15.414 12l2.293 2.293z"></path></svg></span>
        </section>
    </div> 
    
    <div class="header-one">
            <div>
                <p>(+57) 3115386102</p>
            </div>
            <div>
                <p>Info@Continentaldetrasteos.Com</p>
            </div>
            <div>
                <p>Bogotá / Colombia</p>
            </div>
        </div>
        <header>

        <div class="header-two">
            <img src="../assets/logo/logoweb.gif" alt="" class="logo">
            <div class="container-menu"></div>
            <nav class="nav-descktop">
                <ul>
                    <li class="home">inicio</li>
                    <li id="about">sobre nosotros</li>
                    <li id="portfolio">portafolio</li>
                    <li class="testimonials">testimonios</li>
                </ul>
            </nav>
            <span id="icon-menu"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: #fff;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></span>
        </div>
    </header>
    <?php if($status == "danger"): ?>
    
    <div class="alert danger">
        <span>Surgió un problema</span>
    </div>
    
    <?php endif; ?>
    

    <?php if($status == "success"): ?>
    
    <div class="alert success">
    <span>¡Mensaje enviado con éxito! <br> carcando pagina de inicio... </span>

    <script>
        setTimeout(function () {
            window.location.href = "./index.html";
        }, 3000); // 3000 milisegundos (3 segundos)
    </script>

    </div>
    
    <?php endif; ?>

    <div class="section-form">
        <form action="./" method="POST" >

            <h1 class="title-form--contact">¡Contáctanos!</h1>

            <div class="input-group">
                <label for="name">Nombre:</label>
                <input type="text" name="name" id="name">
            </div>

            <div class="input-group">
                <label for="email">Correo:</label>
                <input type="email" name="email" id="email">
            </div>

            <div class="input-group">
                <label for="subject">Asunto:</label>
                <input type="text" name="subject" id="subject">
            </div>

            <div class="input-group">
                <label for="message">Mensaje:</label>
                <textarea name="message" id="message"></textarea>
            </div>

            <div class="button-container">
                <button name="form" type="submit" id="submitform">Enviar</button>
            </div>

            <div class="contact-info">
                
                <div class="info">
                    <span><i class="fas fa-map-marker-alt"></i>Bogotá, Colombia.</span>
                </div>

                <div class="info">
                    <span><i class="fas fa-phone"></i> +57 311-538-6102</span>
                </div>

            </div>

        </form>

    </div>
    <section class="section-six" id="footer">
        <footer class="section-six--footer">
            <section class="section-six--redes">
                <img src="../assets/logo/logoFooter.gif" alt="" id="logo-footer">
            </section>
            <div class="section-six--container">
                <article>
                    <h3><span></span>Contact Us</h3>
                    <p><span></span>continental de transportes</p>
                    <p><span></span>info@continentaldetrasteos.com</p>
                    <p><span></span>601 633 4466 </p>
                    <p><span></span>601 563 0428</p>
                    <p><span></span>(+57) 3115386102 </p>
                    <p class="Qukies"><span></span>politica de privacidad y tratamiento de datos</p>
                </article>
                <article>
                    <h3><span></span>Servicios</h3>
                    <p><span></span>Transporte eficiente</p>
                    <p><span></span>Planificación</p>
                    <p><span></span>Embalaje</p>
                </article>
            </div>
        </footer>
        <div class="footer-two">
            <p>© 2023 by agencia de lo mejor | Fabian silva dev.</p>
        </div>
    </section>


    <script src="https://kit.fontawesome.com/bbff992efd.js" crossorigin="anonymous"></script>
    <script src="../src/javascript/form.js"></script>
    
    
</body>
</html>