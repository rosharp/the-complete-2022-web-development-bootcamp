$("a").attr("href", "https://www.yahoo.com");
$("h1").click(function() {
	$("h1").css("color", "purple");
});

$("button").click(function() {
	$("h1").css("color", "purple");
});

$(document).keypress(function(event) {
	$("h1").html(event.key);
});

$("h1").on("mouseover", function() {
	$("h1").css("color", "purple");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

$("button").on("click", function() {
	$("h1").slideUp().slideDown().animate({opacity:0.5});
});


