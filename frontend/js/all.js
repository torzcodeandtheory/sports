$(window).resize(function(){$(".mid-section"),$(".mid-section").height(),$(".mid-section ul.nav"),$(".mid-section ul.nav")[0].scrollHeight});
$(document).ready(function(){$(".dropdown ul");$(".dropdown").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")}),$(".searchIcon").click(function(){var s=$(this).parent();$(s).hasClass("open")?$(this).parent().removeClass("open"):$(this).parent().addClass("open")});var s=$(".moreNavContents");$(".moreNav").click(function(){$(this).hasClass("show")?($(this).removeClass("show"),$(s).removeClass("show visible")):($(this).addClass("show"),$(s).addClass("show visible"))}),$(".more").click(function(){$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show")});var i=$(".mid-section"),e=$(".mid-section ul.nav");$(".burger").click(function(){$(this).hasClass("show")?($(this).removeClass("show"),$(i).removeClass("show"),$(e).removeClass("show")):($(this).addClass("show"),$(i).addClass("show"),$(e).addClass("show"))}),$(".fullCarousel").slick({dots:!0,infinite:!0,speed:500,cssEase:"linear",lazyLoad:"ondemand",prevArrow:'<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',nextArrow:'<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>'}),$(".csBox").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,prevArrow:'<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',nextArrow:'<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>',appendArrows:".carouselSchedule",variableWidth:!0,responsive:[{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".carouselby4s").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,prevArrow:'<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',nextArrow:'<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>',appendArrows:".showsBlock",responsive:[{breakpoint:1023,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".schedTab").tabs(),$(".filterTab").tabs()});
//# sourceMappingURL=all.js.map
