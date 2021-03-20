$('.customer-client').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1
        }
    }]
});


// menu
$(document).ready(function() {
    $(".mmenu").click(function() {
        $(".nav-bar").slideToggle().toggleClass('active');
    });
});
$(function() {
    var asset = window.location.href;
    $(".nav-bar li a").each(function() {
        if (asset == (this.href)) {
            $(this).closest(".nav-bar li").addClass("current-menu");
        }
    });
});
//portfolios
$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });
});
/// active portfolios
$('.portfolios-tab li').click(function() {
    $('.portfolios-tab li').removeClass('tab-default');
    $(this).addClass('tab-default');
});

$(document).ready(function() {
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({
        rel: 'group1',
        scrolling: false
    });
});
$(document).on('cbox_open', function() {
    $(document.body).css('overflow', 'hidden');
}).on('cbox_closed', function() {
    $(document.body).css('overflow', '');
});


// test slider
$('.slider').bbslider({
  auto:  true,
  timer: 3000,
    loop:  true
});