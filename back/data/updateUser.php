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
		var $active;
}

require_once('database_connection.php');
$request = new Request(array());

if(isset($request->params))
{

    $array_r=$request->params;
    $user= new User();
    $user->userID=($array_r->userID);
    $user->name=($array_r->name);
    $user->lastname=($array_r->lastname);
    $user->patronymic=($array_r->patronymic);
    $user->active=($array_r->active);
    
    //update
    $query="UPDATE Users2 SET name='$user->name', lastname='$user->lastname', patronymic='$user->patronymic', active='$user->active' WHERE userID='$user->userID'";
    $result = mysql_query($query);
    //object response
    $res = new Response();
    $res->success = true;
    $res->message = "Updated record";
    $res->message = "$user->name";
    
    /////Query Last update TO validate data was updated
    $result = mysql_query("SELECT * FROM Users2 where userID =$user->userID");
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
