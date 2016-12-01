// get age
// get max age
// get num per day
// (max age subtract age)*num per day*365

// on click show results & pulldown item to span

$("#click-me").on("click", function() {
	var currentAge = $("#age").val();
	var maxAge = $("#max-age").val();
	var numOfDrinksPerDay = $("#num-per-day").val();
	var item = $("#item").val();
	console.log(currentAge);
	console.log(maxAge);
	console.log(numOfDrinksPerDay);
	console.log(item);
	var solution = ((maxAge-currentAge)*numOfDrinksPerDay*365);
	var roundedSolution = Math.round(solution);
	var styledSolution = roundedSolution.toLocaleString()
	$("#solution").text(styledSolution);
	var drink = $("#item").val();
	$("#drink").text(drink);
});