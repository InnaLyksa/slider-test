$(document).ready(function () {
	$(".bg-slider").hide();
	$(".bg-slider:first-child").show();

	$(".nav-arrows.prev").click(function () {
		slidePrev();
	});

	$(".nav-arrows.next").click(function () {
		slideNext();
	});

	$(".nav-dots div").click(function () {
		slideTo($(this).index());
	});
});

function slidePrev() {
	if ($("#slider .active").index() == 0) {
		slideTo($("#slider .bg-slider").length - 1);
	} else {
		slideTo($("#slider .active").index() - 1);
	}
}

function slideNext() {
	if ($("#slider .active").index() == $("#slider .bg-slider").length - 1) {
		slideTo(0);
	} else {
		slideTo($("#slider .active").index() + 1);
	}
}

function slideTo(slide) {
	$("#slider .active").fadeOut().removeClass("active");
	$("#slider .bg-slider").eq(slide).fadeIn().addClass("active");
	$(".nav-dots .current").removeClass("current");
	$(".nav-dots div").eq(slide).addClass("current");
}
