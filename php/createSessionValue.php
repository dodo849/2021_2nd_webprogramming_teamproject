<?php
//세션 시작
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);

$selectedFoodType = $_POST["selectedFoodType"];

$_SESSION['selectedFoodType'] = $selectedFoodType;

if($_SESSION['selectedFoodType']){
    echo "세션 변수 생성/변경 성공".$_SESSION['selectedFoodType'];
} else {
    echo "세션 변수 생성/변경 실패";
}

?>