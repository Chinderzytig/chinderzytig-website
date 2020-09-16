$(document).ready(function() {
  $('#bread a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('breadcrumb__active');

	$("#js-scroll-to-comments").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-comments').offset().top}, 1000);
	});

	if($(".card__hidden:hidden").length < 6) {$("#loadMore").hide();}

	$(".card__hidden").slice(0, 6).show();

	$("#loadMore").on('click', function (e) {
		e.preventDefault();

		$(".card__hidden:hidden").slice(0, 6).slideDown();
		if($(".card__hidden:hidden").length == 0) {
			$("#loadMore").fadeOut();
		}

		$('html, body').animate({scrollTop: $().offset().top}, 1000);
	});
});
