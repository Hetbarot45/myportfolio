$(document).ready(function(){
    $('#ed').click(function(){
        $('#edu').hide();
        $('#edu').show(2000);
    })

    $('#sk').click(function(){
        $('#skill').hide();
        $('#skill').slideDown(2000);
    })

    $('#hb').click(function(){
        $('#hobb').hide();
        $('#hobb').fadeIn(2000);
    })
})