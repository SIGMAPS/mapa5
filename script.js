//toggle for menus
$(document).ready(function(){
	$(".sub-btn").click(function(){
		$(this).next(".sub-menu").slideToggle();
	});
});

//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
	menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove("active");
});

//map options
let mapOptions = {
	center: [42.860, 3.472],
	zoom:6,
	zoomControl: false
}

//create map
var map = L.map('map',mapOptions)

let layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
layer.addTo(map);

var Pportos = $.getJSON("Portos.json");
Pportos.then(function(data){
	var Porto = L.geoJson(data, {
		filter: function(feature, layer){
			return feature.properties.NomePorto == "Porto"
		}
	});

	var Lisboa = L.geoJson(data, {
		filter: function(feature, layer){
			return feature.properties.NomePorto == "Lisboa"
		}
	});



//toggle for Layer Portos
$(".Menu-Porto").click(function(){
	map.addLayer(Porto)
	map.removeLayer(Lisboa)
});

$(".Menu-Lisboa").click(function(){
	map.addLayer(Lisboa)
	map.removeLayer(Porto)
});

});
