$(function () {
	console.log("Hello world!");
	$('.sidenav').sidenav();


	$("#search").keyup(() => {
		
		let search = $("#search").val();

		if (search) {
			$.ajax({
				url: 'task-search.php',
				type: 'POST',
				data: { search },
				success: response => {

					let tasks = JSON.parse(response);
					let template = "";

					if (tasks.length === 0) {
						template = `<li>
							Nothing found
						</li>`;
					} else {

						tasks.forEach(task => {
							template += `<li>
								${task.title}
							</li>`;
						});

					}
					
					$("#container").html(template);
					$("#results-zone").show();

				}
			});
		} else {
			$("#results-zone").hide();
		}

	});

	$("#task-form").submit(e => {

		const postData = {
			name: $("#title").val(),
			description: $("#description").val()
		};

		$.post("task-add.php", postData, response => {
			console.log(response);
		});

		e.preventDefault();
	});
	
});