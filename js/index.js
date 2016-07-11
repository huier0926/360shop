//banner轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
// 图片按需加载
  $(window).scroll(function(){
	 var tops=$(window).scrollTop();
	 $("img").each(function(index,nowobj){
        if(tops+$(window).height()>$(nowobj).position().top){
            $(nowobj).attr("src",$(nowobj).attr("data-src"));
        }
	})  
})