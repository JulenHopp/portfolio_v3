<?php
header('Content-Type: application/json');

// Obtiene el contenido JSON enviado desde el formulario
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Extrae los datos del formulario
$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

// Dirección de correo a la que se enviará el formulario
$to = 'jhm_e@outlook.com'; // Tu correo electrónico
$subject = 'Contact Form Submission';
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/html\r\n";

// Cuerpo del correo electrónico
$email_message = "<h2>Contact Form Submission</h2>";
$email_message .= "<p><strong>Name:</strong> $name</p>";
$email_message .= "<p><strong>Email:</strong> $email</p>";
$email_message .= "<p><strong>Message:</strong><br>$message</p>";

// Envía el correo electrónico
if(mail($to, $subject, $email_message, $headers)) {
    echo json_encode(['message' => 'Message sent successfully']);
} else {
    echo json_encode(['message' => 'Failed to send message']);
}
?>

