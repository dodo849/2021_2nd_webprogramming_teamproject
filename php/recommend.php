<?php
require_once("dbconfigJM.php");

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
// $foodInput = $_POST["hateinput"];
$foodInput = $_POST["hateList"];

$foodInputToString="'";

for($i=0; $i<count($foodInput); $i++){
    if($i == count($foodInput) - 1)
        $foodInputToString = $foodInputToString.$foodInput[$i]."'";
    else
        $foodInputToString = $foodInputToString.$foodInput[$i]."', '";
}

$data = array();
echo $foodInputToString."\n";
$types=array('한식', '양식', '중식', '일식', '패스트푸드', '디저트');
for($i=0; $i<6; $i++){
    $sql="SELECT * FROM food WHERE food_type='$types[$i]' AND (food_name) NOT IN($foodInputToString) ORDER BY rand()";
    $res = $db->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    array_push($data, $row);
}

if($data){
    echo json_encode($row, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}else{
    echo false;
}

mysqli_close($db);
?>