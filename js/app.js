$(document).ready(function() {
	$( "li.item" ).hover(
		function() {
		$(this).append( "<button>X</button>" );
		$( ":button" ).click(function() {
		$(this).closest("li").remove();
		/*delete this whole list item*/
	});
	}, 
		function() {
		$(this).find( "button" ).remove();
	}
	);
});