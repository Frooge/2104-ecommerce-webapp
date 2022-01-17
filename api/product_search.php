<?php
    include_once('db_connect.php');

    if(isset($_GET["search"]) && $_GET["search"] != ''){
        $name = $_GET["search"];
        $sql = "SELECT * FROM products WHERE ProductName LIKE '$name'";
    }
    else {
        $sql = "SELECT * FROM products";
    }

    

    // run SQL statement
    $result = mysqli_query($con,$sql);

    // die if SQL statement failed
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