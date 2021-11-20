<?php
require_once("dbconfigID.php");
session_start();
session_destroy();
mysqli_close($db);