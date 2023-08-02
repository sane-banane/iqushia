$(function(){
$('.recommend-list').slick({
    autoplay: true,
    slidesToShow:3,
    centerPadding: "100px",
    adaptiveHeight:true,
    prevArrow: $('.slick-prev'), 
    nextArrow: $('.slick-next'), 
    responsive: [
        {breakpoint:1050,
            settings: {
                centerPadding:"70px",
                slidesToShow:2,
            },
        },

        {

            breakpoint: 768,
            settings: {
                centerPadding: "50px",
                slidesToShow: 1,
            }, 
        },
    ],
});

$("#hamburger").on("click", function () {
    $("header").toggleClass("open");
});
$("#navi a").on("click", function () {
    $("header").toggleClass("open");
});
$('#mask').on("click", function () {
    $("header").removeClass('open');
});

$(window).scroll(function () {
    $(".fadein").each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();
        if (scroll > target - windowHeight + 200) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
    });
});
});