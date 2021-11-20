<?php
require_once("dbconfigID.php");
$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$id = $_POST["id"];
$passfind01 = $_POST["passfind01"];
$passfind02 = $_POST["passfind02"];
$sql = "SELECT address FROM person WHERE id = '$id'";  
$res = $db->query($sql); 
$row = $res->fetch_array(MYSQLI_ASSOC); 
if ($row) {
    echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {            
    echo false; 
}
mysqli_close($db);

