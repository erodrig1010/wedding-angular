/*============================== 
	- AUDIO CONTROL JS
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

/*---------------------- 
	Script Guide
------------------------
01. SOUNCLOUD BUTTON
02. HTML AUDIO
	02.1 Set Mute Icon for Mobile or Not Autoplay Audio
	02.2 On toggle mute button
*/

(function($) {

'use strict';			
	
	// Check IOS
   //================================================================================
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}
	
	
	// 01. SOUNDCLOUD BUTTON
	//================================================================================
	//================================================================================
	//================================================================================
	$("#soundcloud-button").on( "click", function(e){
		e.preventDefault();
		$("#soundcloud-track").toggleClass( "open-window" );
		
	});
	
	// 02. HTML AUDIO
	//================================================================================
	//================================================================================
	//================================================================================
	var audio_play_attr = $("#html-audio").attr('autoplay');
	var audio_icon = $("#mute-html-audio i");
	
	// 02.1 Set Mute Icon for Mobile or Not Autoplay Audio
	//----------------------------------------------------------------------------------
	if (device.tablet() || device.mobile() || typeof audio_play_attr === typeof undefined || audio_play_attr === false){
		var audioElm = document.getElementById('html-audio');	

		if 	(audioElm != null){
			if (isIOS()){
				audioElm.pause();
			}
			else
			{
				audioElm.muted = true;
			}
		}
		
		audio_icon.removeClass("de-icon-volume-up").addClass("de-icon-volume-off");
	} 
	 
	// 02.2 On toggle mute button
	//----------------------------------------------------------------------------------
	 $("#mute-html-audio").on( "click", function(e){
		e.preventDefault();
		var audioElm = document.getElementById('html-audio');		
		
		if (audio_icon.hasClass("de-icon-volume-up")){
			audio_icon.removeClass("de-icon-volume-up").addClass("de-icon-volume-off");
			if (isIOS()){
				audioElm.pause();
			}
			else
			{
				audioElm.muted = true;
			}
		}
		else
		{
			audio_icon.removeClass("de-icon-volume-off").addClass("de-icon-volume-up");
			audioElm.play();
			audioElm.muted = false;
		}
	});

})(jQuery);	