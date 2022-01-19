<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET') {
        $id = $_GET['user'];
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
            
            $cartID = mysqli_insert_id($con);
        }

        $sql = "SELECT items.*, products.ProductName, products.RegularPrice, products.LargePrice, products.ProductImage, extras.AddOns, extras.AddFee, product_type.TypeName, stores.StoreName, stores.Address, stores.Image FROM items
                LEFT JOIN products
                ON items.ProductID = products.ProductID
                LEFT JOIN extras
                ON items.ExtrasID = extras.ExtrasID
                LEFT JOIN product_type
                ON products.ProductTypeID = product_type.ProductTypeID
                LEFT JOIN stores
                ON products.StoreID = stores.StoreID
                WHERE CartID = $cartID";

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

    } else if($method == 'POST') {
        
        $mode = $_POST['mode'];

        if($mode == 'CREATE'){
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

                $cartID = mysqli_insert_id($con);
            }

            $sql = "INSERT INTO items (ProductID, ExtrasID, CartID, Size, Quantity, PartialPrice) VALUES ($productID, $extrasID, $cartID, '$size', $quantity, $price)";

            $result = mysqli_query($con,$sql);

            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }

            echo json_encode($result);

        } else if($mode == 'DELETE') {
            $item = $_POST['item'];
            $sql = "DELETE FROM items WHERE ItemID = $item";

            $result = mysqli_query($con,$sql);

            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }

            echo json_encode($result);
            
        } else {
            die("Unavailable mode method");
        }

        
    } else {
        die("Unavailable request method");
    }
?>