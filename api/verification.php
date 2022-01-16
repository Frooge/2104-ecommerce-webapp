<?php
    include_once('db_connect.php');

    $valid = true;
    $email = $_GET['email'];
    $password = $_GET['password'];

    $stmt = $con->prepare("SELECT * FROM users WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        http_response_code(404);
        die(mysqli_error($con));
    }

    if($result->num_rows > 0){
        if($valid){
            $obj = mysqli_fetch_object($result);
            $valid = $password == $obj->Password; // to be changed to hash password
            if($valid){
                $_SESSION['id'] = $obj->UserID;    
            }
        }
    }
    else {
        $valid = false;
    }
    
    echo json_encode($valid);
?>