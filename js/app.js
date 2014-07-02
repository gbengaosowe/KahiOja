$(document).ready(function(){


	var userInput = $("#stock").val();

	$('#add').click(function(){
		var userInput = $("#stock").val();
		$('#basket ul').append("<li><input type='checkbox' id='checked'>" + 
			userInput + "<button type='button' id='delete'>Delete</button></li>");
			
		});
	
	$('body').on('click','#delete', function(){
		$(this).parent().remove();
		});
		
		
	$('#basket ul').on('click', 'li', '#checked', function(){
		//alert('cool');
		$('#purchased ul').append(this).remove('#delete');
		});
		
});





