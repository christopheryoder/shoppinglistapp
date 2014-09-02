/*Wait for the document to load before running*/

$(document).ready(function() {
	/*When the user presses the 'enter' key while in the text input box*/

	$('input:text').keyup(function(event){
		if(event.keyCode == 13) {

			/*get user input*/

			var userinput = $(this).val();

			/*Add a list item with a checkbox with the user input as a label immediately before this text box' list item*/

			$(this).closest("li").before("<li class='item'><input type='checkbox'><label>Butter</label></li>");
		};
	});

	/*When mouse enters an li with the item class:*/

	$( "li.item" ).mouseenter(function() {

		/*add an X button after that item*/

		$(this).append("<button>X</button>");

		/*when user clicks on this button*/

		$( ":button" ).click(function() {

		/*delete this whole list item*/

		$(this).closest("li").remove();
		});
	});

	/*when mouse leaves an li with the item class:*/

	$( "li.item" ).mouseleave(function() {

			/*remove the X button*/

			$(this).find( "button" ).remove();
	});
});