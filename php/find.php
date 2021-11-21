<?php
require_once("dbconfigID.php");

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$passfind01 = $_POST["passfind01"];//아이디
$passfind02 = $_POST["passfind02"];//보안질문01
$passfind03 = $_POST["passfind03"];//보안질문02

$sql = "SELECT pwd FROM user WHERE id = '$passfind01'
and Q1 ='$passfind02' and Q2 ='$passfind03'";  
$res = $db->query($sql); 
$row = $res->fetch_array(MYSQLI_ASSOC); 
if ($row==!null) { 
    echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {   
    echo("fail");         
    echo false; 
}
mysqli_close($db);

