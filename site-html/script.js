$(document).ready(function(e) {
	// ScrollTop
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	}); 
	
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});	
	// Fixed Menu
	var nav   = $('header');
	var bod   = $('body');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			nav.addClass("header-fixed");
		} else {
			nav.removeClass("header-fixed");
		}
		//////////////////////////////////////
		//////////////////////////////////////
		if ($(this).scrollTop() > 80) {
			bod.addClass("body-fixed");
		} else {
			bod.removeClass("body-fixed");
		}
	});	
	// Serves Loop
	$('.serves_loop li').mouseover(function(){
		$('.serves_loop li').removeClass("flipInX animated");
		$(this).addClass("flipInX animated");
	});
	// Ajax
	$(".ajax").colorbox({ innerWidth:1200, innerHeight:"90%"});
	// Team Loop
   /* $('#team_loop').carouFredSel({
		auto                 : false,
		width                : 1200,
        direction            : "left",
        scroll : {
            duration        : 1000,
            pauseOnHover    : true
        },
		pagination: "#paged_team",
    });
	*/
	// Testimonials Loop
    $('#testimonials_loop').carouFredSel({
		auto                 : false,
        items                : 1,
        direction            : "left",
        scroll : {
            items            : 1,
            duration        : 500,
            pauseOnHover    : true
        },
		pagination: "#paged_test",
    });
	// Slider Product
    $('#slider_product').carouFredSel({
        items                : 1,
		auto                 : false,
        direction            : "left",
        scroll : {
            items            : 1,
            duration        : 500,
            pauseOnHover    : true
        },
		next: "#next_product",
		prev: "#prev_product",
    });
	//
});
