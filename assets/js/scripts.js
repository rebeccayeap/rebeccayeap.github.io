(function($) {
    var allfunction = {
        // header dropdawn message function here
        interaction_click: function() {
            $(".interaction").on("click", function(e) {
                $(".interaction_design").addClass("active");
                $('.product_design').removeClass('active')
                $('.business_design ').removeClass('active')
            });
            $(".product").on("click", function(e) {
                $(".product_design").addClass("active");
                $('.interaction_design').removeClass('active')
                $('.business_design ').removeClass('active')
            });
            $(".business").on("click", function(e) {
                $(".business_design").addClass("active");
                $('.product_design').removeClass('active')
                $('.interaction_design ').removeClass('active')
            });

        },
        smoothscroll: function() {
            $('.hidden-tab').smoothScroll({
                duration: 1000, // animation speed
                easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
                offset: 152 // custom offset
            });
            $('.go-home').smoothScroll({
                duration: 1000, // animation speed
                easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
                offset: 0 // custom offset
            });
        },
        waypoints: function() {
            var waypoint = new Waypoint({
                element: document.getElementById('sticky-nav'),
                handler: function(direction) {
                    $(".sticky_icone").addClass("active");
                },
                offset: '20%'
            });
            var waypoint = new Waypoint({
                element: document.getElementById('sticky-nav'),
                handler: function(direction) {
                    $(".sticky_icone").removeClass("active");
                },
                offset: '30%'
            })

        },
        tabAdd: function() {
            $('.tab-comon').click(function() {
                $('.tab-pane').each(function() {
                    $(this)
                        .find('.hidden-tab')
                        .removeClass('menu-active')
                    console.log($(this).find('.hidden-tab'))
                })
            })
        },
        sticky_menu: function() {
            var waypoint = new Waypoint({
                element: document.getElementById('sticky-nav'),
                handler: function(direction) {
                    $(".tab-section").addClass("active");
                },
                offset: '10%'
            });
            var waypoint = new Waypoint({
                element: document.getElementById('sticky-nav'),
                handler: function(direction) {
                    $(".tab-section").removeClass("active");
                },
                offset: '15%'
            });
            var waypoint = new Waypoint({
                element: document.getElementById('sticky-nav'),
                handler: function(direction) {
                    $(window).scroll(function() {
                        var scrollDistance = $(window).scrollTop();
                        // Assign active class to nav links while scolling
                        $('.comon-section').each(function(i) {
                            var topOffset = $(this).position().top + 400
                            if (topOffset <= scrollDistance) {
                                $('.hidden-tab').eq(i).parents(".tab-pane").find(".hidden-tab").removeClass('menu-active');
                                $('.hidden-tab').eq(i).addClass('menu-active')
                            }
                        });
                    }).scroll();
                },
            });


        },
        init: function() {
            allfunction.interaction_click()
            allfunction.smoothscroll()
            allfunction.waypoints()
            allfunction.sticky_menu()
            allfunction.tabAdd()
        },
    }

    $(document).ready(function() {
        allfunction.init();
    });

})(jQuery);

$(window).load(function() {});