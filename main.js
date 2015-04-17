$(document).on('ready', function() {

	$(".hide").hide();

	$(".edit-button").click(function(event){
		event.preventDefault();
		
		$(".hide").show();
	});

	var newName2 = function(){
		console.log($(".Name").val());
	};

	$(".sub-button").click(function(event){
		event.preventDefault();
		// CHANGE NAME
		var nameChange = ($(".Name").val());
		$(".newName").val(nameChange);

		// CHANGE BIO
		var bioChange = ($(".Bio").val());
		$(".newBio").val(bioChange);

		// CHANGE BOOK
		var booksChange = ($(".Books").val());
		$(".newBooks").val(booksChange);

		// CHANGE JSS
		var jsLibChange = ($(".jsLib").val());
		$(".newjsLib").val(jsLibChange);

		$(".hide").hide();



	// Name.val logs the value of the class "Name" from the input list
		
	});

  
});