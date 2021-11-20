<?php
//DB임시로바꿈
require_once("dbconfigDY.php");

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$id = $_POST["id"];
$pwd= $_POST["pwd"];

$sql = "SELECT nickname FROM user WHERE id = '$id' and pwd='$pwd'";  
$res = $db->query($sql); 
$row = $res->fetch_array(MYSQLI_ASSOC);

if ($row==!null) {
    echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
    echo("로그인성공");
    session_start();
    $_SESSION['User_Name']=$row['nickname'];
    echo $_SESSION['User_Name'];
} else {            
    echo("fail");
    echo false;   
}
mysqli_close($db);

