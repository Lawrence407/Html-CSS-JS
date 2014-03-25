
$(document).ready(function(){

	
	var repeat = true;
	
	var FREQ = 10000;
	
	//getXMLRacers();
	showFrequency();
	getDBRacers();
	startAJAXcalls();
	
	$("#btnStop").click( function() {
		repeat = false;
		$("#freq").html("Update paused.");
	});
	
	$("#btnStart").click( function() {
		repeat = true;
		startAJAXcalls();
		showFrequency();
	});
	
	function startAJAXcalls() {
		if(repeat) {
			setTimeout(function() {
				getDBRacers();
				//getXMLRacers();
				//showFrequency();
				startAJAXcalls();
				},
				FREQ
			);
		}
	}
	
	function getDBRacers(){
		$.getJSON("service.php?action=getRunners",function(json){
			if(json.runners.length > 0) {
				$('#finishers_m').empty();
				$('#finishers_f').empty();
				$('#finishers_all').empty();
				$.each(json.runners, function(){
					var info = '<li>Name: ' + this['fname'] + ' ' + this['lname'] + '. Time: ' + this['time'] + '</li>';
				if(this['gender'] == "m") {
					$("#finishers_m").append(info);
				} else {
					$("#finishers_f").append(info);
				}
				$("#finishers_all").append(info);
				});
			}
			//alert(json.runners.length);
		});
		getTimeAjax();
	}
	
	function showFrequency(){
			$("#freq").html("Page refreshes every " + FREQ/1000 + " second(s).");
	}

	$("#btnSave").click( function() {
		var data = $("#addRunner :input").serializeArray();
		//alert(data);
		$.post($("#addRunner").attr('action'), data, function(json){
			if(json.status == 'fail') {
				alert(json.message);
			}
			if(json.status == 'success') {
				alert(json.message);
				clearInputs();
			}
		},"json");
	});
	
	function getXMLRacers() {
		$.ajax({
			url: "finishers.xml",
			cache: false,
			dataType: "xml",
			success: function(xml){
				$("#finishers_m").empty();
				$("#finishers_f").empty();
				$("#finishers_all").empty();
				$(xml).find("runner").each(function(){
					var info = '<li>Name: ' + $(this).find("fname").text() + ' ' + $(this).find('lname').text() + '. Time: ' + $(this).find('time').text() + '</li>';
					if($(this).find("gender").text() == "m") {
						$("#finishers_m").append(info);
					} else {
						$("#finishers_f").append(info);
					}
					$("#finishers_all").append(info);
				});
				getTimeAjax();
			}
		});
	}
	
	function clearInputs(){
		$("#addRunner :input").each( function() {
			$(this).val('');
		});
	}
	
	$("#addRunner").submit( function(){
		return false;
	});
	
	function getTimeAjax(){
		$("#updatedTime").load("ch08.php");
	}
	
	function getTime(){
        var a_p = "";
        var d = new Date();
        var curr_hour = d.getHours();
        
        (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
        (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
        (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;
        
        var curr_min = d.getMinutes().toString();
        var curr_sec = d.getSeconds().toString();
        
        if (curr_min.length == 1) { curr_min = "0" + curr_min; }
        if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; } 
        
        $('#updatedTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p );
    }
});
