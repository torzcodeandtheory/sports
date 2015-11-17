$(document).ready(function() {
	
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

	$('.burger').click(function() {
		if(!$(this).hasClass('show')) {
			$(this).addClass('show');
			$(midSectBox).addClass('show');
			$(midSectUL).addClass('show');
		} else {
			$(this).removeClass('show');
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
		appendArrows: '.carouselSchedule',
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
});
