/*

Smooth Scroll jQuery

*/

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
    return false;
});