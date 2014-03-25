$(document).ready( function () {
	var headclix = 0, eyeclix=0, noseclix=0,mouthclix=0;
	//lightning_one(4000);
	//lightning_two(5000);
	//lightning_three(7000);
	goLightning();
	
	window.onfocus = goLightning;
	window.onblur = stopLightning;
	var int1,int2,int3;
	
	function goLightning() {
		int1 = setInterval( function() {
			lightning_one()
			},
			4000
		);
		int2 = setInterval( function() {
			lightning_two()
			},
			5000
		);
		int3 = setInterval( function() {
			lightning_three()
			},
			7000
		);
	}
	
	function stopLightning() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	}
	
	//$("p").animate({letterSpacing:"15px"},2000);
	var clix = [0, 0, 0, 0];
	
	$("div#head").click( function() {
		moveMe(0,this);
	});
	$("div#eye").click( function() {
		moveMe(1, this);
	});
	$("div#nose").click( function() {
		moveMe(2, this);
	});
	$("div#mouth").click( function() {
		moveMe(3, this);
	});
	
	function moveMe(i, obj) {
		if(clix[i] < 9) {
			$(obj).animate({left:"-=367px"},2000);
			clix[i] = clix[i]+1;
		} else {
			clix[i] = 0;
			$(obj).animate({left:"0px"},2000);
		}
	}
	
	var w = 367;
	var m = 10;
	
	$("#btnRandom").click( randomize );
	$("#btnReset").click( reset );
	
	function randomize () {
			$(".face").each(function(index){
				var target_position = getRandom(m-1);
				//alert(target_position);
				var current_position = clix[index];
				clix[index] = target_position;
				$(this).animate({left:-target_position*w+"px"},500);
				//if(target_position > current_position) {
				//	$(this).animate({left:"-="+(target_position-current_position)*w+"px"},500);
				//}
				//else if(target_position < current_position) {
				//	$(this).animate({left:"+="+(current_position-target_position)*w+"px"},500);
				//}
			});
	};
	
	function reset() {
		$(".face").each(function(index){
			clix[index] = 0;
			$(this).animate({left:"0px"},500);
		}); 
	}
	

});

function getRandom(num) {
	var my_random_num = Math.floor(Math.random()*num);
	return my_random_num;
}

	function lightning_one(t) {
		$("#lightning1").fadeIn(250).fadeOut(250);
		setTimeout("lightning_one()", t);
	};
	function lightning_two(t) {
		$("#lightning2").fadeIn(250).fadeOut(250);
		setTimeout("lightning_two()", t);
	};
	function lightning_three(t) {
		$("#lightning3").fadeIn(250).fadeOut(250);
		setTimeout("lightning_three()", t);
	};




















