
// $("button").on("click", function() {
//   var title = $("input").val();
//   $("h1").text(title);
// });
console.log("Hello!");

$("#color-button").on("click", function() {
	var red = $("#red").val();
	var green = $("#green").val();
	var blue = $("#blue").val();
	console.log(red);
	console.log(green);
	console.log(blue);
	var rgb = "rgb(" + red + "," + green + "," + blue+ ")"
	$("#wrapper").css("background", rgb);
})
