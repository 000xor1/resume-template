/*

view size load

*/
$(window).load(function() {

    $(".loading").fadeOut(800);
    $("body").css("overflow", "auto");

});


$(document).ready(function() {

    //smoothWheel Load
    $(window).smoothWheel();

    $("#page1").css('height', $(window).height());
    // project view
    $("#project").css('height', ($(window).height()));

    $("#project .row > .col-sm-6 ").css('height', ($(window).height() / 2));
    $("#project .row > .col-md-6 ").css('height', ($(window).height() / 2));
    $("#project .row > .col-xs-12 ").css('height', ($(window).height() / 2));
    /* contact view */
    $("#contact").css('height', $(window).height() / 2);
    $("#contact .row > .col-sm-6 ").css('height', ($(window).height() / 2));
    $("#contact .row > .col-md-6 ").css('height', ($(window).height() / 2));
    $("#contact .row > .col-xs-12 ").css('height', ($(window).height() / 2));

    $(window).resize(function() {
        $("#page1").css('height', $(window).height());

        $("#project").css('height', ($(window).height()));
        $("#project .row > .col-sm-6 ").css('height', ($(window).height() / 2));
        $("#project .row > .col-md-6 ").css('height', ($(window).height() / 2));
        $("#project .row > .col-xs-12 ").css('height', ($(window).height() / 2));
        /* contact view */
        $("#contact").css('height', $(window).height() / 2);
        $("#contact .row > .col-sm-6 ").css('height', ($(window).height() / 2));
        $("#contact .row > .col-md-6 ").css('height', ($(window).height() / 2));
        $("#contact .row > .col-xs-12 ").css('height', ($(window).height() / 2));

    });

});
