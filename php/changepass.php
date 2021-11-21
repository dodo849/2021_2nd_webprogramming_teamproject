<?php
require_once("dbconfigID.php");
session_start();
$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$nick=$_SESSION['User_Name'];
$changedpass=$_POST["changepwd"];
$sql="UPDATE user SET pwd='$changedpass'
WHERE nickname='$nick' ";
$db->query($sql);
echo true;
mysqli_close($db);