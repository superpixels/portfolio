/*
	This sweet code was based on http://testthewebforward.org, 
	because it's awesome.
*/

$(document).ready(function(){ 

		var $toc = $('#banner .wrapper'),		  	
			$tocLinks = $toc.find('a[href^="#"]'),			
			cache = {}, cacheinline = {};
			$docEl = $( document.documentElement ),
			$body = $( document.body ),
			$window = $( window ),
			$scrollable = $body, // default scrollable thingy, which'll be body or docEl (html)
			$bodyheight = $body.height(),
      		$bodywidth = $body.width(),      		
      		$nav = $('#banner'),
      		$originalnavtop = $nav.position().top;
			$navheight = $nav.outerHeight(true);
			$('#banner').height($navheight);

		
		if ( $docEl.scrollTop() ) {
			$scrollable = $docEl;
		} else {
			var bodyST = $body.scrollTop();
			// if scrolling the body doesn't do anything
			if ( $body.scrollTop( bodyST + 1 ).scrollTop() == bodyST) {
				$scrollable = $docEl;
			} else {
				// we actually scrolled, so, er, undo it
				$body.scrollTop( bodyST - 1 );
			}
		}

		// build cache
		$tocLinks.each(function(i,v) {
			var href =  $( this ).attr( 'href' ),
				$target = $( href );
			if ( $target.length ) {
				cache[ this.href ] = { link: $(v), target: $target };
			}
		});

		// handle nav links
		$tocLinks.click(function(event) {
			event.preventDefault();
			if ( cache[ this.href ] && cache[ this.href ].target ) {
				$scrollable.animate(
					{scrollTop: cache[ this.href ].target.position().top }, {
					duration: 800, 
					easing: 'easeOutBack' 
				});
			}
		});


		// auto highlight nav links depending on doc position
		var deferred = false,
			timeout = false, // so gonna clear this later, you have NO idea
			last = false, // makes sure the previous link gets un-activated
			check = function() {
				var scroll = $scrollable.scrollTop();

				$.each( cache, function( i, v ) {
					// if we're past the link's section, activate it
					if ( scroll + $navheight >  v.target.position().top  ) {
						last && last.removeClass('active');
						last = v.link.addClass('active');
 					} else {
						v.link.removeClass('active');
						return false; // get outta this $.each
					}
				});


				// all done
				clearTimeout( timeout );
				deferred = false;
			};

		// work on scroll, but debounced
		var $document = $(document).scroll( function() {

      		if($scrollable.scrollTop() > ($originalnavtop)) {
        		$nav.addClass('fixed').css('top', '0');
      		} else {
        		$nav.removeClass('fixed').css('top', 'auto');
      		}

			// timeout hasn't been created yet
			if ( !deferred ) {
				timeout = setTimeout( check , 250 ); // defer this stuff
				deferred = true;
			}			

		});

		// fix any possible failed scroll events and fix the nav automatically
		(function() {
			$document.scroll();
			setTimeout( arguments.callee, 1500 );
		})();

});