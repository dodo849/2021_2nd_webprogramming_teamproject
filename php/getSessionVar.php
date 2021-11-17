<?php
session_start();

if($_SESSION['selectedClass']){
    echo $_SESSION['selectedClass'];
} else {
    $id = session_id();
    echo "전달 실패".$id;
}