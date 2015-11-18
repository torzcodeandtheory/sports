$(document).ready(function() {
	topmobileMenu();
	navFixed();
	//dropdown var and height
	var dd = $('.dropdown ul');
	
	//nav hover
	$('.dropdown').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});
	
	//search
	$('.searchIcon').click(function() {
		var parent = $(this).parent();
		if(!$(parent).hasClass('open')) {
			$(this).parent().addClass('open');
		} else {
			$(this).parent().removeClass('open');
		}
	});
	
	//top link responsive
	var topMore = $('.moreNavContents');
	$('.moreNav').click(function() {
		
		if(!$(this).hasClass('show')) {
			$(this).addClass('show');
			$(topMore).addClass('show visible');
		} else {
			$(this).removeClass('show');
			$(topMore).removeClass('show visible');
		}
	});
	
	//more responsive
	$('.more').click(function() {
		if(!$(this).hasClass('show')) {
			$(this).addClass('show');
		} else {
			$(this).removeClass('show');
		}
	});
	
	var midSectBox = $('.mid-section');
	var midSectUL = $('.mid-section ul.nav');

	$('.burgermenu').click(function() {
		if(!$(this).hasClass('open')) {
			$(this).addClass('open');
			$(midSectBox).addClass('show');
			$(midSectUL).addClass('show');
		} else {
			$(this).removeClass('open');
			$(midSectBox).removeClass('show');
			$(midSectUL).removeClass('show');
		}
	});
	
	//Full Carousel
	$('.fullCarousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		prevArrow: '<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',
		nextArrow: '<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>'
	});
	
	$('.csBox').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',
		nextArrow: '<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>',
		appendArrows: '.carouselSchedule',
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$('.carouselby4s').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',
		nextArrow: '<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>',
		appendArrows: '.showsBlock',
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$('.schedTab').tabs();
	$('.filterTab').tabs();
});

function topmobileMenu() {
	$('.topnav').on('click', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).children('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
			$('.topbar').removeClass('slideDown');
		} else {
			$(this).addClass('open');
			$(this).children('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
			$('.topbar').addClass('slideDown');
		}
	});
}

function navFixed() {
	$(window).on('scroll',function () {
		if ($(this).scrollTop() > 110) {
			$('.header').addClass('fixed');
		} else if ($(this).scrollTop() < 110) {
			$('.header').removeClass('fixed');
		}
	});
}