<?php

abstract class MainProduct
{
    use DbConn;

    abstract protected function validateProduct();
}
