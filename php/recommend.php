<?php
require_once("dbconfigJM.php");

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$foodInput = $_POST["hateinput"];

$types=array('한식', '양식', '중식', '일식', '패스트푸드', '디저트');
for($i=0; $i<6; $i++){
    $sql="SELECT * FROM food WHERE food_type='$types[$i]' AND NOT food_name IN('$foodInput') ORDER BY rand()";
    $res = $db->query($sql);
    $row[$i] = $res->fetch_array(MYSQLI_ASSOC);
}

if($row){
    echo json_encode($row, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}else{
    echo false;
}

mysqli_close($db);
?>