<?php
include 'db.php';
$id = $_POST['id'];
$name = $_POST['name'];

// Update the record
if(mysqli_query($conn, "UPDATE students SET name='$name' WHERE id=$id")){
    // Redirect back to the main list to see the changes
    header("Location: index.php");
} else {
    echo "Error: " . mysqli_error($conn);
}
?>