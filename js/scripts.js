$(document).ready(function(){
  $("#beep-boop").submit(function(event){
    event.preventDefault();

    var userInput = $("input#input").val();

    $("#result").text(userInput);
  });
});
