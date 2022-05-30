// JavaScript Document//변수 ht에 브라우저의 높이값을 저장
	$(function(){
	
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	

	
//section위에서 마우스 휠을 움직이면
$("section").on("mousewheel",function(event,delta){    
//마우스 휠을 올렸을때	
if (delta > 0) {  
//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
var prev = $(this).prev().offset().top;
//문서 전체를 prev에 저장된 위치로 이동
$("html,body").stop().animate({"scrollTop":prev},500);
//마우스 휠을 내렸을때	 
}else if (delta < 0) {  
//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
var next = $(this).next().offset().top;
//문서 전체를 next에 저장된 위치로 이동
$("html,body").stop().animate({"scrollTop":next},500);                                         
}         
});		
});




$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		

		for(var i=0; i<9;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			}
		}							
	
	});
	
	
	
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		

		for(var i=0; i<9;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".dott_r li").removeClass();
				$(".dott_r li").eq(i).addClass("on");
			}
		}						

	});
	
	
		//스크롤 부드럽게
	$(document).ready(function(){
		$('.gnb>li>a, .dott_r a').click(function(e){
			$.scrollTo(this.hash || 0,300);		
				e.preventDefault();
				
			});
			

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
          $(".logo2").css("display","block");
      }else{
          $(".logo2").css("display","none");
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

		/* all flavors */
  $(function(){
  var mySlider=$("#cont1-1 ul").bxSlider({
mode:"horizontal",
speed:500,
pager:false,
moveSlides:1,
slideWidth:300,
minSlides:3,
maxSlides:3,
slideMargin:100,
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
  

});//function end




 
