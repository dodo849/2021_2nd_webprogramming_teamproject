<?php
require_once("dbconfigDY.php");
session_start();
//세션 변수의 값 , 닉네임을 받아온다.
if($_SESSION['User_Name']){
    echo($_SESSION['User_Name']);
}
mysqli_close($db);