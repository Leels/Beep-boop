//Back-end logic//
function beepBoop(number) {
  var newArray = []
  for (var i = 0; i <= number; index ++) {


  }
}


//Front-end logic//
$(document).ready(function(){
  $("#beep-boop").submit(function(event){
    event.preventDefault();

    var userName = $("input#nameInput").val();
    var userNumber = parseInt($("input#numberInput").val());

    $("#result").text(userName)
    $("#result").append(userNumber);
  });
});
