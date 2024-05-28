<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        echo json_encode(['message' => 'No data received or invalid JSON']);
        exit;
    }

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $message = $data['message'] ?? '';

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['message' => 'Missing required fields']);
        exit;
    }

    $to = 'jhm_e@outlook.com';
    $subject = 'Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    $email_message = "<h2>Contact Form Submission</h2>";
    $email_message .= "<p><strong>Name:</strong> $name</p>";
    $email_message .= "<p><strong>Email:</strong> $email</p>";
    $email_message .= "<p><strong>Message:</strong><br>$message</p>";

    if (mail($to, $subject, $email_message, $headers)) {
        echo json_encode(['message' => 'Message sent successfully']);
    } else {
        echo json_encode(['message' => 'Failed to send message']);
    }
} else {
    echo json_encode(['message' => 'Invalid request method']);
}
?>
