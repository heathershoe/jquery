// javascript

// subscribe.onchange = function() {
//   let thing = document.getElementById('emailField');
//   if (this.checked){
//   thing.style.display = "block";
//   console.log("selected");
// } else {
//   thing.style.display = "none";
//   console.log("not selected");
// }
// }

// jquery

$(document).ready(function(){
  $("#subscribe").click(function(){
    $("#emailField").toggle(1000);
  });
});
