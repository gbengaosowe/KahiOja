$('#add').click(function(){
	var userInput = $("#stock").val();
    $('#Purchased ul').append("<li><input type='checkbox' id='checked'>" + 
		userInput + "<input type='submit' id='add' value= 'Delete' ></li>");
	});
	
});