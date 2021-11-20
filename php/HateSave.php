<?php
require_once("dbconfigJM.php");
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$foodInput = $_POST["hateinput"];

$user_id = $_SESSION['User_Name'];
if($user_id){
    $sql = "INSERT INTO `search_word` 
    (`user_id`, `search_word`,`search_num`) 
    VALUES ('$userid','$foodinput','')";
    $db->query($sql);
    echo '저장 성공';
}

mysqli_close($db);
?>