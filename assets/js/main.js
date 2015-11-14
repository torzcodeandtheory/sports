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
	
	
});
