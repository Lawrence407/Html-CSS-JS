$(document).ready(function() {
	$(".guess_box").click(checkForCode);
	function checkForCode() {
		var discount = Math.floor((Math.random()*5) + 5);
		var discount_msg = "<p>Your Discount is "+discount+"%</p>";
		//$(".guess_box p").remove();
		var hideCode = function() {
			var numRand = getRandom(4);
			$(".guess_box").each(function(index, value) {
				if(numRand == index) {
					$(this).append("<span id='has_discount'></span>");
					return false;
				}
			});
		}
		$(this).append(discount_msg);
		$(".guess_box").unbind("click");
		var total = multiply(4, 6);
		welcome("PinkingS " + total);
	}			
});

function getRandom(num) {
	var my_num = Math.floor(Math.random()*num);
	return my_num;
}



function welcome(name) {
	alert("Hello " + name);
}

function multiply(num1, num2) {
	var result = num1 * num2;
	return result;
}

function myFunc1() {
	$("div").hide();
}

var myFunc2 = function() {
	$("div").show();
}
