$(document).ready( function() {
	$('#datepicker').datepicker({
		//beforeShowDay: $.datepicker.noWeekends
		//stepMonths: 3
		changeMonth: true,
		changeYear: true
	});
	
	$('#type_select').buttonset();
	
	$("button:submit").button();
	
	$('#slide_dist').slider({
		value:0,
		min: 0,
		max: 500,
		step: 10,
		orientation: 'horizontal',
		slide: function( event, ui ){
			$("#distance").val(ui.value);
		}
	});
	
	$('#slide_weight').slider({
		value:0,
		min: 0,
		max: 5000,
		step: 5,
		orientation: 'horizontal',
		slide: function( event, ui ){
			$("#weight").val(ui.value);
		}
	});
	
	$('#slide_height').slider({
		value:0,
		min: 0,
		max: 20,
		step: 1,
		orientation: 'horizontal',
		slide: function( event, ui ){
			$("#height").val(ui.value);
		}
	});
	
	$('#slide_latitude').slider({
		value:0,
		min: -90,
		max: 90,
		step: 0.00001,
		orientation: 'horizontal',
		slide: function( event, ui ){
			$("#latitude").val(ui.value);
		}
	});
	
	$('#slide_longitude').slider({
		value:0,
		min: -180,
		max: 180,
		step: 0.00001,
		orientation: 'horizontal',
		slide: function( event, ui ){
			$("#longitude").val(ui.value);
		}
	});
	
	$("#red, #green, #blue").slider({
		orientation: "horizontal",
		range: "min",
		max: 255,
		value: 127,
		slide: refreshSwatch,
		change: refreshSwatch
	});
	
	function refreshSwatch(){
		var red = $("#red").slider("value");
		var green = $("#green").slider("value");
		var blue = $("#blue").slider("value");
		var hex = hexFromRGB( red, green, blue );
		var my_rgb = "rgb("+red+","+green+","+blue+")";
		$("#swatch").css("background-color","#"+hex);
		$("#red_val").val(red);
		$("#blue_val").val(blue);
		$("#green_val").val(green);
		$("#color_val").val("#"+hex);
	}
	
	 function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  
  
	$("#frmAddSighting").submit(function(){
		return false;
	});
	
	$("#btnSave").click(function(){
		var data = $("#frmAddSighting :input").serializeArray();
		
		$.post($("#frmAddSighting").attr('action'), data, function(json){
			if(json.status == "fail") {
				alert(json.message);
			} else if (json.status == "success") {
				alert(json.message);
			} else {
				alert("Nothing Happened");
			}
		}, "json");
	});
});
























