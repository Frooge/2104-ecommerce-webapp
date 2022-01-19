<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET') {

        

    } else if ($method == 'POST') {
        $id = $_POST['user'];
        $cartID = $_POST['cart'];
        $payment = $_POST['payment'];
        $price = $_POST['price'];
        $address = $_POST['address'];
        $orderID = false;

        $sql = "UPDATE carts SET TotalPrice = $price, isDiscarded = 1 WHERE CartID = $cartID";

        $result = mysqli_query($con,$sql);

        if (!$result) {
            http_response_code(404);
            die(mysqli_error($con));
        }

        $sql = "INSERT INTO orders (UserID, CartID, PaymentMethod) VALUES ($id, $cartID, '$payment')";

        $result = mysqli_query($con,$sql);

        if (!$result) {
            http_response_code(404);
            die(mysqli_error($con));
        }

        if($payment == 'Delivery') {
            $orderID = mysqli_insert_id($con);

            $sql = "INSERT INTO delivery (OrderID, ShippingAddress, DeliveryFee, DeliveryStatus, TotalPrice) VALUES ($orderID, $id, '$address', 'PENDING', $price)";

            $result = mysqli_query($con,$sql);

            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }
        }

        echo json_encode($result);

    } else {
        die("Unavailable request method");
    }
?>