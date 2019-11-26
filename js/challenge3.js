// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
//
//     // alert("You must pick a fruit!")
//     // return false;
//   }


$(document).ready(function() {
  $("#ch3form").submit(function(event) {

    var fruit = $("input[name = fruit]:checked").val()
    var standing = $("input[name = standing]:checked").val()
    if (Number(fruit) >= 1 && Number(standing)>= 1) {
// default action, form is submitted
    } else {
      alert("You must pick a class standing and a favorite fruit!")
      event.preventDefault();
    }
// console.log(fruit[0])


    // alert("You must pick a fruit")
    // event.preventDefault();
});
});
