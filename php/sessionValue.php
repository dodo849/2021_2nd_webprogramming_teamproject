<?php
//세션 시작
session_start();

$_POST = JSON_DECODE(file_get_contents("php://input"), true);

$selectedClass = $_POST["selectedClass"];

$_SESSION['selectedClass'] = $selectedClass;

if($_SESSION['selectedClass']){
    echo "세션 변수 생성/변경 성공".$_SESSION['selectedClass'];
} else {
    echo "세션 변수 생성/변경 실패";
}

?>