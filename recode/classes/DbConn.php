<?php

// DbConn trait for database connection -----

trait DbConn
{
    private $host = 'localhost';
    private $dbname = 'ecommerce';
    private $user = 'root';
    private $password = '';

    public function connect()
    {
        $dsn = "mysql:host=$this->host;dbname=$this->dbname";
        $pdo = new PDO($dsn, $this->user, $this->password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $pdo;
    }
}
