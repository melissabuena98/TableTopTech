var oldSize1;
var newSize1;

var oldsize2;
var newSize2;
$(document).ready(function() {
    oldSize1=parseFloat($("#enlarge1").css('font-size'));
    newSize1=oldSize1  * 2;
  $("#enlarge1").hover(
    function() {
     $("#enlarge1").animate({ fontSize: newSize1}, 200);
     $(this).css('color', '#FF8C1D');
    $(this).css('-webkit-transition', '.35s ease-out');

    },
    function() {
    $("#enlarge1").animate({ fontSize: oldSize1}, 200);
    $(this).css('color', 'black');
   }
 );
    
    oldSize2=parseFloat($("#enlarge2").css('font-size'));
    newSize2=oldSize2  * 2;
  $("#enlarge2").hover(
    function() {
     $("#enlarge2").animate({ fontSize: newSize2}, 200);
     $(this).css('color', '#FF8C1D');
     $(this).css('-webkit-transition', '.35s ease-out');
    },
    function() {
    $("#enlarge2").animate({ fontSize: oldSize2}, 200);
    $(this).css('color', 'black');
   }
 );
    
    oldSize3=parseFloat($("#enlarge3").css('font-size'));
    newSize3=oldSize3  * 2;
  $("#enlarge3").hover(
    function() {
     $("#enlarge3").animate({ fontSize: newSize3}, 200);
     $(this).css('color', '#FF8C1D');
     $(this).css('-webkit-transition', '.35s ease-out');
    },
    function() {
    $("#enlarge3").animate({ fontSize: oldSize3}, 200);
    $(this).css('color', 'black');
   }
 );



});