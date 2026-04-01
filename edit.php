<?php 
include 'db.php'; 

// 1. IF THE FORM IS SUBMITTED (Update the data)
if(isset($_POST['update_btn'])){
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];

    $update_query = "UPDATE students SET name='$name', email='$email', course='$course' WHERE id=$id";
    
    if(mysqli_query($conn, $update_query)){
        header("Location: index.php"); // Redirect back to show changes
        exit();
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
}

// 2. IF THE PAGE IS OPENED VIA THE LINK (Fetch the data to show in form)
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $result = mysqli_query($conn, "SELECT * FROM students WHERE id=$id");
    $row = mysqli_fetch_assoc($result);
} else {
    // If no ID is found at all, go back to index
    header("Location: index.php");
    exit();
}
?>

<html>
<body>
    <h2>Edit Student Details</h2>
    <form action="edit.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
        
        Name: <input type="text" name="name" value="<?php echo $row['name']; ?>" required><br><br>
        Email: <input type="text" name="email" value="<?php echo $row['email']; ?>" required><br><br>
        Course: <input type="text" name="course" value="<?php echo $row['course']; ?>" required><br><br>
        
        <input type="submit" name="update_btn" value="Save Changes">
    </form>
    <br>
    <a href="index.php">Cancel</a>
</body>
</html>