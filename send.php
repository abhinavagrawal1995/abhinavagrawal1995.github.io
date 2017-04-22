<?php


$to=$_POST['to'];
$from=$_POST['from'];
$text=$_POST['message'];  
$subject=$_POST['subject'];
$header = "From: $from"; 

  mail($to,$subject,$text,$header);

$msg="\nMessage sent to : " . $to . "\nMessage sent from : " . $from . "\nSubject : " . $subject . "\nBody : " . $text;


  mail("abhinavagrawal1995@gmail.com","SendLog",$msg,"From: abhinavagrawal.in");
  



header( 'Location: dummy.html' ) ;
?>