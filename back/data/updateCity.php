<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'lib/response.php';
require_once 'lib/request.php';


class User
{		
		var $userID;
		var $city;
		var $active;
}

require_once('database_connection.php');
$request = new Request(array());

if(isset($request->params))
{

    $array_r=$request->params;
    $user= new User();
    $user->userID=($array_r->userID);
    $user->city=($array_r->city);
    $user->active=($array_r->active);
    
    //update
    $query="UPDATE cities SET city='$user->city', active='$user->active' WHERE userID='$user->userID'";
    $result = mysql_query($query);
    //object response
    $res = new Response();
    $res->success = true;
    $res->message = "Updated record";
    $res->message = "$user->city";
    
    /////Query Last update TO validate data was updated
    $result = mysql_query("SELECT * FROM cities where userID =$user->userID");
    $query_array=array();
    $i=0;
    //Iterate all Select
    while($row = mysql_fetch_assoc($result))
      {
        //Create New User instance
        $user = new User();
        //Fetch User Info
        $user->userID=$row['userID'];
        $user->city=$row['city'];
		$user->active=$row['active'];

        //Add User to ARRAY
        $query_array[$i]=$user;
        $i++;
      }
      
      ///////////
      
      
    $res->data = $query_array;
    print_r($res->to_json());
}
else
{
    //echo "false";
    $res = new Response();
    $res->success = false;
    $res->message = "Error Create record";
    $res->data = array();
    print_r($res->to_json());
}
?>
