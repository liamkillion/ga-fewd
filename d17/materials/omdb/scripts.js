$("button").on("click", function () {
	var movie = $("input").val();
	var link = "http://www.omdbapi.com/?t="
	var search = link + movie
	console.log(search)
	$.getJSON(search, function(data) {
		$("h1.title").text(data["Title"]);
		$("h4.year").text(data["Year"]);
		$("img.poster").attr("src", data["Poster"]);
		$("p.plot").text(data["Plot"]);
	})
	var searchHistory = $("<li>"+movie+"</li>");
	$("ul").append(searchHistory);
});

$("li").on("click", function(){
	var movieTitle = text("li")
	var link = "http://www.omdbapi.com/?t="
	var search = link + movieTitle
	console.log(search)
	$.getJSON(search, function(data) {
		$("h1.title").text(data["Title"]);
		$("h4.year").text(data["Year"]);
		$("img.poster").attr("src", data["Poster"]);
		$("p.plot").text(data["Plot"]);
	})
})