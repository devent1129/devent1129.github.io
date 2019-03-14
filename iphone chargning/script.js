$(document).ready(function() {
  setTimeout(function(){
    $(".iphone1").addClass("vibrate");
     $(".charge1").addClass("vibrate");
     $(".charger1").addClass("vibrate");
     $(".vibaudio").get(0).play();
  }, 7500);
  setTimeout(function(){
    $(".iphone2").addClass("vibrate"); 
     $(".charge2").addClass("vibrate");
          $(".charger2").addClass("vibrate");
     $(".vibaudio2").get(0).play();
  }, 17500);
   setTimeout(function(){
    $(".iphone3").addClass("vibrate"); 
     $(".charge3").addClass("vibrate");
          $(".charger3").addClass("vibrate");
    $(".button").addClass("alarm");
     $(".button").addClass("alarm");
     $(".vibaudio3").get(0).play();
  }, 32500);
  $(".iphone1").click(function() { 
    $(".iphone1").removeClass("vibrate");
       $(".charge1").removeClass("vibrate");
       $(".charger1").removeClass("vibrate");
       $("audio").get(0).pause();
       $("audio").get(0).currentTime = 0;
       setTimeout(function(){
	    $(".iphone1").addClass("vibrate");
	     $(".charge1").addClass("vibrate");
	     $(".charger1").addClass("vibrate");
	     $("audio").get(0).play();
	  }, 7500);	
    });
   $(".iphone2").click(function() { 
    $(".iphone2").removeClass("vibrate");
       $(".charge2").removeClass("vibrate");
       $(".charger2").removeClass("vibrate");
       $("audio").get(0).pause();
       $("audio").get(0).currentTime = 0;
        setTimeout(function(){
	    $(".iphone2").addClass("vibrate"); 
	     $(".charge2").addClass("vibrate");
	          $(".charger2").addClass("vibrate");
	     $("audio").get(0).play();
	  }, 17500);
    });
 $(".iphone3").click(function() { 
    $(".iphone3").removeClass("vibrate");
       $(".charge3").removeClass("vibrate");
       $(".charger3").removeClass("vibrate");
       $("audio").get(0).pause();
       $("audio").get(0).currentTime = 0;
        setTimeout(function(){
	    $(".iphone3").addClass("vibrate"); 
	     $(".charge3").addClass("vibrate");
	          $(".charger3").addClass("vibrate");
	    $(".button").addClass("alarm");
	     $(".button").addClass("alarm");
	     $("audio").get(0).play();
	  }, 32500);
    });


});
