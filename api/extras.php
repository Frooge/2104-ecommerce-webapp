<?php
    include_once('db_connect.php');

    $typeID = $_GET['type'];

    $sql = "SELECT * FROM extras WHERE ProductTypeID = $typeID";

    $result = mysqli_query($con,$sql);

    if (!$result) {
        http_response_code(404);
        die(mysqli_error($con));
    }
    
    echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    echo ']';
?>