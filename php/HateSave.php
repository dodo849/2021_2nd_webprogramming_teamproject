<?php
//require_once("dbconfigDY.php");
require_once("dbconfigID.php");
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$foodInput = $_POST["hateList"];

$user_id = $_SESSION['userId'];


if($user_id){
    $sql2 = "SELECT * FROM search_word WHERE user_id='$user_id'";
    $res = $db->query($sql2);
    if ($res->num_rows>0){
        $sql = "DELETE FROM `search_word` 
        WHERE user_id='$user_id';";
        $db->query($sql);
    }
    for($i=0; $i<count($foodInput); $i++){
        $sql = "INSERT INTO `search_word` 
        (`user_id`, `search_word`,`search_num`) 
        VALUES ('$user_id','$foodInput[$i]','$i');";
        $db->query($sql);
    }
    echo '저장 성공';
}

mysqli_close($db);
?>