<?php

	include 'database.php';

	if (isset($_POST['id'])) {
		
		$id = $_POST['id'];

		$query = "SELECT * FROM task WHERE id = $id";

		$result = mysqli_query($connection, $query);

		if (!$result) {
			die("Query failed " . mysqli_error($connection));
		} else {
			
			$json = array();

			while($row = mysqli_fetch_array($result)) {
				$json[] = array(
					"title" => $row["title"],
					"description" => $row["description"],
					"id" => $row["id"]
				);
			}

			echo json_encode($json);

		}

	}

?>