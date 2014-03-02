$(document).ready(function() {
	$(".guess_box").click( function() {
		var discount = Math.floor((Math.random()*5) + 5);
		var discount_msg = "<p>Your Discount is "+discount+"%</p>";
		//$(".guess_box p").remove();
		$(this).append(discount_msg);
		$(".guess_box").unbind("click");
	});//yes this is a comment				
});
