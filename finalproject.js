$(document).ready(function(){
	$('.photo').click(function(){
		$(this).fadeTo('slow', 1, function(){
			console.log("Faded");
			})
		.delay(1500)
		.fadeTo('slow',0,function(){
			console.log("Fade Out");
		});
	});
});
