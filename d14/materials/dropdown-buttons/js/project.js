console.log("hello");

// $(".buttona").click(function(){
// 	$(".menua").toggle();
// });

// $(".buttonb").click(function(){
// 	$(".menub").toggle();
// });


$("button").on("click", function() {
	$(this).siblings("div").toggle();
});

$("button").on("focusout", function() {
	$(this).siblings("div").hide();
});