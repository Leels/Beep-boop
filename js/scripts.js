$(document).ready(function(){
  $("#beep-boop").submit(function(event){
    event.preventDefault();

    var userNumber = $("input#numberInput").val();
    var userName = $("input#nameInput").val();

    $("#result").append(userName)
    $("#result").append(userNumber);
  });
});
