<?php

	include 'database.php';

	$query = "SELECT * FROM task";

	$result = mysqli_query($connection, $query);

	if (!$result) {
		die('Query failed' . mysqli_error($connection));
	}

	$json = [];

	while($row = mysqli_fetch_array($result)) {

		$json[] = array(
			"title" => $row["title"],
			"description" => $row["description"],
			"id" => $row["id"]
		);

	}

	echo json_encode($json);

?>