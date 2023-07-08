<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        $_SESSION['error_message'] = "Please fill in all the required fields.";
    } else {

        $recipient = "malopealfred12@gmail.com";
        
        $subject = "New Message from Website Contact Form";
        
        $content = "Name: $name\n";
        $content .= "Email: $email\n";
        $content .= "Phone: $phone\n";
        $content .= "Message: $message\n";
        
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        if (mail($recipient, $subject, $content, $headers)) {
            $_SESSION['success_message'] = "Message sent successfully!";
            $_SESSION['error_message'] = "Failed to send message. Please try again.";
        }
    }
}

header("Location: ".$_SERVER['HTTP_REFERER']);
exit();
?>
