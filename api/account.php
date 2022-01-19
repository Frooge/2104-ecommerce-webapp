<?php
    include_once('db_connect.php');

    $method = $_SERVER['REQUEST_METHOD'];
    $valid = true;

    switch ($method) {
        case 'GET':
            $id = $_GET['userID'];
            $sql = "SELECT * FROM users".($id?" where UserID=$id":''); 
            break;
        case 'POST': // dont forget to add email check
            $typeID = $_POST["typeID"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $fullname = $_POST["fullname"];
            $birthdate = $_POST["birthdate"];
            $address = $_POST["address"];
            $contact = $_POST["contact"];

            $stmt = $con->prepare("SELECT * FROM users WHERE Email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $res = $stmt->get_result();
            if($res->num_rows > 0){
                $valid = false;
            } else {
                $sql = "INSERT INTO users (UserTypeID, Email, Password, Fullname, Birthdate, Address, ContactNum) VALUES ('$typeID', '$email', '$password', '$fullname', '$birthdate', '$address', '$contact')"; 
            }
            
            break;
    }

    $result = false;
    if($valid){
        // run SQL statement
        $result = mysqli_query($con,$sql);

        // die if SQL statement failed
        if (!$result) {
            http_response_code(404);
            die(mysqli_error($con));
        }
    }

    if ($method == 'GET') {
        if (!$id) echo '[';
        for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
        }
        if (!$id) echo ']';
    } elseif ($method == 'POST') {
        echo json_encode($result);
    } else {
        echo mysqli_affected_rows($con);
    }
?>