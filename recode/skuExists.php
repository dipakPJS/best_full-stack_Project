<?php

include 'includes/autoload.inc.php';

$skuChecker = new DbPost();
$skuExists = $skuChecker->skuCheck($_POST['sku']);

if ($skuExists) {
    echo 'exists';
} else {
    echo "doesn't exists";
}
