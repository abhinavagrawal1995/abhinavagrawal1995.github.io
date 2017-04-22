<?php
die();
session_start();

$email=   $_POST['email'];
$name=   $_POST['name'];
$text= $_POST['message'];  
$subject= $_POST['subject'];
$to = "abhinavagrawal1995@gmail.com";
$from = "From: abhinavagrawal.in";
 
$_SESSION['name']=$name;

  $message = "\nMessage from " . $name . "\nEmail: " . $email . "\n\nText: " . $text ;
  mail($to,$subject,$message,$from);
  
header( 'Location: index.php' ) ;
?>