var imagen = $("#img_1");

//$("#slider_sec").css("margin-left", "-" + 100 + "%");

$("#slider_sec").css("margin-left", "-" + 100 + "%");

$("input").click(function() {
	$("#slider_sec").animate({marginLeft: 0 + "%"}, 700, function() {
		$("#slider_sec .img:last").insertBefore("#slider_sec .img:first");
	});
});