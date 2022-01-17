<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET'){
        if(isset($_GET["search"]) && $_GET["search"] != ''){
            $name = $_GET["search"];
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                    LEFT JOIN product_type
                    ON products.ProductTypeID = product_type.ProductTypeID
                    LEFT JOIN stores
                    ON products.StoreID = stores.StoreID
                    WHERE products.ProductName LIKE '$name'";
        }
        else {
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                    LEFT JOIN product_type
                    ON products.ProductTypeID = product_type.ProductTypeID
                    LEFT JOIN stores
                    ON products.StoreID = stores.StoreID"; 
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
    }
    else if($method == 'POST'){
        $typeID = $_POST["typeID"];
        $storeID = $_POST["storeID"];
        $name = $_POST["name"];
        $price = $_POST["price"];
        $size = $_POST["size"];
        $description = $_POST["description"];
        $image = basename($_FILES["image"]["name"]);

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

        if($image == ''){
            $image = 'placeholder.png';
        }

        if($valid){
            $sql = "INSERT INTO products (ProductTypeID, StoreID, ProductName, Size, Price, Description, ProductImage, isAvailable) VALUES ($typeID, $storeID, '$name', '$size', $price, '$description', '$image', 1)";

            // run SQL statement
            $result = mysqli_query($con, $sql);

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