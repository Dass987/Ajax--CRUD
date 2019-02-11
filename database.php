<?php

	$connection = mysqli_connect(
		"localhost",
		"root",
		"",
		"ajax-task-app"
	);

	if($connection) {
		echo "DB is connected";
	}

?>