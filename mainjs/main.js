// JavaScript Document
$(function() {
var myFullpage = new fullpage('#fullpage', {
        verticalCentered: false,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3:false,
        scrollingSpeed: 800,
        anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage','6thPage','7thPage','8thPage'],
        navigation: true,
        navigationPosition: 'right',
		navigationTooltips: ['main', 'hi-biscus', 'tangerine', 'key lime', 'pure', 'coconut','all flavors','information'],
        responsiveWidth: 900,
		afterResponsive: function(isResponsive){

		}

    });
	$(function(){
	$('.menu_btn').click(function(){
		$('p.x1').toggleClass('active');
		$('p.x2').toggleClass('active');
		$('p.x3').toggleClass('active');
		$('.back').toggleClass('active');
		$('.menu').toggleClass('active');
	});

	/*$('.gnb li a').click(function(){
		$('.back').css("display","hidden");
		$('.menu').css("display","hidden");
		$('.gnb li').css("display","hidden");
		$('.back').css("display","hidden");
	});*/
		/* all flavors */
  var mySlider=$("#cont1-1 ul").bxSlider({
mode:"horizontal",
speed:500,
pager:false,
moveSlides:1,
slideWidth:500,
minSlides:3,
maxSlides:3,
slideMargin:30,
auto:false,
autoHover:true,
controls:false
  });

  $(".prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });

});

});