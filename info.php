<?php
die();
require_once("userip/ip.codehelper.io.php");
require_once("userip/php_fast_cache.php");

$_ip = new ip_codehelper();

$real_client_ip_address = $_ip->getRealIP();
$visitor_location       = $_ip->getLocation($real_client_ip_address);

$len=count($visitor_location);
//for ($i=0;$i<$len;$i++)
   //echo $visitor_location[$i];
   echo $len;
?>