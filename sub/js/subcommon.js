// JavaScript Document

$(function(){
    
    
$('.menu_btn').click(function(){
		$('p.x1').toggleClass('active');
		$('p.x2').toggleClass('active');
		$('p.x3').toggleClass('active');
		$('.back').toggleClass('active');
		$('.menu').toggleClass('active');
	});

	
	
	
	
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 100 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".logo2").fadeIn();
      }else{
          $(".logo2").fadeOut(100);
      }
 });

$(".logo2, .logo2_1").on("mouseover",function(){
$(".logo2").css("display","none");
$(".logo2_1").css("display","block");
});
$(".logo2_1").on("mouseleave",function(){
$(".logo2").css("display","block");
$(".logo2_1").css("display","none");
});
    
  			//top scroll 부드럽게 올라가기	
	$(document).ready(function(){
		$('.top').click(function(e){
			$.scrollTo(this.hash || 0, 300);
			e.preventDefault();
	   });
	});
//top
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 500 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".top").fadeIn();
      }else{
          $(".top").fadeOut();
      }
 });
  



});  //function end


