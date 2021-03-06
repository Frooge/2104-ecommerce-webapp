<?php 
    include_once('db_connect.php');

    $name = $_GET['search'];

    $isFiltered = false;
    $term = '%'.str_replace(' ','%',$name).'%';
    $sql = '';
    if(isset($_GET['filter_mt']) && isset($_GET['filter_fr']) && isset($_GET['filter_sn'])){
        $milktea = $_GET['filter_mt'];
        $frappe = $_GET['filter_fr'];
        $snack = $_GET['filter_sn'];

        if($milktea == 'true'){
            $sql = $sql . "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                LEFT JOIN product_type
                ON products.ProductTypeID = product_type.ProductTypeID
                LEFT JOIN stores
                ON products.StoreID = stores.StoreID
                WHERE products.ProductName LIKE '$term'
                AND products.ProductTypeID = '1'
                AND products.isAvailable = '1'";
            $isFiltered = true;
        }
        if($frappe == 'true'){
            if($isFiltered) {
                $sql = $sql . " UNION ";
            }
            $sql = $sql . "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                LEFT JOIN product_type
                ON products.ProductTypeID = product_type.ProductTypeID
                LEFT JOIN stores
                ON products.StoreID = stores.StoreID
                WHERE products.ProductName LIKE '$term'
                AND products.ProductTypeID = '2'
                AND products.isAvailable = '1'";
            $isFiltered = true;
        }
        if($snack == 'true'){
            if($isFiltered) {
                $sql = $sql . " UNION ";
            }
            $sql = $sql . "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                LEFT JOIN product_type
                ON products.ProductTypeID = product_type.ProductTypeID
                LEFT JOIN stores
                ON products.StoreID = stores.StoreID
                WHERE products.ProductName LIKE '$term'
                AND products.ProductTypeID = '3'
                AND products.isAvailable = '1'";
            $isFiltered = true;
        }

        if(!$isFiltered){
            $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
                LEFT JOIN product_type
                ON products.ProductTypeID = product_type.ProductTypeID
                LEFT JOIN stores
                ON products.StoreID = stores.StoreID
                WHERE 0";
        }
    }
    else {
        $sql = "SELECT products.*, product_type.TypeName, stores.StoreName FROM products
            LEFT JOIN product_type
            ON products.ProductTypeID = product_type.ProductTypeID
            LEFT JOIN stores
            ON products.StoreID = stores.StoreID
            WHERE products.ProductName LIKE '$term'
            AND products.isAvailable = '1'";
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
?>