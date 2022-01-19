<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET') {
        if(isset($_GET["search"])) {
            $name = $_GET["search"];
            $term = '%'.str_replace(' ','%',$name).'%';
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                    LEFT JOIN product_type
                    ON products.ProductTypeID = product_type.ProductTypeID
                    LEFT JOIN stores
                    ON products.StoreID = stores.StoreID
                    WHERE products.ProductName LIKE '$term'";
        } else if(isset($_GET["id"])) {
            $id = $_GET["id"];
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                    LEFT JOIN product_type
                    ON products.ProductTypeID = product_type.ProductTypeID
                    LEFT JOIN stores
                    ON products.StoreID = stores.StoreID
                    WHERE products.ProductID = $id";
        } else if(isset($_GET["type"])) {
            $typeID = $_GET["type"];
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                    LEFT JOIN product_type
                    ON products.ProductTypeID = product_type.ProductTypeID
                    LEFT JOIN stores
                    ON products.StoreID = stores.StoreID
                    WHERE products.ProductTypeID = $typeID
                    LIMIT 4";
        } else {
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                    LEFT JOIN product_type
                    ON products.ProductTypeID = product_type.ProductTypeID
                    LEFT JOIN stores
                    ON products.StoreID = stores.StoreID"; 
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
    } else if($method == 'POST') {
        $result = false;
        $message = '';
        $valid = true;

        $image = basename($_FILES["image"]["name"]);
        $target_dir = "../src/img/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        $uploadFile = true;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Check if image file already exists
        if (file_exists($target_file)) {
            $message = "File already exists.";
            $uploadFile = false;
        }

        if($uploadFile) {
            if (!move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                $message = "An error occured when uploading your file.";
                $valid = false;
            } else {
                $message = "Successful file upload";
            }
        }

        if($image == '') {
            if(!isset($_POST["id"])) {
                $image = 'placeholder.png';
            } else {
                $id = $_POST["id"];
                $stmt = $con->prepare("SELECT * FROM products WHERE ProductID = ?");
                $stmt->bind_param("i", $id);
                $stmt->execute();
                $result = $stmt->get_result();
                $stmt->close();

                if($result && $result->num_rows > 0){ 
                    $obj = mysqli_fetch_object($result);
                    $image = $obj->ProductImage;
                } else {
                    http_response_code(404);
                    die(mysqli_error($con));
                }
            }
        }

        if($valid) {
            $sql = '';
            $typeID = $_POST["typeID"];
            $storeID = $_POST["storeID"];
            $name = $_POST["name"];
            $regular = $_POST["regular"];
            $large = $_POST["large"];
            $size = $_POST["size"];
            $description = $_POST["description"];

            if(!isset($_POST["id"])) {
                $sql = "INSERT INTO products (ProductTypeID, StoreID, ProductName, RegularPrice, LargePrice, Description, ProductImage, isAvailable) VALUES ($typeID, $storeID, '$name', $regular, $large, '$description', '$image', 1)";
            } else {
                $id = $_POST["id"];
                $available = $_POST["available"];
                $sql = "UPDATE products SET ProductTypeID=$typeID, StoreID=$storeID, ProductName='$name', RegularPrice=$regular, LargePrice=$large, Description='$description', ProductImage='$image', isAvailable=$available WHERE ProductID = $id";
            }

            $result = mysqli_query($con, $sql);

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
    } else {
        die("Unavailable request method");
    }
?>