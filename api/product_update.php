<?php

    include_once('db_connect.php');

    $id = $_POST["id"];
    $typeID = $_POST["typeID"];
    $storeID = $_POST["storeID"];
    $name = $_POST["name"];
    $size = $_POST["size"];
    $price = $_POST["price"];
    $description = $_POST["description"];
    $image = basename($_FILES["image"]["name"]);
    $available = $_POST["available"];

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
        $stmt = $con->prepare("SELECT * FROM products WHERE ProductID = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();

        if($result && $result->num_rows > 0){ 
            $obj = mysqli_fetch_object($result);
            $image = $obj->ProductImage;
        }
        else {
            http_response_code(404);
            die(mysqli_error($con));
        }
    }

    if($valid){
        $sql = "UPDATE products SET ProductTypeID=$typeID, StoreID=$storeID, ProductName='$name', Size='$size', Price=$price, Description='$description', ProductImage='$image', isAvailable=$available WHERE ProductID = $id";

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
?>