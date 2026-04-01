<?php
include 'db.php';
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];

$query = "INSERT INTO students(name, email, course) VALUES('$name', '$email', '$course')";

if(mysqli_query($conn, $query)){
    // This line sends the user back to the main page automatically!
    header("Location: index.php"); 
} else {
    echo "Error: " . mysqli_error($conn);
}
?>