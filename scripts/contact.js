var oldSize1;
var newSize1;

var oldsize2;
var newSize2;
$(document).ready(function() {

    var zoom1 = false;
    oldSize1=parseFloat($("#enlarge1").css('font-size'));
    newSize1=oldSize1  * 2;
    $('#enlarge1').on('click',function(){
       if(zoom1){
 $("#enlarge1").animate({ fontSize: newSize1}, 200);
     $(this).css('color', '#FF8C1D');
    $(this).css('-webkit-transition', '.35s ease-out');
           zoom1=false;
       }
        else{
      $("#enlarge1").animate({ fontSize: oldSize1}, 200);
    $(this).css('color', 'black');
           zoom1=true;
       } 
    });
    
    
        var zoom2 = false;
    oldSize2=parseFloat($("#enlarge2").css('font-size'));
    newSize2=oldSize2  * 2;
    $('#enlarge2').on('click',function(){
       if(zoom2){
 $("#enlarge2").animate({ fontSize: newSize2}, 200);
     $(this).css('color', '#FF8C1D');
    $(this).css('-webkit-transition', '.35s ease-out');
           zoom2=false;
       }
        else{
      $("#enlarge2").animate({ fontSize: oldSize2}, 200);
    $(this).css('color', 'black');
           zoom2=true;
       } 
    });
    
        var zoom3 = false;
    oldSize3=parseFloat($("#enlarge3").css('font-size'));
    newSize3=oldSize3  * 2;
    $('#enlarge3').on('click',function(){
       if(zoom3){
 $("#enlarge3").animate({ fontSize: newSize3}, 200);
     $(this).css('color', '#FF8C1D');
    $(this).css('-webkit-transition', '.35s ease-out');
           zoom3=false;
       }
        else{
      $("#enlarge3").animate({ fontSize: oldSize3}, 200);
    $(this).css('color', 'black');
           zoom3=true;
       } 
    });

});