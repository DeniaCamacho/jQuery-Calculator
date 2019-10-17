$(document).ready(function() {
  // var num_one= Number($("#num_one").val())
  // var num_two = Number($("#num_two").val())
  // var oper = ""

  // var val = $(this).html()

  $("#add").on("click", function(e) {
    $("#answer").val(Number($("#num_one").val()) + Number($("#num_two").val()))
  })

  $("#sub").on("click", function(e) {
    $("#answer").val(Number($("#num_one").val()) - Number($("#num_two").val()))
  })

  $("#divi").on("click", function(e) {
    $("#answer").val(Number($("#num_one").val()) / Number($("#num_two").val()))
  })

  $("#multi").on("click", function(e) {
    $("#answer").val(Number($("#num_one").val()) * Number($("#num_two").val()))
  })
})
