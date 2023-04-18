<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    // Set the recipient email address
    $to = 'kashayap2002@gmail.com';

    // Set the email subject
    $subject = 'Feedback Form Submission';

    // Set the email message
    $message = "Name: " . $name . "\r\n";
    $message .= "Email: " . $email . "\r\n";
    $message .= "Feedback: " . $feedback . "\r\n";

    // Set the email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send the email
    mail($to, $subject, $message, $headers);

    // Redirect to thank you page
    header("Location: thank_you.html");
    exit;
}
?>
