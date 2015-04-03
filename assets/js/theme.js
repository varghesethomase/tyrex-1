// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});


/*

	BigVideo.JS

*/

$(function() {
	var BV = new $.BigVideo({useFlashForFirefox:false});
	BV.init();
	if (Modernizr.touch) {
		BV.show('/images/lightning.jpg');
	} else {
		BV.show([
	    	{ type: "video/mp4",  src: "/videos/lightning.mp4" },
	    	{ type: "video/webm", src: "/videos/lightning.webm" }
		],{ambient:true});
	}
});


/*

Sign up form animation

*/

$(document).ready(function(){
	$("#home_signup_btn").click(function () {
		$('.signupbox').switchClass( "FormClose", "FormOpen", 4000, "easeInOutQuad" );
		$("#home_signup_btn").toggle( "fade", 2000 );
		/*$('.signupbox').toggleClass( "FormOpen", 4000, "easeInQuad" );*/
	});
	$("#signup_cancel_btn").click(function () {
		$('.signupbox').switchClass( "FormOpen", "FormClose", 4000, "easeInOutQuad" );
		$("#home_signup_btn").toggle( "fade", 3000 );
	});
});