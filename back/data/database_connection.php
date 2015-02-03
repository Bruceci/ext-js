<?php

$con = mysql_connect("localhost","c3786","VCp0P7e9yGFr");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }  

mysql_select_db("instance_c3786_modx", $con);
mysql_set_charset( 'utf8' );

?>
