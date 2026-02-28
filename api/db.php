<?php
$host = 'localhost';
$dbname = 'iot_kmitl_db';
$username = 'root'; // ปกติ XAMPP จะใช้ root
$password = '';     // ปกติ XAMPP รหัสผ่านจะว่างเปล่า

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // บรรทัดล่างนี้เอาไว้เทสว่าต่อติดไหม ถ้าใช้งานจริงเดี๋ยวเรามาลบออกครับ
    // echo "Connected successfully"; 
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>