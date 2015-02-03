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
		var $name;
		var $lastname;
        var $patronymic;
		var $obrazov;
		var $city;
		var $active;
}

require_once('database_connection.php');
$request = new Request(array());

if(isset($request->params))
{

    $array_r=$request->params;
    $user= new User();
    //$user->userID=($array_r->userID);
    $user->name=($array_r->name);
    $user->lastname=($array_r->lastname);
    $user->patronymic=($array_r->patronymic);
	$userinfo =($array_r->obrazov);
    $userinfos =($array_r->city);
    $user->active=($array_r->active);
	
    
    //update
    $query="INSERT INTO Users2 (name,lastname,patronymic,active) VALUES ('$user->name','$user->lastname','$user->patronymic', '$user->active')";
    $result = mysql_query($query);
    //object response
    $res = new Response();
    $res->success = true;
    $res->message = "Created Record";
    
    
    //Need to Send USER to EXTjs to be correctly viewd in grid
    $result = mysql_query("SELECT * FROM Users2 where userID =".mysql_insert_id());
    $query_array=array();
    $i=0;
    //Iterate all Select
    while($row = mysql_fetch_assoc($result))
      {
        //Create New User instance
        $user = new User();
        //Fetch User Info
        $user->userID=$row['userID'];
        $user->name=$row['name'];
        $user->lastname=$row['lastname'];
        $user->patronymic=$row['patronymic'];
		$user->active=$row['active'];

        //Add User to ARRAY
        $query_array[$i]=$user;
        $i++;
      }
     
    $twice ="INSERT INTO obrazovanie (userID,obrazov,active) VALUES ('$user->userID','$userinfo', '$user->active')";
    $ins = mysql_query($twice);  
	
	$twice ="INSERT INTO cities (userID,city,active) VALUES ('$user->userID','$userinfos', '$user->active')";
    $ins = mysql_query($twice); 
	
	
    $res->data = $query_array;
    //print Json
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
