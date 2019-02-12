<?php

	$connection = mysqli_connect(
		"localhost",
		"root",
		"",
		"ajax-task-app"
	);

	if(!$connection) {
		die('Connection Error ');
	}

?>