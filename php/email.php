<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require ('vendor/autoload.php');

function sendMail($subject, $body, $email, $name, $html = false){
    // Configuración del servidor
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'tu_usuario_smtp'; // Reemplaza con tu nombre de usuario SMTP
    $mail->Password   = 'tu_contraseña_smtp'; // Reemplaza con tu contraseña SMTP
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    
    // Destinatarios
    $mail->setFrom('admisiones@campbellgr.com', 'Equipo de CampbellGr');
    $mail->addAddress('produccionesbog@gmail.com', 'Equipo de CampbellGr');

    // Cuerpo del correo
    $mail->isHtml($html);
    $mail->Subject = $subject;
    $mail->Body = $body;

    // Intentar enviar el correo
    try {
        $mail->send();
        // Envío exitoso
    } catch (Exception $e) {
        // Manejo de errores
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}