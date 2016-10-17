$(function() {

	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	}).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").children("ul").removeClass("sf-menu").addClass("hidden");

	$(".toggle-mnu").click(function() {
		$("#mobile-menu").find("ul[style='display: none;'] , div[style='display: none;']" ).attr("style", "");
		$("#mobile-menu").children("ul").removeClass("hidden").parent().mmenu({
			extensions: ["widescreen", "theme-white", "effect-menu-slide", "pagedim-black"],
			navbar: {
				title: "Меню"
			}	
		});
		$(this).addClass("on");
		setTimeout(remove, 100);
	});
	



});

function remove() {
  $(".toggle-mnu").removeClass("on");
}