function initMap() {
	var uluru = {lat: 42.0324025, lng: -87.74162460000002};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}