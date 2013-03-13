$(document).ready(function(){
	/*
	$('.image_gallery').cycle({
		timeout: 0
	});
	*/

	// Add profile button to toggle about text
	var height = $('#profile').height();

	$('#profile').hide()//.css({ height : 0 }).after('<div id="show_profile">About me</div>');
/*
	$('#show_profile').click(function(){

		if ( $('#profile').is(':visible') ) {
			$('#profile').animate(
				{ height: 0 }, 
				{ duration: 'fast', 
					complete: function () {
        			$('#profile').hide();
      				} 
    			});
		} else {
			$('#profile').show().animate(
				{ height: height }, 
				{ duration: 'fast'});
		}
		
	});

	// Fade in images
	$('.image_gallery').each(function(){
		$(this).find('img').hide();
		$(this).imagesLoaded(function(){
			$(this).find('img').fadeIn();
		});
		
	});
*/
});