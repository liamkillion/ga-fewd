$("button").on("click", function(){
	var city = $("input").val();
	console.log(city)
	var link = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&apikey=ff38213b53a24	9e8ddd6b25f65dbe21c"
	$.getJSON(link, function(data) {
		console.log(data);
		$("span.temperature").text(data["main"]["temp"]);
		$("img.icon").attr("src", "http://openweathermap.org/img/w/"+data["weather"][0]["icon"]+".png");
	});
});

