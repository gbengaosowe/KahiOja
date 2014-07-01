$(document).ready(function(){


	var userInput = $("#stock").val();

	$('#add').click(function(){
		var userInput = $("#stock").val();
		$('#Purchased ul').append("<li><input type='checkbox' id='checked'>" + 
			userInput + "<button type='button' id='delete'>Delete</button></li>");
		});
	
	$('body').on('click','#delete', function(){
		$(this).parent().remove();
		});

	
});





