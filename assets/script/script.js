$(document).ready(function() {	
	$( ".widget h2" ).click(
		function() {
			$(this).parent().toggleClass('active');
		}
	);	  	
});
