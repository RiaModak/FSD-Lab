<?php
include 'db.php';
$id = $_GET['id'];

if(mysqli_query($conn, "DELETE FROM students WHERE id=$id")){
    // Redirect back to the list immediately
    header("Location: index.php"); 
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
?>