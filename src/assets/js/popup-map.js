/*============================== 
	- MAP JS (DEFAULT + IMAGE + ICON MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */
	
(function($) {

'use strict';		
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
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
   			{name: "Styled Map"});
			
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 16,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(35.441921, -97.432528),
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
  		var map = new google.maps.Map(document.getElementById('popup-map-canvas'), mapOptions);
		
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
       		position: new google.maps.LatLng(35.441921, -97.432528),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.440033, -97.437056),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="gift-marker" class="de-icon circle medium-size" style="background-color:#fc9e9e;"><i class="de-icon-gift"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.441899, -97.439043),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="bus-marker" class="de-icon circle medium-size" style="background-color:#e9c24c;"><i class="de-icon-bus"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.443866, -97.437573),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="food-marker" class="de-icon circle medium-size" style="background-color:#bfd730;"><i class="de-icon-tree"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.443835, -97.428649),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="train-marker" class="de-icon circle medium-size" style="background-color:#8fcbda;"><i class="de-icon-subway"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.439997, -97.427630),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
			
  
		
		
		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>CEREMONY</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker1_infowindow = new google.maps.InfoWindow({
      		content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//OPEN INFO WINDOWS ON LOAD
  		marker1_infowindow.open(map,marker1);
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function() {
			marker1_infowindow.open(map,marker1);	
  		});
		
		
		//INFO WINDOWS 2
		//=======================================================================================
		var contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>GIFT STATION</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker2_infowindow = new google.maps.InfoWindow({
      		content: contentString2,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker2, 'click', function() {
			marker2_infowindow.open(map,marker2);	
  		});
		
		
		//INFO WINDOWS 3
		//=======================================================================================
		var contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>BUS STOP</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker3_infowindow = new google.maps.InfoWindow({
      		content: contentString3,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker3, 'click', function() {
			marker3_infowindow.open(map,marker3);	
  		});	
		
		
		//INFO WINDOWS 4
		//=======================================================================================
		var contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>GARDEN</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker4_infowindow = new google.maps.InfoWindow({
      		content: contentString4,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker4, 'click', function() {
			marker4_infowindow.open(map,marker4);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker4_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		
		//INFO WINDOWS 5
		//=======================================================================================
		var contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>TRAIN STATION</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker5_infowindow = new google.maps.InfoWindow({
      		content: contentString5,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker5, 'click', function() {
			marker5_infowindow.open(map,marker5);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker5_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		
		//INFO WINDOWS 6
		//=======================================================================================
		var contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>AIRPORT</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker6_infowindow = new google.maps.InfoWindow({
      		content: contentString6,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker6, 'click', function() {
			marker6_infowindow.open(map,marker6);	
  		});
		
		
		
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}


	// OPEN MAP ON CLICK
	//=======================================================================================
	$(document).ready(function() {    
    	$('#popup-map-button').on('click', function(e){
			e.preventDefault();
			$(this).next().fadeIn();
        	initialize();  //Initialize map function
    	});
	});
	
})(jQuery);