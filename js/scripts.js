//Back-end logic//
function beepBoop(userNumber) {
  var inputArray = []
  for (var i = 0; i <= userNumber; i ++) {
    if (i = 1) {
      inputArray.push("Beep!")
    }
  }
  return inputArray;
}


//Front-end logic//
$(document).ready(function(){
  $("#beep-boop").submit(function(event){
    event.preventDefault();

    var userName = $("input#nameInput").val();
    var userNumber = parseInt($("input#numberInput").val());
    var result = beepBoop(userNumber);

    $("#result").text(userName)
    $("#result").append(result);
  });
});
