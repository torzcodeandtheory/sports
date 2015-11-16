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
	var tmHeight = $('.moreNavContents')[0].scrollHeight;
	
	//nav hover
	$('.moreNav').click(function() {
		
		if(!$(this).hasClass('show')) {
			$(this).addClass('show');
			$(topMore).addClass('show visible');
			$(topMore).css('height', tmHeight);
		} else {
			$(this).removeClass('show');
			$(topMore).removeClass('show visible');
			$(topMore).css('height', '0px');
		}
	});
	
	//more responsive
	var ddMore = $('.more ul');
	var moreHeight = $('.more ul')[0].scrollHeight;
	var totalHeight = moreHeight + tmHeight;
	//nav hover
	$('.more').click(function() {
		if(!$(this).hasClass('show')) {
			$(this).addClass('show');
			$(ddMore).css('height', moreHeight); //dynamic height
			$(topMore).css('height', totalHeight);
		} else {
			$(this).removeClass('show');
			$(ddMore).css('height', '0');
			$(topMore).css('height', tmHeight);
		}
	});
	
	var midSectBox = $('.mid-section');
	var midSect = $('.mid-section').height();
	var midSectUL = $('.mid-section ul.nav');
	var midSectULHeight = $('.mid-section ul.nav')[0].scrollHeight;
	var totalHeight2 = midSectULHeight + midSect;
	//console.log(totalHeight2)

	$('.burger').click(function() {
		if(!$(this).hasClass('show')) {
			$(this).addClass('show');
			$(midSectBox).addClass('show');
			$(midSectUL).addClass('show');
			$(midSectUL).css('height', midSectULHeight);
			$(midSectBox).css('height', totalHeight2);
		} else {
			$(this).removeClass('show');
			$(midSectBox).removeClass('show');
			$(midSectUL).removeClass('show');
			$(midSectUL).css('height', '0px');
			$(midSectBox).css('height', '80px');
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
