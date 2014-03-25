$(document).ready(function() {
	$(".guess_box").click(checkForCode);
	var test = "test begin->";
	function checkForCode() {
		test = test + "checkForCode->";
		var discount;
		if($.contains(this, document.getElementById("has_discount"))) {
			var my_num = getRandom(5);
			discount = "<p>Your discount is "+my_num+"%</p>";
		}
		else {
			discount = "<p>Sorry, no discount this time!</p>";
		}	
		$(this).append(discount);
		$(".guess_box").unbind("click");
	}
	//alert("test");
	hideCode();
	var hideCode = function() {
		test = test + "hideCode->";
		var numRand = getRandom(4);
		alert("Hello world "+numRand);
		$(".guess_box").each(function(index, value) {
			if(numRand == index) {
				$(this).append("<span id='has_discount'></span>");
				return false;
			}
		});
	}
	alert("iiiii"+test);
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
