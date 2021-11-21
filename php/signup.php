<?php
// require_once("dbconfigID.php"); 
require_once("dbconfigDY.php"); 

$_POST = JSON_DECODE(file_get_contents("php://input"), true);

$id = $_POST["id"];
$password = $_POST["password"];
$nickname = $_POST["nickname"];
$q1 = $_POST["q1"];
$q2 = $_POST["q2"];

$sql = "SELECT * FROM user WHERE id = '$id'";
$res = $db->query($sql); 
$row = $res->fetch_array(MYSQLI_ASSOC); 
if ($row === null) { 
    $sql = "INSERT INTO `user` (`id`, `pwd`,`nickname`,`Q1`,`Q2`) 
        VALUES ('$id','$password','$nickname','$q1','$q2')";
    $db->query($sql);
    echo true;
} else { 
    echo false;
} 
mysqli_close($db);
