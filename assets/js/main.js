$(document).ready(function() {
	
	//dropdown var and height
	var dd = $('.dropdown ul');
	var wholeHeight = $('.dropdown ul')[0].scrollHeight;
	
	//nav hover
	$('.dropdown').hover(function() {
		$(this).addClass('active');
		$(dd).css('height', wholeHeight); //dynamic height
	}, function() {
		$(this).removeClass('active');
		$(dd).css('height', '0px');
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
});
