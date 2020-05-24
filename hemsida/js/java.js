


$("#window2").css("margin-left", "auto");
$("#window2").css("margin-right", "auto");

$("#button1").show();
$("#button2").show();
$("#button3").show();

$("#window2").css("overflow", "hidden");

$("#button2").click(function(){


  $('html, body').animate({
        scrollTop: $("main").offset().top-110
    }, 1000);

});
$("#button3").click(function(){

  $('html, body').animate({
        scrollTop: $("footer").offset().top-110
   }, 1000);

 });
$("#button1").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top-110
    }, 1000);

});

var x=0;

$("#knapp2").show();
$("#knapp1").show();

$("#window2").css("overflow", "hidden");

$("#knapp2").click(function(){ //höger

      if (x>=2) {
          $("#bilder").animate({right:"0"});
            $("#lådor").animate({right:"0"});



          x=0;
      } else {
          $("#bilder").animate({right:"+=305"});
          $("#lådor").animate({right:"+=310"});


          x=x+1;
      }
      console.log(x);
});

$("#knapp1").click(function(){ // Vänster

console.log(x);
  if (x>=1) {

      $("#bilder").animate({right:"-=300"});
        $("#lådor").animate({right:"-=305"});
      x=x-1;
console.log(x);
  }else if (x <= 0){
      $("#bilder").animate({right:"+=600"});
      $("#lådor").animate({right:"+=610"});

      x = 2;
    }
    console.log(x);

});

$(document).ready(function(){

    $( "#bar" ).click(function() {
$( "#menu" ).toggle( "slow", function() {

});
});

  });
