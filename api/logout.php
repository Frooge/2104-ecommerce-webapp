<?php
    session_id('1234'); // not secure and should not be final
    session_start();

    header('Access-Control-Allow-Origin: *');
    
    session_destroy();
?>