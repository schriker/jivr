$(function(){

    window.addEventListener("scroll", function () {
        var target = $('.absolute-menu');
        var position = target.position();
        var height = $(window).scrollTop();
        if (height > position.top) {
            $(".absolute-menu").addClass("affix");
        } else {
            $(".absolute-menu").removeClass("affix");
        }
    });

    $(".hamburger-btn").on("click", function(){
        $(".mobile-menu-content").toggleClass("show");
        $(this).toggleClass("hamburger-btn-open");
    });

    $(".video-wrapper").hide();

    function playVideo(triger) {
        $(".video-cover").hide();
        $(".video-wrapper").show();
        var video = document.getElementById("home-page-video");
        if (triger === "start") {
            video.play();
        }
        else {
            video.pause();
        }
    }

    $(".video-cover-btn").on("click", function() {
        playVideo("start")
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


    var $slogans = $("h2.slogan").find("span");
    var $holder = $("#holder");

    $slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
    
    var transitionTime = 0.5;
    var slogansDelayTime = 2;
    
    var totalSlogans = $slogans.length;
    
    var oldSlogan = 0;
    var currentSlogan = -1;
    	
    switchSlogan();
    
    function switchSlogan(){
        
        oldSlogan = currentSlogan;
        
        if(currentSlogan < totalSlogans-1){
            currentSlogan ++
        } else {
            currentSlogan = 0;
        }
        
        TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
        TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
        
        TweenLite.delayedCall(slogansDelayTime, switchSlogan);
    }

    var viewer = document.querySelector('.viewer'),
    frame_count  = 4,
    offset_value = 120;

    var videoController = new ScrollMagic.Controller({
        globalSceneOptions: {
        triggerHook: 0.15,
        reverse: true
        }
        });

    new ScrollMagic.Scene({
        triggerElement: '.video-trigger',
    }).addTo(videoController).on("enter leave", function(e){
        if (e.type == "enter") {
            playVideo("start");
        }
        if (e.type == "leave") {
            playVideo("stop");
        }
    });

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
        triggerHook: 0,
        reverse: true
        }
    });
    
    new ScrollMagic.Scene({
    triggerElement: '#sticky',
    duration: (frame_count * offset_value) + 'px',
    reverse: true
    })
    .setPin('#sticky')
    // .addIndicators()
    .addTo(controller);

    for (var i = 1, l = frame_count; i <= l; i++) {

            new ScrollMagic.Scene({
                triggerElement: '#sticky',
                offset: i * offset_value
                })
                .setClassToggle(viewer, 'frame' + i)
                .addTo(controller);

    }

    var width = $(document).width();

    if (width >= 768) {
        var myFullpage = new fullpage('#folding', {
            anchors: ['slide-0', 'slide-1', 'slide-2', 'slide-3', 'slide-4'],
            navigation: true,
            navigationPosition: 'right',
            scrollOverflow: true,
            responsiveWidth: 767,
            licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
            onLeave: function(origin, destination){
               if(destination.index > 0) {
                    $(".absolute-menu").addClass("affix"); 
               }
               else if (destination.index === 0) {
                    $(".absolute-menu").removeClass("affix");
               }
            }
        });
    }
    else if(width < 768) {
        var myFullpage = new fullpage('#folding', {
            anchors: ['slide-0', 'slide-1', 'slide-2', 'slide-3', 'slide-4'],
            navigation: true,
            navigationPosition: 'right',
            scrollOverflow: false,
            responsiveWidth: 768,
            licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
        });
    }
});