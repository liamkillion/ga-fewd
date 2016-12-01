// var userInput = $("input").val()
// $("h1").text(userInput)
// $("input").val()

$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
});

$("p").css("color", "red");