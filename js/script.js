$(document).ready(function() {
	$("#slides").owlCarousel({
		margin:2,
		loop: false,
		items: 1,
		center: false,
		responsiveClass:true,
		responsive: {
			0: {
				items:1,
				nav:true
			},
			600: {
				items:3,
				nav:true
			},
			1000: {
				items: 3,
				nav:true
			}
		}
	});
});