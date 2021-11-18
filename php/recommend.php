<?php
require_once("dbconfig.php");

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$foodInput = $_POST["hateinput"];
//$sql = "SELECT * FROM foodlist";
$hate = "SELECT * FROM foodlist WHERE food_name = '$foodInput'";


$sql0=$hate;
while($sql0==$hate){
    $sql0="SELECT * FROM foodlist WHERE food_type='한식' ORDER BY rand()";
}
$res = $db->query($sql0);
$row[0] = $res->fetch_array(MYSQLI_ASSOC);


$sql1=$hate;
while($sql1==$hate){
    $sql1="SELECT * FROM foodlist WHERE food_type='양식' ORDER BY rand()";
}
$res = $db->query($sql1);
$row[1] = $res->fetch_array(MYSQLI_ASSOC);
$sql2=$hate;
while($sql2==$hate){
    $sql2="SELECT * FROM foodlist WHERE food_type='중식' ORDER BY rand()";
}
$res = $db->query($sql2);
$row[2] = $res->fetch_array(MYSQLI_ASSOC);
$sql3=$hate;
while($sql3==$hate){
    $sql3="SELECT * FROM foodlist WHERE food_type='일식' ORDER BY rand()";
}
$res = $db->query($sql3);
$row[3] = $res->fetch_array(MYSQLI_ASSOC);
$sql4=$hate;
while($sql4==$hate){
    $sql4="SELECT * FROM foodlist WHERE food_type='패스트푸드' ORDER BY rand()";
}
$res = $db->query($sql4);
$row[4] = $res->fetch_array(MYSQLI_ASSOC);
$sql5=$hate;
while($sql5==$hate){
    $sql5="SELECT * FROM foodlist WHERE food_type='디저트' ORDER BY rand()";
}
$res = $db->query($sql5);
$row[5] = $res->fetch_array(MYSQLI_ASSOC);


if($row){
    echo json_encode($row, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}else{
    echo false;
}

mysqli_close($db);
?>