$(function() {
   var labelArr = new Array("", "1990", "1995", "2000", "2004", "2008","2012","2016");
   $( "#slider" ).slider({
      value:1,
      min: 1,
      max: 7,
      step: 1,
      slide: function( event, ui ) {
          $( "#days" ).val( ui.value );
          $("#label").html(labelArr[ui.value]);
      }
  });
  $( "#days" ).val($( "#slider" ).slider( "value" ) );
  $("#label").html(labelArr[$( "#slider" ).slider( "value" )]);
  
});