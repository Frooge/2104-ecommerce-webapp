<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET') {

        if(isset($_GET['search'])) {
            $search = $_GET['search'];
            $term = '%'.str_replace(' ','%',$search).'%';

            $sql = "SELECT orders.*, users.FullName, carts.TotalPrice FROM orders
                LEFT JOIN users
                ON orders.UserID = users.UserID
                LEFT JOIN carts
                ON orders.CartID = carts.CartID
                WHERE users.FullName LIKE '$term'";

        } else {
            $sql = "SELECT orders.*, users.FullName, carts.TotalPrice FROM orders
                LEFT JOIN users
                ON orders.UserID = users.UserID
                LEFT JOIN carts
                ON orders.CartID = carts.CartID";
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

            $sql = "INSERT INTO delivery (OrderID, ShippingAddress, DeliveryFee, DeliveryStatus, TotalPrice, Message) VALUES ($orderID, '$address', 0, 'PENDING', $price, '')";

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