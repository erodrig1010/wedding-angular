/*============================== 
	- MAIN SLIDER - MULTIPLE TITLE AND IMAGE ANIMATION JS
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function($) {

'use strict';
	
	// MAIN SLIDER - MULTIPLE TITLE AND IMAGE ANIMATION
	//==================================================================================
	$(window).load(function() {
		var ul_slides = $('#main-slider').find('ul.slides');
		
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 7000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,
			start:function(slider){
				if( !device.tablet() && !device.mobile() || isIE11desktop() ) {
					//Loop Animation 
					ul_slides.find(".flex-active-slide > .loop-animation").addClass("animate");
					
					//Caption Use Animation 
					ul_slides.find(".flex-active-slide .use-animation").css({ visibility: 'visible' }).addClass("animated");
				}
				else
				{
					//Caption Use Animation
					$(".use-animation").css({ visibility: 'visible' });
				}
			},
			before:function(){
				if( !device.tablet() && !device.mobile() || isIE11desktop() ) {
					//Caption Use Animation
					ul_slides.find("li .use-animation").css({ visibility: 'hidden' }).removeClass("animated");
				}
			},
			after:function(){
				if( !device.tablet() && !device.mobile() || isIE11desktop() ) {
					//Loop Animation
					ul_slides.find("li > .loop-animation").removeClass("animate");
					ul_slides.find(".flex-active-slide > .loop-animation").addClass("animate");
					
					//Caption Use Animation
					ul_slides.find(".flex-active-slide .use-animation").css({ visibility: 'visible' }).addClass("animated");
				}			
			}		
			
		});
	});
	
	// Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}

})(jQuery);		