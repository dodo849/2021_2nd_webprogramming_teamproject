<?php
//세션 시작
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$selectedClass = $_POST["selectedClass"];
if(!$_POST["selectedClass"])
    echo 'post 전송 실패';

$_SESSION['selectedClass'] = $selectedClass;

if($_SESSION['selectedClass']){
    // echo json_encode($location, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
    // echo "location.href='../html/foodListMenu.html'";
} else {
    echo "세션 변수 생성/변경 실패";
}

?>