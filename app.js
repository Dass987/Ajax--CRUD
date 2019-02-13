$(function () {

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
			title: $("#title").val(),
			description: $("#description").val()
		};

		$.post("task-add.php", postData, response => {
			
			$("#task-form").trigger('reset');
			$("#feedback-message").html(response);
			
			fetchTasks();

		});

		e.preventDefault();
	});

	fetchTasks();

	$(document).on("click", ".task-delete", () => {
		let element = $(this).parent().siblings().eq(0) .text();
		//
		console.log(element);
	});

});

function fetchTasks() {
	
	$.ajax({
		url: 'task-list.php',
		type: 'GET',
		success: response => {

			let tasks = JSON.parse(response);
			let template = '';

			tasks.forEach(task => {
				template += `<tr>
					<td>${task.id}</td>
					<td><a>${task.title}</a></td>
					<td>${task.description}</td>
					<td>
						<button class="btn waves-effect waves-light red darken-1 task-delete"><i class="material-icons">delete</i></button>
					</td>
				</tr>`;
			});

			$("#table-tasks-body").html(template);

		}
	});

}