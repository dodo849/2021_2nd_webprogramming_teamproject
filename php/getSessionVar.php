<?php
session_start();

if($_SESSION['selectedFoodType']){
    
switch ( $_SESSION['selectedFoodType'] ) {
    case "korea":
        $stringFoodType = "한식";
        break;
    case "western":
        $stringFoodType = "양식";
        break;
    case "china":
        $stringFoodType = "중식";
        break;
    case "japanese":
        $stringFoodType = "일식";
        break;
    case "fase":
        $stringFoodType = "패스트푸드";
        break;
    case "dessert":
        $stringFoodType = "디저트";
        break;
    default:
        $stringFoodType = "없음";
  }
    echo $stringFoodType;
} else {
    $id = session_id();
    echo "일시적 세션 오류, 세션 ID: ".$id."다시 접속해주세요";
}