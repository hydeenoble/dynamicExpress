/**
 * Created by hydee on 10/13/16.
 */

$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling to all links inside a navbar
    $("#navBar a, footer a[href = '#home']").on('click', function(event){

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash (#)
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

});