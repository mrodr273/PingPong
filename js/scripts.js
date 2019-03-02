
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#number").val();
    var text=""
    var data=[]

    if (numberInput%3 == 0) {
      text = "ping"
    } else if (numberInput % 5 == 0) {
      text = "pong"
    } else if (numberInput % 3 == 0 && numberInput % 5 == 0) {
      text = "pingpong"
    } else {
      text = numberInput
    }


    $(".item").append(text);
    $(".item").text(text);
    $(".col-lg-12").show();
  });
});

/*$(".my-class").show();
$(".my-class").hide();
$(".my-class").toggle();*/

/*Add a CSS class to an element:
$("body").addClass("my-class");*/

/*var add = function(number1, number2) {
  return number1 + number2;
};*/

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));*/

/*$('.element-to-select').click(function() {
  alert('hi');
});*/

/*Test that you've selected the correct DOM element:
$('.element-to-select').css('background-color', 'green');*/

/*.clickable {
  cursor: pointer;
  color: #0088cc;
.clickable:hover {
  text-decoration: underline;
}*/
