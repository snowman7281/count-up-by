$(document).ready(function(){

  $("#counter").submit(function(event){

    var countTo = parseInt($("#input1").val());
    var countBy = parseInt($("#input2").val());
    var result = [];
    console.log(countTo);

    if(isNaN(countTo) || isNaN(countBy) || countTo < 0 || countBy < 0 || countBy > countTo){
       $("span").show();
    }else{
      for(var i = 0; i <= countTo; i += countBy){
        result.push(i);
      }
    }

    $("#output").text(result);
    event.preventDefault();
  });



});
