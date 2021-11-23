<?php
require_once("dbconfigDY.php");
session_start();

$data=array();
if($_SESSION['userId']){
    $loginid = $_SESSION['userId'];
    $sql = "SELECT * FROM search_word WHERE user_id='$loginid'";
    $res = $db->query($sql);
    for($i=0; $i< $res->num_rows ; $i++){
        $row = $res->fetch_array(MYSQLI_ASSOC);
        array_push($data, $row);
    }
}

if($data){
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}else{
    echo false;
}

mysqli_close($db);
?>