$(document).ready(function() {

	window.addEventListener("load", function(){
		setTimeout(
				function open(event){
						document.querySelector(".popup").style.display = "block";
				},
				3000
		)
	});

	document.querySelector("#close").addEventListener("click", function(){
		document.querySelector(".popup").style.display = "none";
	});

  $('#bread a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('breadcrumb__active');

	$("#js-scroll-to-comments").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-comments').offset().top}, 1000);
	});

	if($(".card__hidden:hidden").length <= 12) {$("#loadMore").hide();}

	$(".card__hidden").slice(0, 12).show();

	$("#loadMore").on('click', function (e) {
		e.preventDefault();

		$(".card__hidden:hidden").slice(0, 3).slideDown();
		if($(".card__hidden:hidden").length == 0) {
			$("#loadMore").fadeOut();
		}

		$('html, body').animate({scrollTop: $(this).offset().bottom}, 1000);
	});
});
