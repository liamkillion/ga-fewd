// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
// click on the image
// grabs image src
// big image changes
$("#first").click(function(){
	$("figure > img").attr("src", "img/1.jpg");
});

$("#second").click(function(){
	$("figure > img").attr("src", "img/2.jpg");
});

$("#third").click(function(){
	$("figure > img").attr("src", "img/3.jpg");
});

$("#fourth").click(function(){
	$("figure > img").attr("src", "img/4.jpg");
});