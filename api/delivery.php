<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];
    
    if($method == 'GET') {
        if(isset($_GET['search'])) {
            $search = $_GET['search'];
            $term = '%'.str_replace(' ','%',$search).'%';

            $sql = "SELECT delivery.*, orders.UserID, users.FullName FROM delivery
                LEFT JOIN orders
                ON delivery.OrderID = orders.OrderID
                LEFT JOIN users
                ON orders.UserID = users.UserID
                WHERE users.FullName LIKE '$term'
                ORDER BY delivery.DeliveryStatus ASC";

        } else {
            $sql = "SELECT delivery.*, orders.UserID, users.FullName FROM delivery
                LEFT JOIN orders
                ON delivery.OrderID = orders.OrderID
                LEFT JOIN users
                ON orders.UserID = users.UserID
                ORDER BY delivery.DeliveryStatus ASC";

        }
        

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

    } else if ($method =='POST') {
        $mode = $_POST['mode'];
        $id = $_POST['delivery'];
        $sql = '';

        if($mode == 'STATUS') {
            $status = $_POST['status'];

            $sql = "UPDATE delivery SET DeliveryStatus = '$status' WHERE DeliveryID = $id";

        } else if($mode == 'MESSAGE') {
            $message = $_POST['message'];

            $sql = "UPDATE delivery SET Message = '$message' WHERE DeliveryID = $id";
        }

        $result = mysqli_query($con,$sql);

        if (!$result) {
            http_response_code(404);
            die(mysqli_error($con));
        }

        json_encode($result);

    } else {
        die("Unavailable request method");
    }

    
?>