<?php
    require_once("dbconfigDY.php");
    session_start();

    $_POST = JSON_DECODE(file_get_contents("php://input"), true);

    $wishFoodId = $_POST["wishFoodId"];

    $sql = "SELECT * FROM food WHERE id='$wishFoodId';"; //sql 구문 넣기

    $data = array();
    
    $res = $db->query($sql);
    
    for($i = 0; $i < $res->num_rows; $i++) {
        $row = $res->fetch_array(MYSQLI_ASSOC);
        array_push($data, $row);
    }
    
    $loginUserId = $_SESSION['userId'];
    
    // if($loginUserId){
    //     echo "로그인된 유저 ID: ".$loginUserId;
    // }
    // else{
    //     echo "로그인된 유저 없음";
    // }

    if($data != null || $loginUserId) {
        $sql = "INSERT INTO `store` (`user_id`, `food_id`) 
        VALUES ('$loginUserId','$wishFoodId')";
        $db->query($sql);
        echo "찜하기 완료";
    } else if($data != null || $loginUserId) {
        echo "찜하기 위해선 로그인을 먼저 해주세요";
    }
    else {
        echo "이미 찜한 게시물입니다";
    }
    
    mysqli_close($db);
?>