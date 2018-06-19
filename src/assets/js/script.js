/*============================== 
	- MAIN SCRIPT JS
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

/*---------------------- 
	Script Guide
------------------------
01. BROWSER AGENT FUNCTION
	01.1 Check CHROME (Mobile / Tablet)
	01.2 Check IOS
	01.3 Check FIREFOX
	01.4 Check IE (< IE10)
	01.5 Check IE11
	01.6 Check IE11 (Not Windows Phone)
	01.7 Check IE10
	01.8 Check IE9
	01.9 Check Safari/Chrome Mac

02. OTHER FUNCTION AND CLASS
	02.1 Fullscreen Class
	02.2 Hide All Animation Class
	
03. PRELOAD
	03.1 Navigation Menu
		03.1.1 Waypoint Sticky Navbar
		03.1.2 Waypoint OnePage Nav - Active Class	
	03.2 Gallery - Masonry	
	03.3 Stellar Parallax
	03.4 Waypoint Animate CSS
	
04. MENU	
	04.1 Menu Active Class (Multipage)
	04.2 Smooth Scroll (Onepage)
	04.3 Mobile Menu
	04.4 Double Tap Drop Down Menu	

05. SLIDE
	05.1 Slide Image (Background Position)	
	05.2 Slide Effect
	05.3 Slide Video
	05.4 HTML Audio

06. ELEMENT
	06.1 Photo Item
	06.2 Countdown
	06.3 Gift Carousel
	06.4 Interest Places Carousel
	06.5 Events Carousel
	06.6 Smooth Scroll Link
	06.7 Magnific Popup
		06.7.1 Magnific Zoom
		06.7.2 Magnific Zoom Gallery
		06.7.3 Magnific Ajax	
	06.8 Icon
	06.9 Popup Video

07. RSVP
	07.1 Custom Checkbox
	07.2 Custom Radio
*/
		
		
(function($) {

'use strict';	
	
	$(document).ready(function() {
		
	// 01. BROWSER AGENT FUNCTION		
	//==================================================================================
	
	// 01.1 Check Chrome (Mobile / Tablet)
	//----------------------------------------------------------------------------------
	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0){
				return 1;
			}
		}
	}
	
	// 01.2 Check IOS
	//----------------------------------------------------------------------------------
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}
	
	// 01.3 Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// 01.4 Check IE (< IE10)
	//----------------------------------------------------------------------------------
	var isIE = function isIE() {
 		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// 01.5 Check IE11
	//----------------------------------------------------------------------------------
	var isIE11 = function isIE11() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// 01.6 Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	// 01.7 Check IE10
	//----------------------------------------------------------------------------------
	var isIE10 = function isIE10() {
 		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
   		 	return 1;
		}
	}
	
	// 01.8 Check IE9
	//----------------------------------------------------------------------------------
	var isIE9 = function isIE9() {
 		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
   		 	return 1;
		}
	}
	
	// 01.9 Check Safari/Chrome Mac
	//----------------------------------------------------------------------------------
	var isSafari = function isSafari() {
	 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
   		 	return 1;
		}
	}
	
	
	// 02. OTHER FUNCTION AND CLASS	
	//=============================================================================================================================================
	//=============================================================================================================================================
	//=============================================================================================================================================
	
	// 02.1 Fullscreen Class
	//================================================================================
	var fullscreen = function(){
		var fheight = $(window).height();
		var fullscreen_el = $('.fullscreen');
		
		if (device.mobile() && device.landscape() && $(window).width() <= 768){
			fullscreen_el.css("height","425px");
		}
		else
		{
			fullscreen_el.css("height",fheight);	
		}
	}	

	//Execute on load
	fullscreen();
		
	//Execute on window resize
	$(window).resize(function() {	
		fullscreen();	
	});
	
	
	// 02.2 Hide All Animation Class
	//================================================================================
	// Waypoint will animate it later (03.4 Waypoint Animate CSS)
	if( !device.tablet() && !device.mobile() && !isIE9() ) {
		$('.animation').css({
			visibility: 'hidden'
		});	
	}
	
	
	// 03. PRELOAD
	//=============================================================================================================================================
	//=============================================================================================================================================
	//=============================================================================================================================================
	Pace.on('done', function () {
		$('#preloader').hide();
	});
	
	Pace.on('hide', function () {
			
		// 03.1 Navigation Menu
		//================================================================================
		
		// 03.1.1 Waypoint Sticky Navbar
		//------------------------------------------------------------------------------		
		if ($("#nav-bar").hasClass("sticky-nav")){
			
			var navbar_el = $("#nav-bar");
			
			// Top Bar
			if (navbar_el.hasClass("top-bar")){
						
				var nav_header_waypoint = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							navbar_el.addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							navbar_el.addClass("stick-it");
						}
					}
					else {
						navbar_el.removeClass("stick-it animated fadeInDownBig");
					}
				
				}, {
  					offset:'-100%'
				});
				
			}
			
			// Bottom Bar
			else if  (navbar_el.hasClass("bottom-bar")){
				
				var waypoints = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							navbar_el.addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							navbar_el.addClass("stick-it");
						}
					}
					else if (direction === 'up') {
						navbar_el.removeClass("stick-it animated fadeInDownBig");
					}
						
				}, {
  					offset:'-90px'
				});		
			}
			
		}
		
		// 03.1.2 Waypoint OnePage Nav - Active Class
		// -----------------------------------------------------------------------------
		if ($("nav ul#nav-menu").hasClass("nav-smooth-scroll")){
			var main_menu = $("nav ul#nav-menu");
			
			//Slider Section
			var slider_waypoint = $('#main-slider').waypoint(function(direction) {
				
				main_menu.find("a").each(function(){				
					$(this).removeClass("active");
				});	
				
				main_menu.find("a").first().addClass("active");		
						
    		},{offset: '-200px'});
		
			//Other Section
			var section_waypoint = $('#content section').waypoint(function(direction) {
				
				var $thisID = "#" + this.element.id;
			
                main_menu.find("a").each(function(){						
					if ($thisID == $(this).attr("href")){
						$(this).addClass("active").parent().siblings().find("a").removeClass("active");
					}
				});          
				
				
    		},{offset: '-20px'});
		}	
				
		
		// 03.2 Gallery - Masonry
		//================================================================================
		if ($("#masonry-gallery").length){
			var $gallery = $('#masonry-gallery');
			
			if (device.tablet() || device.mobile()) {
				$gallery.masonry({
					columnWidth: ".grid-sizer",
					itemSelector: ".masonry-col",
					gutter: ".gutter-sizer",
					transitionDuration: 0,
				});
			}
			else
			{
				$gallery.masonry({
					columnWidth: ".grid-sizer",
					itemSelector: ".masonry-col",
					gutter: ".gutter-sizer",
					transitionDuration: "1s",
				});
			}
		}
		
		// 03.3 Stellar Parallax
		//================================================================================
	 	if( !device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isIE11() && !isSafari() ) {
			$(".image-divider").css("background-attachment","fixed");
		 	$(window).stellar({
			 	horizontalScrolling: false,
				responsive: true,
		 	});
	 	}
		
		// 03.4 Waypoint Animate CSS
		//================================================================================
		if( !device.tablet() && !device.mobile() && !isIE9() ) {	
			$('.animation').each(function(){
        		var _this = this;
        		var animation_waypoint = new Waypoint({
            		element: _this,
            		handler: function (direction) {
						$(this.element).css({ visibility: 'visible' }).addClass('animated');
            		},
            		offset: '95%'
        		});
        	});
			
		}	
	 		 
	}); // END of Pace on Hide
	
	
	// 04. MENU
	//=============================================================================================================================================
	//=============================================================================================================================================
	//=============================================================================================================================================
	
	// 04.1 Menu Active Class (Multipage)
	//================================================================================
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	var parent_1, parent_2;
	if (!$("nav ul#nav-menu").hasClass("nav-smooth-scroll")){		
		if (pgurl == "" || pgurl.charAt(0) == "#"){
			$("nav ul#nav-menu > li:first-child > a").addClass("active");
		}	
		else{			
     		$("nav ul#nav-menu li a").each(function(){
				var menu_href = $(this).attr("href")
					
	    		if(window.location.href.indexOf(menu_href) > -1) {
          			$(this).addClass("active");
					parent_1 = $(this).parents().eq(2).children();
					parent_2 = $(this).parents().eq(4).children();
					
					if ( parent_1.is( "a" ) ) {
    					parent_1.addClass("active");
  					}
					
					if ( parent_2.is( "a" ) ) {
    					parent_2.addClass("active");
  					}					
					return false;
				}
    		})
		}	
	}
	
	
	// 04.2 Smooth Scroll (Onepage)
	//==================================================================================
	$('.nav-smooth-scroll a').smoothScroll({
		speed: 1000,
		offset: -80,
	});	
	
	// 04.3 Mobile Menu
	//==================================================================================
	$("#mobile-nav").on( "click", function(e){
		e.preventDefault();
		$("#nav-menu").toggleClass("open");
	});	
	
	// Hide Menu After Click It. Will be used on onepage version. 
	$("#nav-menu.nav-smooth-scroll").on( "click", function(e){
		var target =  $(e.target);
		if ( target.is('a') && target.attr("href") !== "#") {
			target.parents("#nav-menu").removeClass("open");
		}
		return false;
	});
	
	// 04.4 DOUBLE TAP DROP DOWN MENU
	//==================================================================================
	if ($(window).width() > 991){
		$( '#nav-menu' ).doubleTapToGo();
	}	 

	// 04.5 SUB MENU CHILD MENU FOR TABLET MOVE TO LEFT
	//==================================================================================
	if ($(window).width() > 991 && $(window).width() <= 1024){
		$( '#nav-menu ul ul' ).addClass("on-left");
	}	
	
	// 05. SLIDE
	//=============================================================================================================================================
	//=============================================================================================================================================
	//=============================================================================================================================================
	
	// 05.1 Slide Image (Background Position)	
	//================================================================================
	var slide_image_position = function(){
		$('#main-slider .slide-image').each(function(){
			var mobile_image_position = $(this).data("mobile-image-position");
			var tablet_image_position = $(this).data("tablet-image-position");
			
			if ($(window).width() <= "480" && mobile_image_position != ""){    		 	
				$(this).css("background-position",mobile_image_position);
			}
			else if ($(window).width() <= "991" && tablet_image_position != ""){    		 	
				$(this).css("background-position",tablet_image_position);
			}       
		});
	}
	
	//Execute on load
	slide_image_position();
	
	//Execute on window resize
	$(window).resize(function() {	
		slide_image_position();
	});
	
	// 05.2 Slide Effect
	//================================================================================
	// See :
	// - main-slider-fade.js
	// - main-slider-slide.js
	// - main-slider-image-animation.js
	// - main-slider-multiple-title.js
	// - main-slider-multiple-title-animation.js
	
	// 05.3 Slide Video	
	//================================================================================
	// See :
	// - main-slider-video.js
	
	// 05.4 HTML Audio	
	//================================================================================
	// See :
	// - audio-control.js
	
	
	
	// 06. ELEMENT
	//=============================================================================================================================================
	//=============================================================================================================================================
	//=============================================================================================================================================
	
	// 06.1 Photo Item
	//================================================================================
	var photo_item = $('.photo-item');	
	
	if( device.tablet() || device.mobile() ) {
		if (!isIE11desktop()){
			photo_item.find(".hover-animation").css("transition","none"); 
		 }
	 }
	 
	photo_item.on( "touchstart touchend", function(e) {
	});		
	
	
	// 06.2 Countdown
	//================================================================================
	var theday = new Date();
	theday = new Date(2017, 2, 19);
	$('.countdown').countdown({until: theday, format: 'DHMS'});
	
	
	// 06.3 Gift Carousel
	//================================================================================	 
	if ($("#gift-carousel").length){
		
		var gift_carousel = $("#gift-carousel");
    	gift_carousel.owlCarousel({
			items : 4, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
		});
		
		if (device.tablet() || device.mobile()) {
			var owl_gift = gift_carousel.data('owlCarousel');
			owl_gift.stop()
		}
		
	} 
	
	// 06.4 Interest Places Carousel
	//================================================================================	 
	if ($("#places-carousel").length){
		
		var places_carousel = $("#places-carousel");
    	places_carousel.owlCarousel({
			items : 3,
			itemsDesktop: [1199,3], 
			itemsDesktopSmall: [979,2], 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
			navigation:false,
		});
		
		if (device.tablet() || device.mobile()) {
			var owl_places = places_carousel.data('owlCarousel');
			owl_places.stop()
		}		
	} 
	
	// 06.5 Events Carousel
	//================================================================================	 
	if ($("#events-carousel").length){
		
		var events_carousel = $("#events-carousel");
    	events_carousel.owlCarousel({
			items : 3,
			itemsDesktop: [1199,3], 
			itemsDesktopSmall: [979,2], 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
			navigation:false,
		});
		
		if (device.tablet() || device.mobile()) {
			var owl_events = events_carousel.data('owlCarousel');
			owl_events.stop()
		}		
	} 	
	
	// 06.6 Smooth Scroll Link
	//================================================================================
	$('a.smooth-scroll').smoothScroll({
		speed: 1000,
	});
	
	// 06.7 Magnific Popup
	//================================================================================
	
	// 06.7.1 Magnific Zoom
	//----------------------------------------------------------------------------------
	if ($(".magnific-zoom").length){
		$('.magnific-zoom').magnificPopup({
 			type: 'image',
			image: {
    			// options for image content type
    			titleSrc: 'title'
 			},
			//fixedContentPos:true,
			callbacks: {
    			open: function() {
      				// Will fire when this exact popup is opened
    			},
    			afterClose: function() {
      				// Will fire when popup is closed
    			}
  			},
		});
	}	
	
	// 06.7.2 Magnific Zoom Gallery
	//----------------------------------------------------------------------------------	
	if ($(".magnific-zoom-gallery").length){
		$('.magnific-zoom-gallery').magnificPopup({
 			type: 'image',
			image: {
    			// options for image content type
    			titleSrc: 'title'
 			},
			gallery: {
         		 enabled:true
        	},
			//fixedContentPos:true,
			callbacks: {
    			open: function() {
      				// Will fire when this exact popup is opened
    			},
    			afterClose: function() {
      				// Will fire when popup is closed
    			}
  			},
		});	 
	}
	 
	// 06.7.3 Magnific Ajax
	//----------------------------------------------------------------------------------
	if ($(".magnific-ajax").length){
		$('.magnific-ajax').magnificPopup({
  			type: 'ajax',
			ajax: {
				settings: {cache:false} 
				// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
				// For example:
				// settings: {cache:false, async:false}
			},
			callbacks: {
    			open: function() {
      				// Will fire when this exact popup is opened
    			},
    			afterClose: function() {
      				// Will fire when popup is closed
				
    			}
  			},
		});	
	}
	
	// 06.8 Icon
	//================================================================================
	if( device.tablet() || device.mobile() ) {
		if (!isIE11desktop()){
			$(".de-icon, .de-icon i").css("transition","none");
		 }
	}
	
	// 06.9 Popup Video
	//===============================================================================	
	$(".popup-video-button").each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			if ($(this).hasClass("on-photo-item")){
				$(this).closest(".photo-item").next().fadeIn().find("video").get(0).play();			
			}
			else
			{
				$(this).next().fadeIn().find("video").get(0).play();
			}			
			
		});
	});
	
	$(".popup-video-wrapper").on('click', function(e){
		if (e.target !== this){
    		return;
		}
		$(this).fadeOut();
		$(this).find(".popup-video").get(0).pause();
	});
	
	
	// 06.10 Popup Map
	//================================================================================	
	// Onclick grey area, close map
	$(".popup-map-wrapper").on('click', function(e){
		if (e.target !== this){
    		return;
		}
  		$(this).fadeOut();  
	});
	
	
	
	// 07. RSVP
	//=============================================================================================================================================
	//=============================================================================================================================================
	//=============================================================================================================================================
	if ($("#rsvpform").length){
		$("#rsvpform").ajaxrsvp();
	}
	
	// 07.1 Custom Checkbox
	//================================================================================
	$(".ajax-checkbox").on( "click", function(e){
		var target = $(e.target);
		if ( target.is('.custom-option-icon') ){
			target.toggleClass( "active-icon" );
		}
	});

	// 07.2 Custom Radio
	//================================================================================
	$(".ajax-radio").on( "click", function(e){
		var target = $(e.target);
		if ( target.is('.custom-option-icon') ){
			if (!(target.parent().hasClass("radio"))){
				target.addClass( "active-icon" ).siblings().removeClass( "active-icon" );
			}
			else{
				target.addClass( "active-icon" ).parent().siblings().children(".custom-option-icon").removeClass( "active-icon" );
			}
		}
	});
	
});
	 
})(jQuery);		 