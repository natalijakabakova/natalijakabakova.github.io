/*
 * Template Name: INK DESIGN - Responsive organic farm template
 * Description: INK DESIGN - Responsive organic farm template
 * Author: INK DESIGN
 * Version: 1.0
 */

/*----------------------------------------------------------------------
Table of Contents 
------------------------------------------------------------------------

/*---------------*1 SCROLL TO TOP BUTTON---------------------*/

jQuery(document).ready(function() {

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});

/*------------------*2 VIDEO FOR ANDROID----------------------*/

var video = document.getElementById(element);
video.addEventListener('click', function() {
    video.play();
}, false);
var ua = detect.parse(navigator.userAgent);
if (ua.os.family === 'Android') {
    video.setAttribute('controls', 'controls');
}

