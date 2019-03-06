'use strict'
//nav-menu-btn- toggle
$('.nav-btn-wrapper').on('click', function(){
    $('nav').toggleClass('right');
    $('.icon').toggleClass('close');
    $('.line').toggleClass('switch');

});

$('.nav-link').hover(				
    function () {
        $(this).find('.js-slideRight').animate({opacity:'1', right:'-127px'});
    },     
    function () {
        $(this).find('.js-slideRight').animate({opacity:'0', right:'0'});
    }
 );


