$(document).ready(function(){
	var map;

	
	initialize();

	
	function initialize() {
		var latlng = new google.maps.LatLng(39.5427,116.2317);
		var mapOpts = {
			zoom : 13,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.HYBRID
		};
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOpts);
		getAllSightings();
	}

function getAllSightings() {
	$.getJSON("ch10.php?action=getAllSightings",function(json){
	alert(json.sightings.length);
		if(json.sightings.length > 0) {
			$("#sight_list").empty();
			$.each(json.sightings, function(){
				var info = 'Date: '+this['date']+', Type: '+this['type'];
				var $li = $("<li />");
				$li.html(info);
				$li.addClass("sightings");
				$li.attr('id', this['id']);
				$li.click(function(){
					getSingleSighting(this['id']);
				});
				$li.appendTo("#sight_list");
			});
		}
	});
}

function getSingleSighting(id) {
	$.getJSON("ch10.php?action=getSingleSighting&id="+id,function(json) {
		if(json.sightings.length > 0) {
			$.each(json.sightings, function() {
				var loc = new google.maps.LatLng(this['lat'], this['long']);
				var my_marker = new google.maps.Marker({
					position:loc,
					map:map,
					title:title['type']
				});
				map.setCenter(loc, 20);
			});
		}
	});
}
	
});







































