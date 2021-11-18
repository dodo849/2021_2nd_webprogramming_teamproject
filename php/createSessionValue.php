<?php
//세션 시작
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);

$selectedFoodType = $_POST["selectedFoodType"];

switch ($selectedFoodType) {
    case "korea":
        $toStringFoodType = "한식";
        break;
    case "western":
        $toStringFoodType = "양식";
        break;
    case "china":
        $toStringFoodType = "중식";
        break;
    case "japanese":
        $toStringFoodType = "일식";
        break;
    case "fase":
        $toStringFoodType = "패스트푸드";
        break;
    case "dessert":
        $toStringFoodType = "디저트";
        break;
    default:
        $toStringFoodType = "없음";
  }

$_SESSION['selectedFoodType'] = $toStringFoodType;

if($_SESSION['selectedFoodType']){
    echo "세션 변수 생성/변경 성공".$_SESSION['selectedFoodType'];
} else {
    echo "세션 변수 생성/변경 실패";
}

?>