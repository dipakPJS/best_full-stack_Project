<?php

include 'includes/autoload.inc.php';

// initializing object of class DbPost

$post = new DbPost();

// checking whether the SKU ID already exists or not

$skuExists = $post->skuCheck($_POST['sku']);

if ($skuExists) {
    echo 'exists';
} else {
    echo "doesn't exists";
}

// deleting data based on different product types

if (isset($_POST['product_delete'])) {
    if (isset($_POST['selector'])) {
        foreach ($_POST['selector'] as $selector) {
            $post->deletePost($selector);
        }
    }

    header('location: index.php');
}

// inserting data based on different product types

if (isset($_POST['save_product'])) {
    $sku = $_POST['sku'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $size = $_POST['size'];
    $weight = $_POST['weight'];
    $height = $_POST['height'];
    $width = $_POST['width'];
    $length = $_POST['length'];

    // Book

    $book = new Book($sku, $name, $price, $weight);
    $book->validateProduct();

    // DvdDisc

    $dvdDisc = new DvdDisc($sku, $name, $price, $size);
    $dvdDisc->validateProduct();

    // Furniture

    $furniture = new Furniture($sku, $name, $price, $height, $width, $length);
    $furniture->validateProduct();

    //  header location

    header('location: index.php');
}
