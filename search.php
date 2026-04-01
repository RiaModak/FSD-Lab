<?php
include 'db.php';

if(isset($_POST['search_name'])) {
    $search = $_POST['search_name'];
    
    // We use "LIKE" and "%" to find partial matches (e.g., "Jo" finds "John")
    $query = "SELECT * FROM students WHERE name LIKE '%$search%'";
    $result = mysqli_query($conn, $query);

    echo "<h2>Search Results for: " . htmlspecialchars($search) . "</h2>";
    echo "<table border='1'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
            </tr>";

    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>
                    <td>".$row['name']."</td>
                    <td>".$row['email']."</td>
                    <td>".$row['course']."</td>
                  </tr>";
        }
    } else {
        echo "<tr><td colspan='3'>No students found.</td></tr>";
    }
    echo "</table>";
    echo "<br><a href='index.php'>Go Back to List</a>";
}
?>