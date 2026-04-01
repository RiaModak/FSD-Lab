<?php include 'db.php'; ?>
<html>
<body>
<h2>Add Student</h2>
<form action="insert.php" method="post">
Name: <input type="text" name="name"><br><br>
Email: <input type="text" name="email"><br><br>
Course: <input type="text" name="course"><br><br>
<input type="submit" value="Add">
</form>
<hr>
<h3>Search Student</h3>
<form action="search.php" method="POST">
    <input type="text" name="search_name" placeholder="Enter name to search..." required>
    <input type="submit" value="Search">
</form>
<hr>
<hr>
<h3>Student List</h3>
<table border="1">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Actions</th>
    </tr>
    <?php
    $result = mysqli_query($conn, "SELECT * FROM students");
    while($row = mysqli_fetch_assoc($result)){
        echo "<tr>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['course'] . "</td>";
        echo "<td>
                <a href='edit.php?id=" . $row['id'] . "'>Edit</a> | 
                <a href='delete.php?id=" . $row['id'] . "'>Delete</a>
              </td>";
        echo "</tr>";
    }
    ?>
</table>
</body>
</html>
