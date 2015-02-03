<?php
//Import Response Class
require_once 'lib/response.php';

//Make DB connection
require_once('database_connection.php');


$parent_id = $_GET['node'];

$query = "SELECT id, text, leaf FROM mytree WHERE parent_id='".$parent_id."' ORDER BY text ASC";

$rs = mysql_query($query);

$arr = array();
while($obj = mysql_fetch_object($rs)) {
 $arr[] = $obj;
}

echo json_encode($arr);

?>