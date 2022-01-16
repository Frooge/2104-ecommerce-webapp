<?php
    session_id('1234'); // not secure and should not be final
    session_start();

    header('Access-Control-Allow-Origin: *');
    
    $ret = array(
        "session" => $_SESSION,
        "session_id" => session_id()
    );

    echo json_encode($ret);
?>