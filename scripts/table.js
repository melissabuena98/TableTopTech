$(document).ready(function() {
    $('td').on('mouseover', function(){
        $('tr').removeClass('activeRow');
        $(this).parent().addClass('activeRow');
    })
    
     $('td').on('mouseout', function(){
        $(this).parent().removeClass('activeRow');
    })
    
});