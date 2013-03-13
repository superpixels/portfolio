/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-tumblr' : '&#x21;',
			'icon-tumblr-2' : '&#x22;',
			'icon-twitter' : '&#x23;',
			'icon-twitter-2' : '&#x24;',
			'icon-twitter-3' : '&#x25;',
			'icon-facebook' : '&#x26;',
			'icon-facebook-2' : '&#x27;',
			'icon-facebook-3' : '&#x28;',
			'icon-facebook-4' : '&#x29;',
			'icon-google-plus' : '&#x2a;',
			'icon-google-plus-2' : '&#x2b;',
			'icon-gplus' : '&#x2c;',
			'icon-google-plus-3' : '&#x2d;',
			'icon-home' : '&#x2e;',
			'icon-newspaper' : '&#x2f;',
			'icon-mail' : '&#x30;',
			'icon-comments' : '&#x31;',
			'icon-link' : '&#x32;',
			'icon-bookmark' : '&#x33;',
			'icon-bookmark-2' : '&#x34;',
			'icon-arrow-up' : '&#x35;',
			'icon-arrow-right' : '&#x36;',
			'icon-arrow-down' : '&#x37;',
			'icon-arrow-left' : '&#x38;',
			'icon-arrow-up-left' : '&#x39;',
			'icon-arrow-up-2' : '&#x3a;',
			'icon-arrow-up-right' : '&#x3b;',
			'icon-arrow-right-2' : '&#x3c;',
			'icon-arrow-down-right' : '&#x3d;',
			'icon-arrow-down-2' : '&#x3e;',
			'icon-arrow-up-right-2' : '&#x3f;',
			'icon-arrow-left-2' : '&#x40;',
			'icon-arrow-down-3' : '&#x41;',
			'icon-arrow-up-3' : '&#x42;',
			'icon-arrow-up-left-2' : '&#x43;',
			'icon-arrow-right-3' : '&#x44;',
			'icon-arrow-up-4' : '&#x45;',
			'icon-arrow-left-3' : '&#x46;',
			'icon-arrow-down-left' : '&#x47;',
			'icon-arrow-down-4' : '&#x48;',
			'icon-arrow-down-right-2' : '&#x49;',
			'icon-arrow-right-4' : '&#x4a;',
			'icon-arrow-up-right-3' : '&#x4b;',
			'icon-arrow-left-4' : '&#x4c;',
			'icon-arrow-down-left-2' : '&#x4d;',
			'icon-arrow-up-5' : '&#x4e;',
			'icon-arrow-up-left-3' : '&#x4f;',
			'icon-arrow-down-5' : '&#x50;',
			'icon-arrow-down-right-3' : '&#x51;',
			'icon-arrow-left-5' : '&#x52;',
			'icon-arrow-down-left-3' : '&#x53;',
			'icon-arrow-right-5' : '&#x54;',
			'icon-paragraph-left' : '&#x55;',
			'icon-mail-2' : '&#x56;',
			'icon-mail-3' : '&#x57;',
			'icon-feed' : '&#x58;',
			'icon-feed-2' : '&#x59;',
			'icon-feed-3' : '&#x5a;',
			'icon-amazon' : '&#x5b;',
			'icon-amazon-2' : '&#x5c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};