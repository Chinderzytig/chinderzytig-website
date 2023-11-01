$(document).ready(function() {

	$('#bread a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('breadcrumb__active');

	$("#js-scroll-to-comments").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-comments').offset().top}, 1000);
	});
});

window.addEventListener("load",function() {
  setTimeout(function(){
		window.scrollTo(0, 1);
  }, 0);
});
