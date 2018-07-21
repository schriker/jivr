$(function(){

    $(".hamburger-btn").on("click", function(){
        $(".mobile-menu-content").toggleClass("show");
        $(this).toggleClass("hamburger-btn-open");
    });

    $(".video-wrapper").hide();

    $(".video-cover-btn").on("click", function(){
        $(".video-cover").hide();
        $(".video-wrapper").show();
        var video = document.getElementById("home-page-video");
        video.play();
    });

    $(".owl-carousel-media-reviews").owlCarousel({
        loop: false,
        autoplay: true,
        autoHeight: false,
        dotsContainer: '.dots-media-reviews',
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1
            },
            768 : {
                items: 2
            },
            991 : {
                items: 3
            }
        }
    });

    $(".owl-carousel-features").owlCarousel({
        loop: false,
        autoplay: true,
        autoHeight: false,
        responsive : {
            320 : {
                loop: true,
                items: 1,
                stagePadding: 75
            },
            375 : {
                loop: true,
                items: 1,
                stagePadding: 90
            },
            425 : {
                loop: true,
                items: 1,
                stagePadding: 100
            },
            500 : {
                loop: true,
                items: 2,
                stagePadding: 90
            },            
            650 : {
                loop: true,
                items: 3,
                stagePadding: 70
            },
            750 : {
                loop: true,
                items: 3,
                stagePadding: 80
            },
            850 : {
                loop: true,
                items: 3,
                stagePadding: 90
            },
            950 : {
                items: 5
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
                items: 1
            },
            480 : {
                items: 1
            },
            768 : {
                items: 2
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