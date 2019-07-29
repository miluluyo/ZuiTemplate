/*一进页面*/
	$(window).ready(function(){
		if ($(window).width()<768) {
			movile();
		}else if ($(window).width()>992) {
			rightw();
		}else if($(window).width()<992&&$(window).width()>768){
			rightw();
		}else if($(window).width()<768){
			right_shrink();
		}
	})
	/*右侧div 左侧固定宽度200*/
	function rightw(){
		$(".black").hide();
		if ($(".shrink").is(".shou")) {
			$(".left").attr("style","width: 60px;");
			$(".nav_boss_text").addClass("nav_boss_text_noshow")
			$(".top_logo_box").attr("style","width: 60px;");
			$('.left_nav').find(".nav_shrink").removeClass("show");
		}else{
			$(".left").attr("style","width: 200px;");
			$(".nav_boss_text").removeClass("nav_boss_text_noshow");
			$(".top_logo_box").attr("style","width: 200px;");
			if ($(".left_nav").find(".nav_boss").is(".nav_boss_select")) {
				$(".nav_boss_select").parent().find(".nav_shrink").addClass("show");
			}
		}
		var rightw = $(window).width()-$(".left").width();
		$(".right").attr("style","width:"+rightw+"px;");
		var right_conh = $(".right").height()-$(".right_nav").height();
		$(".right_con").attr("style","height:"+right_conh+"px");
	}
	/*右侧div 左侧隐藏*/
	function right_shrink(){
		if ($(".shrink").is(".shou")) {
			$(".left").attr("style","width: 60px;margin-left:-60px;")
		}else{
			$(".left").attr("style","width: 200px;margin-left:-200px;")
		}
		$(".right").attr("style","width:100%;")
		var right_conh = $(".right").height()-$(".right_nav").height()
		$(".right_con").attr("style","height:"+right_conh+"px");
	}
	/*移动端*/
	function movile(){
		if ($(".shrink").is(".shou")) {
			$(".left").attr("style","width: 200px;")
			var rightw = $(window).width()-$(".left").width();
			$(".right").attr("style","width:"+rightw+"px;");
			var right_conh = $(".right").height()-$(".right_nav").height()
			$(".right_con").attr("style","height:"+right_conh+"px");
			$(".black").attr("style","display:block;width:"+rightw+"px");
			$(".nav_boss_text").removeClass("nav_boss_text_noshow")
			$(".top_logo_box").attr("style","")
			if ($(".left_nav").find(".nav_boss").is(".nav_boss_select")) {
					$(".nav_boss_select").parent().find(".nav_shrink").addClass("show");
				}
		}else{
			$(".left").attr("style","width: 0px;margin-left:0px;")
			var rightw = $(window).width()-0;
			$(".right").attr("style","width:"+rightw+"px;");
			var right_conh = $(".right").height()-$(".right_nav").height()
			$(".right_con").attr("style","height:"+right_conh+"px");
			$(".black").attr("style","");
			$(".top_logo_box").attr("style","display:none")
		}
	}
	/*监听页面改变*/
	$(window).resize(function(){
		if ($(window).width()<768) {
			movile();
		}else if ($(window).width()>992) {
			rightw();
		}else if($(window).width()<992&&$(window).width()>768){
			rightw();
		}else if($(window).width()<768){
			right_shrink();
		}
	})
	/*点击收缩按钮*/
	$(document).on("click",".shrink",function(){
		if ($(window).width()>768) {
			if($(this).is(".shou")){
				$(this).removeClass("shou");
				$(".left").attr("style","width: 200px;")
				var rightw = $(window).width()-$(".left").width();
				$(".right").attr("style","width:"+rightw+"px;");
				var right_conh = $(".right").height()-$(".right_nav").height()
				$(".right_con").attr("style","height:"+right_conh+"px");
				$(".nav_boss_text").removeClass("nav_boss_text_noshow");
				$(".top_logo_box").attr("style","width: 200px;");
				if ($(".left_nav").find(".nav_boss").is(".nav_boss_select")) {
					$(".nav_boss_select").parent().find(".nav_shrink").addClass("show");
				}
			}else{
				if ($(".left_nav").find(".nav_boss").is(".nav_boss_select")) {
					$(".nav_boss_select").parent().find(".nav_shrink").addClass("show");
				}
				$(this).addClass("shou");
				$(".left").attr("style","width: 60px;")
				var rightw = $(window).width()-$(".left").width();
				$(".right").attr("style","width:"+rightw+"px;");
				var right_conh = $(".right").height()-$(".right_nav").height()
				$(".right_con").attr("style","height:"+right_conh+"px");
				$(".nav_boss_text").addClass("nav_boss_text_noshow")
				$('.left_nav').find(".nav_shrink").removeClass("show");
				$(".top_logo_box").attr("style","width: 60px;");
				
			}
		}else{
			if ($(".shrink").is(".shou")) {
				$(this).removeClass("shou");
				$(".left").attr("style","width: 0px;margin-left:0px;")
				var rightw = $(window).width()-0;
				$(".right").attr("style","width:"+rightw+"px;");
				var right_conh = $(".right").height()-$(".right_nav").height()
				$(".right_con").attr("style","height:"+right_conh+"px");
				$(".black").attr("style","");
				$(".top_logo_box").attr("style","display:none")
			}else{
				$(this).addClass("shou");
				$(".left").attr("style","width: 200px;")
				var rightw = $(window).width()-$(".left").width();
				$(".right").attr("style","width:"+rightw+"px;");
				var right_conh = $(".right").height()-$(".right_nav").height()
				$(".right_con").attr("style","height:"+right_conh+"px");
				$(".black").attr("style","display:block;width:"+rightw+"px");
				$('.left_nav').find(".nav_boss_text").removeClass("nav_boss_text_noshow");
				$(".top_logo_box").attr("style","")
			}
		}
		
	})
	/*移动端左侧显示，右侧蒙层*/
	$(document).on("click",".black",function(){
		$(".shrink").click()
		/*$(".left_nav").find(".nav_shrink").removeClass("show")*/
	})
	/*自写nav收缩*/
	$(document).on("click",".nav_boss",function(){
		/*if ($(".nav_boss").eq($(this).index(".nav_boss")).hasClass("nav_shrink_li")) {
			$(".nav_boss").eq($(this).index(".nav_boss").remove();
		}*/
		if ($(".shrink").is(".shou")) {
			if ($(window).width()>768) {
				$(".shrink").click()
			}
		}
		if ($(this).parent().find(".nav_shrink").is(".show")) {
			$(this).parent().find(".nav_shrink").removeClass("show");
			$(this).removeClass("nav_boss_select");
		}else{
			$('.left_nav').find(".nav_shrink").removeClass("show");
			$('.left_nav').find(".nav_boss_select").removeClass("nav_boss_select");
			
			$(this).parent().find(".nav_shrink").addClass("show");
			$(this).addClass("nav_boss_select");
		}

	})
	$(document).on("click",".nav_shrink_a",function(){
		if ($(window).width()>768) {
			if ($(".shrink").is(".shou")) {
				$(".shrink").click()
			}
		}else{
			if ($(".shrink").is(".shou")) {
				$(".shrink").click()
			}
		}
		$('.left_nav').find(".nav_shrink_a_select").removeClass("nav_shrink_a_select");
		$(this).find("li").addClass("nav_shrink_a_select");
		$(".iframe").attr("src",$(this).attr("name"));/*页面切换*/
		$(".iframe").show();
		$(".options_box").hide();
	})

