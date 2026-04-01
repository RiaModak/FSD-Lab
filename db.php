<?php
$conn = mysqli_connect("localhost:3307", "root", "", "portfolio");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>