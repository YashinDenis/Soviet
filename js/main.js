const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

$(function() {
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots:false,
	    navText: ['<img src="img/prev.png">','<img src="img/next.png">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
			},
			300:{
				items:1
			},
	        600:{
	            items:2
	        },
	        900:{
	            items:3
			},
			1200:{
	            items:4
	        },
	    },
	});
});