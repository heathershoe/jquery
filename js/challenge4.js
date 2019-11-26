// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }

$('#ch4form').submit(function( event ) {
  var name = $("#fullname")
  var address = $("#streetaddr")
    if (name.val().length == 0){
      // console.log(name.val().length);
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
    }
    else {
      $("#nameerrormsg").css("display", "none");
    }
    if (address.val().length == 0){
      event.preventDefault();
      $("#addrerrormsg").css("display", "block");
    }
    else {
      $("#addrerrormsg").css("display", "none");
    }

})
