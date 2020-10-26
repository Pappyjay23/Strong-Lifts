$(document).ready(function () {
    // FIXED NAVBAR
     $(".js--section-about").waypoint(function (direction) {
        if (direction == "down") {
            $(".js--nav").toggleClass("fixed")
        } else {
            $(".js--nav").toggleClass("fixed")
        }
        
    },{
        offset:"60px"
    })
   




    // LINKING NAVS AND BUTTONS
    $(".link-home").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-home").offset().top}, 1000)
    })
    $(".link-about").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-about").offset().top}, 1000)
    })
    $(".link-classes").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-classes").offset().top}, 1000)
    })
    $(".link-schedule").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-schedule").offset().top}, 1000)
    })
    $(".link-contact").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-contact").offset().top}, 1000)
    })

    // RESPONSIVE MENU ICONS 
    $(".js--menu-icon").click(function () {
        var menu = $(".js--menu-icon")
        if (menu.hasClass("ti-menu")) {
            menu.addClass("ti-close")
            menu.removeClass("ti-menu")
        }else {
            menu.addClass("ti-menu")
            menu.removeClass("ti-close")
        }
    })

    // ANIMATIONS ON CLICK
    $(".js--link-1").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-classes-row").offset().top}, 1000)
        $(".c-1").addClass("show animated fadeIn")
        $(".c-2").removeClass("show")
        $(".c-3").removeClass("show")
        $(".c-4").removeClass("show")
    })
    $(".js--link-2").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-classes-row").offset().top}, 1000)
        $(".c-2").addClass("show animated fadeIn")
        $(".c-1").removeClass("show")
        $(".c-3").removeClass("show")
        $(".c-4").removeClass("show")
    })
    $(".js--link-3").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-classes-row").offset().top}, 1000)
        $(".c-3").addClass("show animated fadeIn")
        $(".c-1").removeClass("show")
        $(".c-2").removeClass("show")
        $(".c-4").removeClass("show")
    })
    $(".js--link-4").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-classes-row").offset().top}, 1000)
        $(".c-4").addClass("show animated fadeIn")
        $(".c-1").removeClass("show")
        $(".c-3").removeClass("show")
        $(".c-2").removeClass("show")
    })
    

    // ANIMATION FOR TABLE LINKS
    $(".mo").click(function(){
        $("html, body").animate({scrollTop: $(".js--sc-links").offset().top}, 1000)
        // Shows Current Link 
        $(".mo").addClass("current")
        $(".tu").removeClass("current")
        $(".we").removeClass("current")
        $(".th").removeClass("current")
        $(".fr").removeClass("current")

        // Show Table Cells
        $(".sc-mo").addClass("open animated fadeIn")
        $(".sc-tu").removeClass("open animated fadeOut")
        $(".sc-we").removeClass("open animated fadeOut")
        $(".sc-th").removeClass("open animated fadeOut")
        $(".sc-fr").removeClass("open animated fadeOut")

    })
    $(".tu").click(function(){
        $("html, body").animate({scrollTop: $(".js--sc-links").offset().top}, 1000)
        // Shows Current Link 
        $(".tu").addClass("current")
        $(".mo").removeClass("current")
        $(".we").removeClass("current")
        $(".th").removeClass("current")
        $(".fr").removeClass("current")

        // Show Table Cells
        $(".sc-tu").addClass("open animated fadeIn")
        $(".sc-mo").removeClass("open animated")
        $(".sc-we").removeClass("open animated")
        $(".sc-th").removeClass("open animated")
        $(".sc-fr").removeClass("open animated")

    })
    $(".we").click(function(){
        $("html, body").animate({scrollTop: $(".js--sc-links").offset().top}, 1000)
        // Shows Current Link 
        $(".we").addClass("current")
        $(".tu").removeClass("current")
        $(".mo").removeClass("current")
        $(".th").removeClass("current")
        $(".fr").removeClass("current")

        // Show Table Cells
        $(".sc-we").addClass("open animated fadeIn")
        $(".sc-mo").removeClass("open animated")
        $(".sc-tu").removeClass("open animated")
        $(".sc-th").removeClass("open animated")
        $(".sc-fr").removeClass("open animated")


    })
    $(".th").click(function(){
        $("html, body").animate({scrollTop: $(".js--sc-links").offset().top}, 1000)
        // Shows Current Link 
        $(".th").addClass("current")
        $(".mo").removeClass("current")
        $(".we").removeClass("current")
        $(".tu").removeClass("current")
        $(".fr").removeClass("current")

        // Show Table Cells
        $(".sc-th").addClass("open animated fadeIn")
        $(".sc-mo").removeClass("open animated")
        $(".sc-we").removeClass("open animated")
        $(".sc-tu").removeClass("open animated")
        $(".sc-fr").removeClass("open animated")

    })
    $(".fr").click(function(){
        $("html, body").animate({scrollTop: $(".js--sc-links").offset().top}, 1000)
        // Shows Current Link 
        $(".fr").addClass("current")
        $(".mo").removeClass("current")
        $(".we").removeClass("current")
        $(".tu").removeClass("current")
        $(".th").removeClass("current")

        // Show Table Cells
        $(".sc-fr").addClass("open animated fadeIn")
        $(".sc-mo").removeClass("open animated")
        $(".sc-we").removeClass("open animated")
        $(".sc-th").removeClass("open animated")
        $(".sc-tu").removeClass("open animated")

    })
   

})

