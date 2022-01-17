<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET'){
        $sql = "SELECT products.*, product_type.TypeName, product_details.Description, product_details.ProductImage FROM products
                LEFT JOIN product_type
                ON products.ProductTypeID = product_type.ProductTypeID
                LEFT JOIN product_details
                ON products.ProductName = product_details.ProductName"; 

        // run SQL statement
        $result = mysqli_query($con,$sql);

        // die if SQL statement failed
        if (!$result) {
            http_response_code(404);
            die(mysqli_error($con));
        }

        for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
        }
    }
    else if($method == 'POST'){
        $typeID = $_POST["typeID"];
        $storeID = $_POST["storeID"];
        $name = $_POST["name"];
        $description = $_POST["description"];
        $image = basename($_FILES["image"]["name"]);
        $regular = $_POST["price-regular"];
        $large = $_POST["price-large"];

        $result = false;
        $message = '';
        $valid = true;
        $target_dir = "../src/img/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        $uploadFile = true;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Check if file already exists
        if (file_exists($target_file)) {
            $message = "File already exists.";
            $uploadFile = false;
        }

        // if everything is ok, try to upload file
        if($uploadFile) {
            if (!move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                $message = "An error occured when uploading your file.";
                $valid = false;
            }
        }

        if($valid){
            $sql = "INSERT INTO product_details (ProductName, Description, ProductImage) VALUES ('$name', '$description', '$image');
                    INSERT INTO products (ProductTypeID, StoreID, ProductName, Size, Price, isAvailable) VALUES
                    ($typeID, $storeID, '$name', 'Regular', $regular, 1),
                    ($typeID, $storeID, '$name', 'Large', $large, 1);";

            // run SQL statement
            $result = $con->multi_query($sql);

            // die if SQL statement failed
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }
        }

        $ret = array(
            'result' => $result,
            'message' => $message,
        );
        echo json_encode($ret);
    }
    else {
        die();
    }
?>