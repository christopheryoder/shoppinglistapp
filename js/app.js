/*Wait for the document to load before running*/
$(document).ready(function() {

    /*When the user releases the 'enter' key while in the text input box*/
    $('input:text').keyup(function(event){
            if(event.keyCode == 13) {

                /*get user input*/
                var userinput = $(this).val();

                /*Add a list item with a checkbox with the user input as a label immediately before this text box' list item*/
                $(this).closest("li").before("<li class='item'><input type='checkbox'><label>" + userinput + "</label></li>");

                /*delete contents of text box after user hits enter*/
                $(this).val('');
            };
    });

    /*When the user clicks the add button while in the text input box*/
    $('#add').click(function() {

        /*get user input*/
        var userinput = $(this).siblings('input:text').val();

        /*Add a list item with a checkbox with the user input as a label immediately before this text box' list item*/
        $(this).closest("li").before("<li class='item'><input type='checkbox'><label>" + userinput + "</label></li>");

        /*delete contents of text box after user clicks 'add'*/
        $(this).siblings('input:text').val('');
    });
});

/*When mouse enters an li with the item class:*/
$(document).on("mouseenter", "li.item", function(){

	/*add an X button after that item*/
    $(this).append("<button id='x'>X</button>");
 
	/*When the user clicks on an X button...*/
	$( "#x" ).click(function() {

	/*Remove this list item*/
	$(this).closest("li").remove();
        });
});
 
	/*when mouse leaves an li with the item class:*/
$(document).on("mouseleave", "li.item", function(){

    /*remove the X button*/
    $(this).find( "button" ).remove();
});