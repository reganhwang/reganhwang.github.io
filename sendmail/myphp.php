<?php

$my_name = $_REQUEST['myName'];
$my_email = $_REQUEST['myEmail'];
$their_email = $_REQUEST['theirEmail'];
$subject = $_REQUEST['subject'];
$content = $_REQUEST['content'];

$header = "From: $my_name"."<$my_email>\r\n";

mail($to_email, $subject, $content, $header);

echo 'Messege sent';



?>
