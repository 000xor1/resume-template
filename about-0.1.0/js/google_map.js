/*

Google map javascript API.

*/

function initMap() {
	// Latitude and longitude.
	var myLatLng = {lat: 37.5503592, lng: 127.0721772};

	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 15,
	    center: myLatLng
	});

	var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	});
}