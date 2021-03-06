//Back-end logic//
function beepBoop(userNumber) {

  var userName = $("input#nameInput").val();
  var inputArray = []

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
function reset_animation() {
  var el = document.getElementById('beep-boop');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}

//Front-end logic//
$(document).ready(function(){
  $("#beep-boop").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("input#numberInput").val());
    var result = beepBoop(userNumber);

    $(".page1").hide();
    $(".page2").show();
    $("#result").append(result);

  });
});
