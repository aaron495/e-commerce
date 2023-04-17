<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
try {
    $pdo = new PDO("mysql:host=localhost;dbname=name", "root", "");
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}



$sql = "SELECT * FROM categories ";
    $stmt = $pdo->prepare($sql);
          
    $stmt->execute();


    $asql = "SELECT * FROM produits WHERE id=1 OR id=2 OR id=3 OR id=4 ";
    $astmt = $pdo->prepare($asql);
          
    $astmt->execute();


    $bsql = "SELECT * FROM produits WHERE id=5 OR id=6 OR id=7 OR id=8 ";
    $bstmt = $pdo->prepare($bsql);
          
    $bstmt->execute();

















?>