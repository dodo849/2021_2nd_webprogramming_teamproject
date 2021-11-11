<?php

if($_SESSION['selectedClass']){
    echo "selectedClass 값: ".$_SESSION['selectedClass'];
} else {
    // $id=session_id();
    echo "전달 실패";
}