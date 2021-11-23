<?php
    require_once("dbconfigDY.php");
    //require_once("dbconfigID.php"); 

    $_POST = JSON_DECODE(file_get_contents("php://input"), true);

    $selectedFoodType = $_POST["selectedFoodType"];

    $sql = "SELECT * FROM food WHERE food_type='$selectedFoodType';"; //sql 구문 넣기

    $data = array();
    
    $res = $db->query($sql);
    
    for($i = 0; $i < $res->num_rows; $i++) {
        $row = $res->fetch_array(MYSQLI_ASSOC);
        array_push($data, $row);
    }
    
    if($data != null) {
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
    } else {
        echo false;
    }
    
    mysqli_close($db);
?>