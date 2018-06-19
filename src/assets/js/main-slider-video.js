/*============================== 
	- MAIN SLIDER / IMAGE DIVIDER VIDEO JS
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

/*---------------------- 
	Script Guide
------------------------
00. FUNCTIONS

01. SLIDE VIDEO
	01.1 Hide Video Loader on Mobile
	01.2 Each Video
	 	01.2.1 Pause All Video on load on Mobile
 		01.2.2 Resize Video
	01.3 Set Play or Pause Icon for Video on load
	01.4 Play Pause On Click
	
02. IMAGE DIVIDER VIDEO
 	02.1 Each Divider Video
  		02.1.1 Pause All Video on load on Mobile
  		02.1.2 Resize Video
 	02.2 Set Play or Pause Icon for Video on load
	02.3 Play Pause On Click
*/

(function($) {

'use strict';

	// 00. FUNCTIONS
	//================================================================================
	//================================================================================
	//================================================================================

	// Check IE
	//================================================================================
	var isIE11 = function isIE11() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// Check IOS
	//================================================================================
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}	

	// Function For Resize Video
	//================================================================================
	var video_resize = function(parent_wrapper){
			
		$(parent_wrapper).each(function(){
				
			var
          		// get native video size
            	videoHeight = $(this).find("video").height(),
            	videoWidth =  $(this).find("video").width(),	

            	// get wrapper size
            	wrapperHeight = $(this).innerHeight(),
            	wrapperWidth = $(this).innerWidth(),
			
				divideWidth = wrapperWidth / videoWidth,
				divideHeight = wrapperHeight / videoHeight
					
			
       		if (divideWidth > divideHeight) {
            	$(this).find("video").css({
                	"width": wrapperWidth + 2,

                	// +2 pixels to prevent empty space after transformation
                	"height": "auto"
            	});
        	} else {
            	$(this).find("video").css({
                	"width": "auto",

               		// +2 pixels to prevent empty space after transformation
               		"height": wrapperHeight + 2
            	});
			
        	}
			
			$(this).find("video").css({
				"top": "50%",
            	"left": "50%",
				"-webkit-transform": "translate(-50%,-50%)",
           	 	"-ms-transform": "translate(-50%,-50%)",
            	"transform": "translate(-50%,-50%)"
			})
			
		});
		
	}	
	
	// Resize Background Video on Load
	//================================================================================
	Pace.on('hide', function () {
		
		//Execute on load (function can be found above)
		video_resize("#main-slider .slide-image");
		video_resize(".image-divider");
		
		//Execute on window resize
		$(window).resize(function() {	
			video_resize("#main-slider .slide-image");
			video_resize(".image-divider");
		});		
	});
	
	
	
	// 01. SLIDE VIDEO
	//================================================================================
	//================================================================================
	//================================================================================
	var main_slider = $('#main-slider');
	
	// 01.1 Hide Video Loader on Mobile
	//----------------------------------------------------------------------------------
	if (device.tablet() || device.mobile() || isIE11()){
		$(".loader").hide();
	}
		
	// 01.2 Each Video
	//----------------------------------------------------------------------------------
	main_slider.find("video").each(function(){
		
		// 01.2.1 Pause All Video on load on Mobile
		//----------------------------------------------------------------------------------
		if (device.tablet() || device.mobile()){		
			$(this).removeAttr( "autoplay" ).get(0).pause();
		}
		
		// 01.2.2 Resize Video
		//----------------------------------------------------------------------------------
		$(this).on('canplay', function(){
			video_resize("#main-slider .slide-image"); 
		});
	});
		
	// 01.3 Set Play or Pause Icon for Video on load
	//----------------------------------------------------------------------------------
	main_slider.find(".play-pause").each(function(){
		var js_control = $(this).parents(".js-control");
		var closest_video;
		
		//Get Video
		if (js_control.hasClass("multiple")){
			closest_video = js_control.siblings(".slide-image").children("video");		
		}
		else{
			closest_video = js_control.siblings(".slides").find("video");
		}
		
		var play_attr = closest_video.attr('autoplay');
		
       	if (device.tablet() || device.mobile()){
			closest_video.css("visibility","hidden");
		}
		else{
			//if autoplay
			if (typeof play_attr !== typeof undefined && play_attr !== false){
				$(this).find("i").removeClass("de-icon-play").addClass("de-icon-pause");
			}
			//if not autoplay
			else{
				closest_video.css("visibility","hidden").siblings(".loader").hide();
			}
		}	
    })
		
	// 01.4 Play Pause On Click
	//----------------------------------------------------------------------------------
	main_slider.find(".play-pause").on( "click", function(e){
		e.preventDefault();
		
		var closest_video;	
		var js_control   = $(this).parents(".js-control");
		var li_parent   = $(this).parents("li");
		var first_click = 1;						
		
		if (js_control.hasClass("multiple")){
			//Get Video
			closest_video = js_control.siblings(".slide-image").children("video");
			
			//Set Sibling Video to Pause
			if (!isIOS()){
				
				if ($(this).find("i").hasClass("de-icon-play")){
					$(this).parents("li").siblings().find("video").get(0).pause();
					$(this).parents("li").siblings().find(".play-pause i").removeClass("de-icon-pause").addClass("de-icon-play");
				
					//Also Pause Image Divider Video 
					$(".image-divider video").each(function(){
						$(this).get(0).pause();
						$(this).parents(".image-divider").find(".play-pause i").removeClass("de-icon-pause").addClass("de-icon-play");
					});
				}
				
			}
		}
		else{
			closest_video = js_control.siblings(".slides").find("video");
		}
		
		//If Pause then Play
		if (!isIOS()){
			if ($(this).find("i").hasClass("de-icon-play")){
				$(this).find("i").removeClass("de-icon-play").addClass("de-icon-pause");
				closest_video.css("visibility","visible").get(0).play();
				if (first_click == 1){
					closest_video.siblings(".loader").show();
					first_click = 2;
				}
			}
			//If Play then Pause
			else{
				$(this).find("i").removeClass("de-icon-pause").addClass("de-icon-play");
				closest_video.css("visibility","visible").get(0).pause();
			}	
		}
		else{
			closest_video.css("visibility","visible").get(0).play();
		}
	});
	
	
	
	
	// 02. Image Divider Video
	//================================================================================
	//================================================================================
	//================================================================================	
	var image_divider = $('.image-divider');
	
	// 02.1 Each Divider Video
	//----------------------------------------------------------------------------------
	image_divider.find("video").each(function(){
		
		// 02.1.1 Pause All Video on load on Mobile
		//----------------------------------------------------------------------------------
		if (device.tablet() || device.mobile()){		
			$(this).removeAttr( "autoplay" ).get(0).pause();
		}
		
		// 02.1.2 Resize Video
		//----------------------------------------------------------------------------------
		$(this).on('canplay', function(){
			video_resize(".image-divider"); 
		});
	});
	
	// 02.2 Set Play or Pause Icon for Video on load
	//----------------------------------------------------------------------------------
	image_divider.find(".play-pause").each(function(){;
		var closest_video = $(this).parents(".image-divider").find("video");		
		var play_attr = closest_video.attr('autoplay');
		
       	if (device.tablet() || device.mobile()){
			closest_video.css("visibility","hidden");
		}
		else{
			//if autoplay
			if (typeof play_attr !== typeof undefined && play_attr !== false){
				$(this).find("i").removeClass("de-icon-play").addClass("de-icon-pause");
			}
			//if not autoplay
			else{
				closest_video.css("visibility","hidden").siblings(".loader").hide();
			}
		}	
    })	
	
	// 02.3 Play Pause On Click
	//----------------------------------------------------------------------------------
	image_divider.find(".play-pause").on( "click", function(e){
		e.preventDefault();
		
		var closest_video = $(this).parents(".image-divider").find("video");
		var first_click = 1;		
		
		//Set Sibling Video to Pause
		if (!isIOS()){
			if ($(this).find("i").hasClass("de-icon-play")){
				// Pause other video divider
				$(".image-divider .play-pause").not(this).each(function(){
					$(this).parents(".image-divider").find("video").get(0).pause();
					$(this).parents(".image-divider").find(".play-pause i").removeClass("de-icon-pause").addClass("de-icon-play");
				});
					
				// Also pause Slide Video
				$("#main-slider video").each(function(){
					$(this).get(0).pause();
					$(this).parents("li").find(".play-pause i").removeClass("de-icon-pause").addClass("de-icon-play");
				});
					
			}
				
		}	
			
		//If Pause then Play
		if (!isIOS()){
			if ($(this).find("i").hasClass("de-icon-play")){
				$(this).find("i").removeClass("de-icon-play").addClass("de-icon-pause");
				closest_video.css("visibility","visible").get(0).play();
				if (first_click == 1){
					closest_video.siblings(".loader").show();
					first_click = 2;
				}
			}
			//If Play then Pause
			else{
				$(this).find("i").removeClass("de-icon-pause").addClass("de-icon-play");
				closest_video.css("visibility","visible").get(0).pause();
			}	
		}
		else{
			closest_video.css("visibility","visible").get(0).play();
		}
	});

})(jQuery);	