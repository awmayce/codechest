$(document).ready(function() {
	// Write an answer
	$("#post").click(function() {
		var value = $(".write-answer textarea").val();
		if(value == '') {
			toastr.error('No answer given', 'Error');
		}
		else {
			var currentTime = new Date();
			var hours = currentTime.getHours();
			var minutes = currentTime.getMinutes();
			var d = new Date();
			var year = d.getFullYear();
			var month = d.getMonth()+1;
			var day = d.getDate();
			$(".answers").append('<div class="answer"><div class="vote"><ul><li><a><span class="glyphicon glyphicon-chevron-up"></span></a></li><li class="current">0</li><li><a><span class="glyphicon glyphicon-chevron-down"></span></a></li></ul></div><p>'+value+'</p><span>Anonymous | '+day+'/'+month+'/'+year+ ' ' +hours+':'+minutes+'</span></div></div>');
		}
		$(".write-answer textarea").val('');
	});

	// Vote Up
	$(".answers").on('click', '.vote .glyphicon-chevron-up', function() {
		var currentList = $(this).closest("ul");
		var current = $(".current", currentList);
		var currentScore = $(".current", currentList).text();
		var newScore = parseInt(currentScore)+1;
		
		$(current).html(newScore);
	});

	$(".answers").on('click', '.vote .glyphicon-chevron-down', function() {
		var currentList = $(this).closest("ul");
		var current = $(".current", currentList);
		var currentScore = $(".current", currentList).text();
		var newScore = parseInt(currentScore)-1;
		
		$(current).html(newScore);
	});

	// Ask Question
	$("#ask-question #submit-question").on('click', function() {
		/*$("#ask-question input").val('');
		questionPrevious();
		toastr.success('Your Question has been posted', 'Success');*/
		window.location.reload()
	});

	// Chatroom
	$("#chatroom form").submit(function() {
		event.preventDefault()
		$("#chatroom .content-box.big").append('<div class="post user"><span><a href="#" title="Ayce Allchorn">Ayce Allchorn</a></span><p>' + $("#chatroom form input").val() + '</p></div>');
		$("#chatroom form input").val('');
		$("#chatroom .content-box.big").animate({ scrollTop: $("#chatroom .content-box.big").height() }, "slow");
	})


});