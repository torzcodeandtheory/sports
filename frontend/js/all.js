$(window).resize(function(){var i=($(".mid-section"),$(".mid-section").height()),n=($(".mid-section ul.nav"),$(".mid-section ul.nav")[0].scrollHeight),o=n+i;console.log(o)});
$(document).ready(function(){var s=$(".dropdown ul"),e=$(".dropdown ul")[0].scrollHeight;$(".dropdown").hover(function(){$(this).addClass("active"),$(s).css("height",e)},function(){$(this).removeClass("active"),$(s).css("height","0px")}),$(".searchIcon").click(function(){var s=$(this).parent();$(s).hasClass("open")?$(this).parent().removeClass("open"):$(this).parent().addClass("open")});var i=$(".moreNavContents"),o=$(".moreNavContents")[0].scrollHeight;$(".moreNav").click(function(){$(this).hasClass("show")?($(this).removeClass("show"),$(i).removeClass("show visible"),$(i).css("height","0px")):($(this).addClass("show"),$(i).addClass("show visible"),$(i).css("height",o))});var a=$(".more ul"),h=$(".more ul")[0].scrollHeight,t=h+o;$(".more").click(function(){$(this).hasClass("show")?($(this).removeClass("show"),$(a).css("height","0"),$(i).css("height",o)):($(this).addClass("show"),$(a).css("height",h),$(i).css("height",t))});var l=($(".mid-section"),$(".mid-section").height()),c=$(".mid-section ul.nav"),n=$(".mid-section ul.nav")[0].scrollHeight,r=n+l;console.log(r),$(".burger").click(function(){$(this).hasClass("show")?($(this).removeClass("show"),$(c).removeClass("show"),$(c).css("height","0px")):($(this).addClass("show"),$(c).addClass("show"),$(c).css("height",n))}),$(".fullCarousel").slick({dots:!0,infinite:!0,speed:500,cssEase:"linear",lazyLoad:"ondemand",prevArrow:'<div class="prevBtn"><i class="fa fa-chevron-left fa-2x"></i></div>',nextArrow:'<div class="nextBtn"><i class="fa fa-chevron-right fa-2x"></i></div>'})});
//# sourceMappingURL=all.js.map
