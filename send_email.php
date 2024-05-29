<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Honeypot veld controleren
    if (!empty($_POST['address'])) {
        echo json_encode(['status' => 'error', 'message' => 'Spam detected']);
        exit;
    }

    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Check of de velden niet leeg zijn
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
        exit;
    }

    $to = 'michael@xinudesign.be';
    $subject = 'Nieuw bericht van uw website contactformulier';
    $body = "Naam: $name\nE-mail: $email\nTelefoon: $phone\nBericht:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Bericht succesvol verstuurd!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Er is iets misgegaan. Probeer het opnieuw.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
?>
