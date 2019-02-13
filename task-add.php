<?php

	include 'database.php';

	if (isset($_POST["title"])) {

		$title = $_POST["title"];
		$description = $_POST["description"];

		$query = "INSERT INTO task(title, description) VALUES ('$title', '$description')";

		$result = mysqli_query($connection, $query);

		if (!$result) {
			die('Query Failed');
		}

		echo "<span class='green-text'>Task saved successfully!</span>";

	}

?>