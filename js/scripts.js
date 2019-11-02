//Back-end logic//
function beepBoop(userNumber) {
  var inputArray = []

  //I know that this variable is front-end logic but I wasn't exactly sure how to access it without putting all the logic under the submit function.//
  var userName = $("input#nameInput").val();

  for (var i = 0; i <= userNumber; i ++) {
    if ([i].toString().includes(3)) {
      inputArray.push("I'm sorry, " + userName + ". I'm afraid I can't do that. ")
    } else if ([i].toString().includes(2)) {
      inputArray.push("Boop! ")
    } else if
      ([i].toString().includes(1)) {
      inputArray.push("Beep! ")
    } else {
      inputArray.push(i + ", ");
    }
  }
  return inputArray;
}

//reset css animation//
function reset_animation() {
  var el = document.getElementById('beep-boop');
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = null;
}

//Front-end logic//
$(document).ready(function(){
  $("#beep-boop").submit(function(event){
    event.preventDefault();

    var userName = $("input#nameInput").val();
    var userNumber = parseInt($("input#numberInput").val());
    var result = beepBoop(userNumber);
    // var countDown = result.reverse();

    $(".page1").hide();
    $(".page2").show();
    $("#result").append(result);
    $("#countDown").append(result.reverse());

  });
});
