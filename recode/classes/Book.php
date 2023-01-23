<?php

class Book extends MainProduct
{
    private $sku;
    private $name;
    private $price;
    private $weight;

    public function __construct($sku, $name, $price, $weight)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->weight = $weight;
    }

    // Now using parent class method validateProduct()

    public function validateProduct()
    {
        if (!empty($this->sku) && !empty($this->name) && !empty($this->price) && !empty($this->weight)) {
            $sql = 'INSERT INTO products (sku, name, price, weight) VALUES (:sku, :name, :price, :weight)';
            $stmt = $this->connect()->prepare($sql);
            $stmt->bindValue('sku', $this->sku);
            $stmt->bindValue('name', $this->name);
            $stmt->bindValue('price', $this->price);
            $stmt->bindValue('weight', $this->weight);
            $stmt->execute();
        }
    }
}
