<?php
require_once("dbconfigJM.php");
session_start();

if($_SESSION['User_Name']){
    $id=$_SESSION['User_Name'];
    $sql = "SELECT * FROM search_word WHERE user_id='$id'";
    $res = $db->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
}
if($row){
    echo json_encode($row, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}else{
    echo false;
}

mysqli_close($db);
?>