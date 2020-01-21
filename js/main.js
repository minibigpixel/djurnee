$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


(function($) {
    "use strict";

    // manual carousel controls
    $('.next-dest2').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev-dest2').click(function(){ $('.carousel').carousel('prev');return false; });

})(jQuery);

$(document).ready(function () {
    $('.testiSlide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
});

$(document).ready(function() {
    $('#navbarDropdown').mouseenter(function() {
        $('.dropdown-menu').slideToggle(300, "linear");
    });

    $('.dropdown-menu').mouseleave(function() {
        $(this).slideToggle(300, "linear");
    });
});


//Sticky header
// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("second-head");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#second-head").addClass("sticky");
    } else {
        $("#second-head").removeClass("sticky");
    }
});

if (window.matchMedia("(max-width: 700px)").matches) {
    $('.carousel_home').find('.carousel-control-prev').find('span.pre').text('')
    $('.carousel_home').find('.carousel-control-next').find('span').text('')
    $('.table-popular').find('.btn-book-table').text('BOOK')
} else {
    /* The viewport is greater than 700 pixels wide */
}

$( "#menu" ).find('li.dropdown').click(function() {
    $( ".sub-menu" ).toggle( "slow" );
});