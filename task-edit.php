<?php

	include 'database.php';

	if (isset($_POST["title"])) {

		$id = $_POST["id"];
		$title = $_POST["title"];
		$description = $_POST["description"];
		
		$query = "UPDATE task SET title = '$title', description = '$description' WHERE id = $id";

		$result = mysqli_query($connection, $query);

		if (!$result) {
			die("Query failed " . mysqli_error($connection));
		} else {
			echo "Task updated successfully";
		}

	}

?>