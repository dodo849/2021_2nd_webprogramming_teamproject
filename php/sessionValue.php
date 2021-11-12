<?php
//세션 시작
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$selectedClass = $_POST["selectedClass"];
if(!$_POST["selectedClass"])
    echo 'post 전송 실패';

$_SESSION['selectedClass'] = $selectedClass;

if($_SESSION['selectedClass']){
    echo "세션 변수 생성/변경 성공";
} else {
    echo "세션 변수 생성/변경 실패";
}

?>