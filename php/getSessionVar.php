<?php
session_start();

if($_SESSION['selectedFoodType']){
    echo $_SESSION['selectedFoodType'];
} else {
    $id = session_id();
    echo "일시적 세션 오류, 세션 ID: ".$id."다시 접속해주세요";
}