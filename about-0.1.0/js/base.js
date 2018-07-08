var owl = $('#experienceBox .owl-carousel');

owl.owlCarousel({
    loop: true,
    margin: 10,

    items: 1,
    smartSpeed: 1500,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    autoplay: true,

});

var skills = $('#skillsBox .owl-carousel');

skills.owlCarousel({
    loop: false,
    margin: 10,
    items: 1,
    smartSpeed: 1500,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    autoplay: false,
    dots: false,

});

$("#skillsBox ").on("click", ".arrow", function() {
    var i = $(this).attr("id");


    if (i == "left") {
        skills.trigger('prev.owl');
    } else if (i == "right") {
        skills.trigger('next.owl');
    }

});


$(".portfolio-small, .portfolio-large").hover(
    function() {
        o = $(this).attr("data-object");

        $("[data-image =" + o + "]").hide();
        $("[data-text =" + o + "]").fadeIn(300);
    },
    function() {

        $("[data-text =" + o + "]").hide();
        $("[data-image =" + o + "]").fadeIn(300);

    }
);



var menuAnimate = function() {

    var itemList = $("#menuModal .menuItem");
    var defTime = 500;
    var defTime_2 = 2000;

    $('#menuModal .menuItem').stop().fadeIn();

    for (i = 0; i <= itemList.length; i++) {

        $('#menuModal [data-num="' + i + '"]').stop().animate({
            opacity: "1",
            left: "10%"

        }, defTime);

        defTime += 150;
        defTime_2 += 150;

    }
    for (i = 0; i <= itemList.length; i++) {

        $('#menuModal [data-num="' + i + '"] .menuSubItem').stop().animate({
            opacity: "1",


        }, defTime_2);


    }
}


var clickToggle = true;

$('#nav-icon4').click(function() {
    if (clickToggle == true) {
        menuOpen();
    } else if (clickToggle == false) {
        menuClose();
    }
});


$('.menuList .menuItem').click(function() {
    menuClose();

});
var menuClose = function() {

    $("#nav-icon4").removeAttr("class");
    $("body").css("overflow", "auto");
    $("#menuButton-ef").attr("id", "menuButton");
    $(".modal").fadeOut(500);
    $("#menuModal .menuItem").stop().removeAttr('style');
    $('#menuModal .menuSubItem').stop().removeAttr('style');
    //toogle button true/false
    clickToggle = true;
}

var menuOpen = function() {
    $("body").css("overflow", "hidden");
    $("#nav-icon4").attr('class', 'open');
    $("#menuModal").fadeIn(200);
    $("#menuButton").attr("id", "menuButton-ef");

    menuAnimate();
    clickToggle = false;
}