var color = ["000","66c8d9","4FC1E9","5D9CEC","48CFAD","A0D468","FFCE54","FC6E51","ED5565","AC92EC","EC87C0","37bc9b","2fa084"];
var color2 = ["66c8d9","4FC1E9","5D9CEC","48CFAD","A0D468","FFCE54","FC6E51","ED5565","AC92EC","EC87C0","37bc9b","2fa084"];
//最好将这些颜色数值存到数据库
$(document).ready(function(){
	for (var i = 0; i < color.length; i++) {
		$(".options_colorbox_pure").append("<div class='options_color_pure'><div class='color_name' style='background-color:#"+color[i]+";cursor:pointer'></div><div class='color_name'>#"+color[i]+"</div></div>")
	}
	for (var j = 0; j < color2.length; j++) {
		$(".options_colorbox_mashup").append("<div class='options_color_mashup'><div class='options_colorbox_mashup_top' style='background:#"+color2[j]+"'></div><div class='options_colorbox_mashup_left'></div><div class='color_name'>#"+color2[j]+"</div></div>")
	}
})

$(document).on("click",".options_color_pure",function(){
	/*$(".top").css("background","")
	$(".top").css("color","")
	$(".top_logo_box").css("background","")
	$(".left").css("background","")
	$(".nav_boss").css("color","")
	$(".nav_shrink_li").css("color","")*/
	$(".style_theme").html("");

	$("#colorcss").attr("href",String("css/theme/pure_"+color[$(this).index(".options_color_pure")]+".css"));

	


})
$(document).on("click",".options_color_mashup",function(){
	/*$(".top").css("background","")
	$(".top").css("color","")
	$(".top_logo_box").css("background","")
	$(".left").css("background","")
	$(".nav_boss").css("color","")
	$(".nav_shrink_li").css("color","")*/
	
	$(".style_theme").html("");
	$("#colorcss").attr("href",String("css/theme/mashup_"+color2[$(this).index(".options_color_mashup")]+".css"));
})



