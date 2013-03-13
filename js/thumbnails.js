$(function() {

  if ($('html').hasClass('csstransforms3d')) {  
      $('.thumbnails li').removeClass('slide').addClass('flip');   
      $('li.flip').hover(
        function () {
          $(this).find('.thumbnail').addClass('theFlip');
        },
        function () {
          $(this).find('.thumbnail').removeClass('theFlip');      
        }
      );
    } else {
      $('.thumbnails li').hover(
        function () {
          $(this).find('.caption').stop().animate({bottom:0}, 500, 'easeOutCubic');
        },
        function () {
          $(this).find('.caption').stop().animate({bottom: ($(this).height() * -1) }, 500, 'easeOutCubic');      
        }
      );

    }

});