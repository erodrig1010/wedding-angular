/*============================== 
	- MAP JS (ICON MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function ($) {

	'use strict';

	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function () {
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		// Create an array of styles
		//=======================================================================================
		var styles = [
			{
				stylers: [
					{ hue: "#f98d8a" },
					{ saturation: -50 }
				]
			}
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,
			{ name: "Styled Map" });


		//DEFINE MAP OPTIONS
		//=======================================================================================
		var mapOptions = {
			zoom: 9.5,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: new google.maps.LatLng(39.117098, -77.730666),
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			//scaleControl: false,
			streetViewControl: true,
			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false,

		};

		//CREATE NEW MAP
		//=======================================================================================
		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================
		/*var marker = new google.maps.Marker({
			position: map.getCenter(),
					map: map,
			title: 'Click to zoom',
		icon: image
		});
	
	var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(35.441938, -97.432494),
					map: map,
			title: 'Click to zoom'
		});*/


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
			position: new google.maps.LatLng(39.117098, -77.730666),
			draggable: false,
			raiseOnDrag: false,
			icon: ' ',
			map: map,
			labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation" style="background-color:#f98d8a;"></div><div class="main-icon-text">Wedding</br>Venue</div></div>',
			labelAnchor: new google.maps.Point(88, 88),
			labelClass: "labels" // the CSS class for the label
		});

		var marker2 = new MarkerWithLabel({
			position: new google.maps.LatLng(38.986046, -77.429169),
			draggable: false,
			raiseOnDrag: false,
			icon: ' ',
			map: map,
			labelContent: '<div id="gift-marker" class="de-icon circle medium-size" style="background-color:#f98d8a;"><i class="fas fa-hotel"></i></i></div>',
			labelAnchor: new google.maps.Point(27, 27),
			labelClass: "labels" // the CSS class for the label
		});

		var marker3 = new MarkerWithLabel({
			position: new google.maps.LatLng(38.851008, -77.040146),
			draggable: false,
			raiseOnDrag: false,
			icon: ' ',
			map: map,
			labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#91CBD9;"><i class="fas fa-plane"></i></div>',
			labelAnchor: new google.maps.Point(27, 27),
			labelClass: "labels" // the CSS class for the label
		});

		var marker4 = new MarkerWithLabel({
			position: new google.maps.LatLng(38.952674, -77.456399),
			draggable: false,
			raiseOnDrag: false,
			icon: ' ',
			map: map,
			labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#91CBD9;"><i class="fas fa-plane"></i></div>',
			labelAnchor: new google.maps.Point(27, 27),
			labelClass: "labels" // the CSS class for the label
		});




		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = '' +
		'<div class="info-window-wrapper">'+
		'<h6 style="font-family: Raleway">Wedding Venue</h6>'+
		'<div class="info-window-desc"><strong>Shadow Creek Weddings & Events</strong></div>'+
		'<div class="info-window-desc">18090 Silcott Springs Rd, Purcellville, VA 20132</div>'+
		'</div>';

		var marker1_infowindow = new google.maps.InfoWindow({
			content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//OPEN INFO WINDOWS ON LOAD
		marker1_infowindow.open(map, marker1);

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function () {
			marker1_infowindow.open(map, marker1);
		});


		//INFO WINDOWS 2
		//=======================================================================================
		var contentString2 = '' +
		'<div class="info-window-wrapper">'+
		'<h6 style="font-family: Raleway">Hotel</h6>'+
		'<div class="info-window-desc"><strong>Best Western Dulles Airport Inn</strong></div>'+
		'<div class="info-window-desc">45440 Holiday Dr, Sterling, VA 20166</div>'+
		'</div>';

		var marker2_infowindow = new google.maps.InfoWindow({
			content: contentString2,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker2, 'click', function () {
			marker2_infowindow.open(map, marker2);
		});


		//INFO WINDOWS 3
		//=======================================================================================
		var contentString3 = '' +
		'<div class="info-window-wrapper">'+
		'<h6 style="font-family: Raleway">Airport</h6>'+
		'<div class="info-window-desc"><strong>Ronald Reagan Washington National Airport (DCA)</strong></div>'+
		'<div class="info-window-desc">Arlington, VA</div>'+
		'<div class="info-window-link"><a href="https://www.kayak.com/flight-routes/United-States-US0/Washington-Reagan-National-DCA" class="grey-link with-underline">Find Flights!</a></div>'
		'</div>';

		var marker3_infowindow = new google.maps.InfoWindow({
			content: contentString3,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker3, 'click', function () {
			marker3_infowindow.open(map, marker3);
		});


		//INFO WINDOWS 4
		//=======================================================================================
		var contentString4 = '' +
		'<div class="info-window-wrapper">'+
		'<h6 style="font-family: Raleway">Airport</h6>'+
		'<div class="info-window-desc"><strong>Washington Dulles International Airport (IAD)</strong></div>'+
		'<div class="info-window-desc">Dulles, VA</div>'+
		'<div class="info-window-link"><a href="https://www.kayak.com/flight-routes/United-States-US0/Washington-Dulles-Intl-IAD" class="grey-link with-underline">Find Flights!</a></div>'
		'</div>';

		var marker4_infowindow = new google.maps.InfoWindow({
			content: contentString4,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker4, 'click', function () {
			marker4_infowindow.open(map, marker4);
		});

		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker4_infowindow, 'closeclick', function () {
			window.setTimeout(function () {
				map.panTo(marker1.getPosition());
			}, 500);
		});


		//INFO WINDOWS 5
		//=======================================================================================
		// var contentString5 = '' +
		// 	'<div class="info-window-wrapper">' +
		// 	'<h6>TRAIN STATION</h6>' +
		// 	'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>' +
		// 	'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>' +
		// 	'</div>';

		// var marker5_infowindow = new google.maps.InfoWindow({
		// 	content: contentString5,
		// 	maxWidth: 200,
		// 	pixelOffset: new google.maps.Size(0, -10)
		// });

		// //ON MARKER CLICK EVENTS
		// google.maps.event.addListener(marker5, 'click', function () {
		// 	marker5_infowindow.open(map, marker5);
		// });

		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		// google.maps.event.addListener(marker5_infowindow, 'closeclick', function () {
		// 	window.setTimeout(function () {
		// 		map.panTo(marker1.getPosition());
		// 	}, 500);
		// });


		//INFO WINDOWS 6
		//=======================================================================================
		// var contentString6 = '' +
		// 	'<div class="info-window-wrapper">' +
		// 	'<h6>AIRPORT</h6>' +
		// 	'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>' +
		// 	'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>' +
		// 	'</div>';

		// var marker6_infowindow = new google.maps.InfoWindow({
		// 	content: contentString6,
		// 	maxWidth: 200,
		// 	pixelOffset: new google.maps.Size(0, -10)
		// });

		// //ON MARKER CLICK EVENTS
		// google.maps.event.addListener(marker6, 'click', function () {
		// 	marker6_infowindow.open(map, marker6);
		// });





		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function () {
			if (is_windowresize) {
				//map.setCenter(marker.getPosition());
				window.setTimeout(function () {
					map.panTo(marker1.getPosition());
				}, 500);
			}
			is_windowresize = false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);