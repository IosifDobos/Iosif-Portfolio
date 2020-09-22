<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $res_json = file_get_contents("php://input");
    $_POST = json_decode($res_json, true);

    $errors = array();
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        # code...
        if (empty($_POST['contactEmail'])) {
            $errors[] = 'Email is empty';
        }
        else {
            $email = $_POST['contactEmail'];
            //validating the email
            if( !filter_var($email, FILTER_VALIDATE_EMAIL)){
                $error[] = 'Invalid email';
            }
        }

        if(empty($_POST['contactMessage'])) {
            $error[] = 'Message is empty';
        }
        else{
            $message = $_POST['contactMessage'];
        }

        if (empty($errors)) {
            # code...
            $date = date('j, F Y h: i A');
    
            $emailBody = "
                <html>
                    <head>
                    <title>$email is contacting you</title>
                    </head>
                    <body style=\"background-color:#fafafa;\">
                        <div style=\"padding:20px;\">
                            Date: <span style=\"color:#888\">$date</span>
                            <br>
                            Email: <span style=\"color:#888\">$email</span>
                            <br>
                            Subject: <span style=\"color:#888\">$email</span>
                            <br>
                            Message: <div style=\"color:#888\">$message</div>
                        </div>
                    </body>
                </html>     
            ";
    
            $headers = 'From: Contact Form <iosifdobos22@gmail.com>' . "\r\n" . 
                "Reply-To: $email" . "\r\n" . 
                "MIME-Version: 1.0\r\n" . 
                "Content-Type: text/html; charset=iso-8859-1\r\n";
    
            $to = 'iosifdobos22@gmail.com';
            $subject = 'Contactiong you!';
    
            if (mail($to, $subject, $emailBody, $headers)) {
                # code...
                $sent = true;
            }
        }
        
    }

?>

<?php if (!empty($errors)) : ?> 

    {
        "status": "fail",
        "error":  <?php echo json_encode($errors) ?>
    }
    <?php endif; ?>


    <?php if (isset($sent) && $sent === true) : ?> 

    {
        "status": "success",
        "message": "Your data was successfully submitted"
        }
<?php endif; ?>

<?php
  $email_subject = "Submission was successful";
  $email_message = "Form details\n\n";
  $email_message .= "Name: ".$name."\n\n";
  $email_message .= "Email: ".$email."\n\n";
  $email_message .= "Message: ".$message."\n\n";

  // create email headers

  $headers = 'From: '.$to."\r\n".
  'Reply-To: '.$to."\r\n" .
  "MIME-Version: 1.0\r\n" .
  "Content-Type: text/plain; charset=iso-8859-1\r\n";

  mail($email, $email_subject, $email_message, $headers);