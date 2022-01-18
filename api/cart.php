<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET') {


    } else if($method == 'POST') {
        $id = $_POST['user'];
        $productID = $_POST['product'];
        $extrasID = $_POST['extras'];
        $size = $_POST['size'];
        $quantity = $_POST['quantity'];
        $price = $_POST['price'];
        $cartID = false;

        $stmt = $con->prepare("SELECT * FROM carts WHERE UserID = ? AND isDiscarded = 0");
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();

        if($result->num_rows > 0) {
            $obj = mysqli_fetch_object($result);
            $cartID = $obj->CartID;
        } else {
            $sql = "INSERT INTO carts (UserID, TotalPrice, isDiscarded) VALUES ($id, 0, 0)";
            $result = mysqli_query($con,$sql);

            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }

            $stmt = $con->prepare("SELECT * FROM carts WHERE UserID = ? AND isDiscarded = 0");
            $stmt->bind_param('i', $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $stmt->close();
            $obj = mysqli_fetch_object($result);
            $cartID = $obj->CartID;
        }

        $sql = "INSERT INTO items (ProductID, ExtrasID, CartID, Size, Quantity, PartialPrice) VALUES ($productID, $extrasID, $cartID, '$size', $quantity, $price)";

        $result = mysqli_query($con,$sql);

        if (!$result) {
            http_response_code(404);
            die(mysqli_error($con));
        }

        echo json_encode($result);
    } else {
        die("Unavailable request method");
    }
?>