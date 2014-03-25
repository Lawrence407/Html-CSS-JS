$(document).ready( function() {
	var v = false;
	$("button#vegOn").click( function () {
		if(v == false) {
			//$(".menu_entrees").children().detach();
			$f = $("li.fish").parent().parent().detach();
			//$("li.fish").empty();
			//$("h2").replaceWith("<h1>My Menu</h1>");
			$("li.hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
			$("li.meat").after("<li class='tofu'><em>tofu</em></li>");
			$meat = $("li.meat").detach();
			$(".tofu").parent().parent().addClass("veg_leaf");
			
			v = true;
		}
		
	});
	$("button#restoreMe").click( function () {
		if(v == true) {
			$(".menu_entrees li").first().before($f);
			$("li.portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			$(".tofu").each( function (i) {
				$(this).after($meat[i]);
			});
			$(".tofu").remove();
			
			v = false;
		}
		
	});
	
	
});