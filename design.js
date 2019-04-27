var imagen = $("#img_1");


$("#slider_sec").css("margin-left", "-" + 100 + "%");

/*Va a la Derecha*/
$("input[name=Derecha]").click(function() {
	$("#slider_sec").animate({marginLeft: 0 + "%"}, 700, function() {
        $("#slider_sec .img:last").insertBefore("#slider_sec .img:first");
        $("#slider_sec").css("margin-left", "-" + 100 + "%");
	});
});

/*Va a la Izquierda*/
$("input[name=Izquierda]").click(function() {
    $("#slider_sec").animate({marginLeft: "-" + 200 + "%"}, 700, function() {
        $("#slider_sec .img:first").insertAfter("#slider_sec .img:last");
        $("#slider_sec").css("margin-left", "-" + 100 + "%");
    });
});

setInterval(function() {
	$("#slider_sec").animate({marginLeft: 0 + "%"}, 2000, function() {
        $("#slider_sec .img:last").insertBefore("#slider_sec .img:first");
        $("#slider_sec").css("margin-left", "-" + 100 + "%");
	});
}, 4000);