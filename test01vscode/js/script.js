
    // page-top
    $(document).ready(function(){
        $("#page-top").hide();
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 100) {
                $("#page-top").fadeIn("fast");
            } else {
                $("#page-top").fadeOut("fast");
            }
            scrollHeight = $(document).height();
            scrollPosition = $(window).height() + $(window).scrollTop();
            footHeight = $("footer").innerHeight();
            if ( scrollHeight - scrollPosition  <= footHeight ) {
                $("#page-top").css({
                    "position":"fixed",
                    "bottom": "20px",
                    "right": "20px",
                    "z-index":"1000"
                });
            } else {
                $("#page-top").css({
                    "position":"fixed",
                    "bottom": "20px",
                    "right": "20px",
                    "z-index":"1000"
                });
            }
        });
        $('#page-top').click(function () {
            $('body,html').animate({
            scrollTop: 0
            }, 400);
            return false;
        });
    });