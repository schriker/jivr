$(function(){

    $(".owl-carousel-media-reviews").owlCarousel({
        loop: false,
        autoplay: true,
        autoHeight: false,
        dotsContainer: '.dots-media-reviews',
        responsive : {
            0 : {
                items: 3
            },
            480 : {
                items: 3
            },
            768 : {
                items: 3
            },
            991 : {
                items: 3
            }
        }
    });

    $(".owl-carousel-user-reviews").owlCarousel({
        loop: false,
        autoplay: true,
        autoHeight: false,
        dotsContainer: '.dots-user-reviews',
        responsive : {
            0 : {
                items: 3
            },
            480 : {
                items: 3
            },
            768 : {
                items: 3
            },
            991 : {
                items: 3
            }
        }
    });

    $(".owl-item").addClass("col");


    $(".js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    // @explanation
    // define the pin once in the target scene, but
    // don't attach animation within same scene; instead
    // create a scene for every class and toggle them on or off
    // depending on the offset value of the scroll.

    // @info
    // To see this pen with indicators make sure to uncomment the 
    // lines containing .addIndicators()
    //
    // While this is a scroll example I've also included a CSS only
    // version to understand how steps can work in CSS animations.

    // global vars
    var viewer = document.querySelector('.viewer'),
    frame_count  = 4,
    offset_value = 120;

    // init controller
    var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
    triggerHook: 0,
    reverse: true
    }
    });

    // build pinned scene
    new ScrollMagic.Scene({
    triggerElement: '#sticky',
    duration: (frame_count * offset_value) + 'px',
    reverse: true
    })
    .setPin('#sticky')
    // .addIndicators()
    .addTo(controller);

    // build step frame scene
    for (var i = 1, l = frame_count; i <= l; i++) {

            new ScrollMagic.Scene({
                triggerElement: '#sticky',
                offset: i * offset_value
                })
                .setClassToggle(viewer, 'frame' + i)
                // .addIndicators()
                .addTo(controller);

    }
});