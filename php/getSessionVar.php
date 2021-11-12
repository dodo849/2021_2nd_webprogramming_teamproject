<?php

//애초에 같은 세션인데 왜 안될까??
if($_SESSION['selectedClass']){
    echo "selectedClass 값: ".$_SESSION['selectedClass'];
} else {
    $id=session_id();
    echo "전달 실패".$id;
}