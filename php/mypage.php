<?php
require_once("dbconfigDY.php");
session_start();
if($_SESSION['User_Name']){
    echo($_SESSION['User_Name']);
}
mysqli_close($db);