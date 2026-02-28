<?php
// บอกเบราว์เซอร์ว่าไฟล์นี้ส่งข้อมูลเป็น JSON
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

require 'db.php'; // เรียกไฟล์เชื่อมต่อฐานข้อมูลที่เราทำไว้มาใช้

try {
    // ดึงข้อมูลอาจารย์ทั้งหมดจากตาราง faculty
    $stmt = $conn->prepare("SELECT * FROM faculty");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // พ่นข้อมูลออกมาเป็นรูปแบบ JSON
    echo json_encode([
        "status" => "success",
        "data" => $result
    ]);

} catch(PDOException $e) {
    // ถ้ามี Error ให้พ่น error ออกมา
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>