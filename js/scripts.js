var divisible = function(numberInput) {

  if (numberInput % 3 == 0 && numberInput % 5 == 0) {
    return "pingpong"
  } else if (numberInput % 5 == 0) {
    return "pong"
  } else if (numberInput % 3 == 0) {
    return "ping"
  } else {
    return numberInput
  }
};


$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#number").val();
    var text=""
    var data=[]
    var arr= []
    var arrR=[]
    var list = "";
    var ul = document.createElement('ul');
    document.getElementById('myItemList').appendChild(ul);
    var counter = numberInput
    for (var i = 1; i <= counter; i++) {
      var result =  divisible(numberInput);
      numberInput -= 1
      arr[i]= result
      arrR.push(arr[i])
    }
    arrR=arrR.reverse();
//NEED TO REVERSE ORDER OF ARRAY and display one list
    $(".col-lg-12").show();
    $("button").hide();
    arrR.forEach(function(arrR) {
    var li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += arrR;


    });
  });

});
