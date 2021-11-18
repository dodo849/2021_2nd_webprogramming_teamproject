<?php
require_once("dbconfig.php");

$sql = "SELECT * FROM foodlist";

$data = array();
$res = $db->query($sql);

for($i=0; $i< $res->num_rows; $i++) {
    $row = $res->fetch_array(MYSQLI_ASSOC);
    array_push($data, $row);
}
if ($data != null){
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}else{
    echo json_encode(false, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}

mysqli_close($db);
?>