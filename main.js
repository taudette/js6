$(document).on('ready', function() {

	$(".hide").hide();

	$(".edit-button").click(function(event){
		event.preventDefault();
		
		$(".hide").show();
	});

	$(".sub-button").click(function(event){
		event.preventDefault();
		console.log("test;");
		console.log($(".Name").val());
		$("newname").val("hello");


		// Name.val logs the value of the class "Name" from the input list
		
	});

  
});