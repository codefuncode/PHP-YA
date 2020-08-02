<?php

if (isset($_POST['datos'])) {

    $obj = json_decode($_POST['datos']);

    $myJSON = json_encode($obj);

    echo $myJSON;
}
