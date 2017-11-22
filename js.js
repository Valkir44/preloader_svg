$(window).on('load', function() { // makes sure the whole site is loaded
    $('#preloader').fadeOut(); // will first fade out the loading animation
    $('#page-preloader').delay(350).fadeOut('slow'); // will fade out the background that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});