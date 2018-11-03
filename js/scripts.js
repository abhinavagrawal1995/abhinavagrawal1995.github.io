/*!
    Title: Web Portfolio
    Version: 1.1.1
    Last Change: 03/19/17
    Author: Abhinav Agrawal
    Repo: https://github.com/abhinavagrawal1995/abhinavagrawal1995.github.io
    Issues: https://github.com/abhinavagrawal1995/abhinavagrawal1995.github.io/issues
    
    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    if (window.location.protocol !== 'https:') window.location.protocol = 'https:';

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {
        e.preventDefault();
        var heading = $(this).attr('href');
        if(heading.startsWith("http")){
            var win = window.open(heading, '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // require(['node-mandrill'], function (foo) {
    //     console.log("foo is now loaded.");
    // });


    //Send Mail
    // $('#send').click(function(e) {
    //     e.preventDefault();

    //     mandrill('/messages/send', {
    //         message: {
    //             to: [{email: 'git@jimsc.com', name: 'Jim Rubenstein'}],
    //             from_email: 'you@domain.com',
    //             subject: "Hey, what's up?",
    //             text: "Hello, I sent this message using mandrill."
    //         }
    //     }, function(error, response)
    //     {
    //         //uh oh, there was an error
    //         if (error) console.log( JSON.stringify(error) );

    //         //everything's good, lets see what mandrill said
    //         else console.log(response);
    //     });

    // });

})(jQuery);
