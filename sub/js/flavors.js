$(function(){
    
    
var tabBtn=$(".tab_btn>ul>li");
var tabCont=$(".tab_cont>div");
    
tabCont.hide().eq(0).show();
    
tabBtn.click(function(e){
e.preventDefault();
    
var target=$(this);
var index=target.index();
    
tabBtn.removeClass("active");
target.addClass("active");
tabCont.css("display","none");
tabCont.eq(index).css("display","block");
    
}); //tabBtn end
    
});  //function end