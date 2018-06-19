/*============================== 
	- MAIN SLIDER - SLIDE JS
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function($) {

'use strict';
	
	// MAIN SLIDER - SLIDE
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "slide",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,			
		});
	});

})(jQuery);		