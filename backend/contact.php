<?php
header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$to = 'your-email@example.com';
$subject = 'Contact Form Submission';
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/html\r\n";

$email_message = "<h2>Contact Form Submission</h2>";
$email_message .= "<p><strong>Name:</strong> $name</p>";
$email_message .= "<p><strong>Email:</strong> $email</p>";
$email_message .= "<p><strong>Message:</strong><br>$message</p>";

if(mail($to, $subject, $email_message, $headers)) {
    echo json_encode(['message' => 'Message sent successfully']);
} else {
    echo json_encode(['message' => 'Failed to send message']);
}
?>
