<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = $_POST['email'];

    $email_subject = "New Form Submission";

    $email_body = "Username:  $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "furrukhbusiness@gmail.com";

    $headers = "From:  $email_from \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");

?>