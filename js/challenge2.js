// useBilling.onchange = function() {
//   console.log("listen")
//   let home = document.querySelector("#home");
//   let billing = document.querySelector("#billing");
//   if (this.checked) {
//     home.value = billing.value;
//     home.disabled = true;
//   } else {
//     home.value = ""
//     home.disabled = false;
//   }
// }


$(document).ready(function(){
  $("#useBilling").click(function(){

    if($(this).is(':checked')){
      console.log("it's checked")
      $("#home").val($("#billing").val());
      $("#home").prop("disabled", true);
    }
    else {
      $("#home").val("");
      $("#home").prop("disabled", false);
    }

  });
});
