$.fn.extend({
	imgRoll:function(){
		var $_this=$(this);
		var floor_x=1,floor_timer1=null,floor_v=0,judge=true;
		$_this.find('.randow_roll').scrollLeft($_this.find('.randow_roll_inner a').width());
		function floor_automove(){			
			floor_timer1=setInterval(function(){
				floor_x++;
				if (floor_x>=5) {
					$_this.find('.randow_roll').scrollLeft(0);
					floor_x=1;
				};
				floor_v++;
				if (floor_v>=4) {
					floor_v=0;
				};
				$_this.find('.randow_roll').stop().animate({scrollLeft: $_this.find('.randow_roll_inner a').width()*floor_x},'slow');
				$_this.find('.randow_roll .randow_roll_num li').eq(floor_v).addClass('roll_num_selected').siblings('li').removeClass('roll_num_selected');
			},2000)
		}
		floor_automove();

		$_this.find('.randow_roll .randow_roll_lef').click(function(){
			clearInterval(floor_timer1);
			if (judge==true) {
				judge=false;
				floor_x--;
				if (floor_x<=0) {
					$_this.find('.randow_roll').scrollLeft($_this.find('.randow_roll_inner a').width()*5);
					floor_x=4;
				};
				floor_v--;
				if (floor_v<0) {
					floor_v=3;
				};
				$_this.find('.randow_roll').stop().animate({scrollLeft: $_this.find('.randow_roll_inner a').width()*floor_x},function(){judge=true;});
				$_this.find('.randow_roll .randow_roll_num li').eq(floor_v).addClass('roll_num_selected').siblings('li').removeClass('roll_num_selected');				
			};	
			floor_automove();
		})
		$_this.find('.randow_roll .randow_roll_rig').click(function(){
			clearInterval(floor_timer1);
			if (judge==true) {
				judge=false;
				floor_x++;
				if (floor_x>=5) {
					$_this.find('.randow_roll').scrollLeft(0);
					floor_x=1;
				};
				floor_v++;
				if (floor_v>=4) {
					floor_v=0;
				};
				$_this.find('.randow_roll').stop().animate({scrollLeft: $_this.find('.randow_roll_inner a').width()*floor_x},function(){judge=true;});
				$_this.find('.randow_roll .randow_roll_num li').eq(floor_v).addClass('roll_num_selected').siblings('li').removeClass('roll_num_selected');		
			};		
			floor_automove();
		})
		$_this.find('.randow_roll .randow_roll_num li').mouseover(function(){
			clearInterval(floor_timer1);
			if (judge==true) {
				judge=false;
				var tar=$_this.find('.randow_roll .randow_roll_num li').index(this);
				floor_v=tar;
				floor_x=tar+1;
				$_this.find('.randow_roll').stop().animate({scrollLeft: $_this.find('.randow_roll_inner a').width()*floor_x},'slow',function(){judge=true;});
				$_this.find('.randow_roll .randow_roll_num li').eq(floor_v).addClass('roll_num_selected').siblings('li').removeClass('roll_num_selected');
			};	
			floor_automove();
		})
	}
})

$(function(){
	/*-------------------------------------------------body_top整体动画效果--------------------------------------------------------*/
	$('#body_top_inner>.hover').mouseover(function(){
		var tar=$('#body_top_inner>.hover').index(this);
		$('#body_top_inner>.hover>div>em').eq(tar).css('backgroundColor','white');
		$('#body_top_inner>.hover>h3').eq(tar).css({backgroundColor:'white',borderLeft:'1px solid #ddd',borderRight:'1px solid #ddd'});		
		// $('#body_top_inner>.hover>div').eq(tar).stop().slideDown('slow');
		$('#body_top_inner>.hover>div').eq(tar).stop().show();
		
	})
	$('#body_top_inner>.hover').mouseout(function(){
		var tar=$('#body_top_inner>.hover').index(this);
		$('#body_top_inner>.hover>h3').eq(tar).css({backgroundColor:'#F1F1F1',borderLeft:'1px solid #F1F1F1',borderRight:'1px solid #F1F1F1'});
		$('#body_top_inner>.hover>div>em').eq(tar).css('backgroundColor','#F1F1F1');
		$('#body_top_inner>.hover>div').eq(tar).hide();
	})
	/*---------------------------------------------body_top城市选择效果----------------------*/
	$('#body_top_inner .send_to .city_show_xiala .city li').mouseover(function(){
		var tar=$('#body_top_inner .send_to .city_show_xiala .city li').index(this);
		$('#body_top_inner .send_to .city_show_xiala .city li').eq(tar).css({'backgroundColor':'#ddd','color':'red'})
		for (var i = 0; i < $('#body_top_inner .send_to .city_show_xiala .city li').length; i++) {
			if($('#body_top_inner .send_to .city_show_xiala .city li').eq(i).html()==$('#body_top_inner .send_to .city_show').html()){
				$('#body_top_inner .send_to .city_show_xiala .city li').eq(i).css({'backgroundColor':'#C81623','color':'white'})
			}
		};
	})
	$('#body_top_inner .send_to .city_show_xiala .city li').mouseout(function(){
		var tar=$('#body_top_inner .send_to .city_show_xiala .city li').index(this);
		$('#body_top_inner .send_to .city_show_xiala .city li').eq(tar).css({'backgroundColor':'#fff','color':'#666'});
		for (var i = 0; i < $('#body_top_inner .send_to .city_show_xiala .city li').length; i++) {
			if($('#body_top_inner .send_to .city_show_xiala .city li').eq(i).html()==$('#body_top_inner .send_to .city_show').html()){
				$('#body_top_inner .send_to .city_show_xiala .city li').eq(i).css({'backgroundColor':'#C81623','color':'white'})
			}
		};
	})

	$('#body_top_inner .send_to .city_show_xiala .city li').click(function(){
		var tar=$('#body_top_inner .send_to .city_show_xiala .city li').index(this);
		$('#body_top_inner .send_to .city_show_xiala .city li').eq(tar).css({'backgroundColor':'#C81623','color':'white'}).siblings().css({'backgroundColor':'#fff','color':'#666'})
		$('#body_top_inner .send_to .city_show').html($('#body_top_inner .send_to .city_show_xiala .city li').eq(tar).html());
		$('#body_top_inner .send_to .city_show_xiala').hide();
	})



    /*--------------------------------------------------body_login_rig动画效果--------------------------------------------------*/
	$('#body_login .body_login_rig').mouseover(function(){
		$('#body_login .body_login_rig_xiala').show();
		$('#body_login .body_login_rig').css('backgroundColor','white');
		$('#body_login .body_login_rig_xiala em').css('backgroundColor','white');
	})
	$('#body_login .body_login_rig').mouseout(function(){
		$('#body_login .body_login_rig_xiala').hide();
		$('#body_login .body_login_rig').css('backgroundColor','#F9F9F9');
		$('#body_login .body_login_rig_xiala em').css('backgroundColor','#ddd');
	})

	/*---------------------------------------------------slide_left动画效果--------------------------------------------------*/
	// $(window).scroll(function(){
	// 	if ($("body").scrollTop()>181) {
	// 		$('#slide #slide_left .slide_left_li .slide_left_la').css('top',$("body").scrollTop()-181);
	// 	}else{
	// 		$('#slide #slide_left .slide_left_li .slide_left_la').css('top',0);
	// 	};
			
	// 	// alert($('body').scrollTop());
	// })

	$('#slide #slide_left .slide_left_li').mouseover(function(){
		var tar=$('#slide #slide_left .slide_left_li').index(this);
		$('#slide #slide_left .slide_left_li .slide_left_la').eq(tar).show();
		$('#slide #slide_left .slide_left_li .slide_left_li_postion').css('backgroundColor','#f7f7f7');
		var now=$("body").scrollTop()-181;
		if (now>0) {
			$('#slide #slide_left .slide_left_li .slide_left_la').css('top',now);
		}else{
			$('#slide #slide_left .slide_left_li .slide_left_la').css('top',0);
		};

	})
	$('#slide #slide_left .slide_left_li').mouseout(function(){
		var tar=$('#slide #slide_left .slide_left_li').index(this);
		$('#slide #slide_left .slide_left_li .slide_left_la').eq(tar).hide();
		$('#slide #slide_left .slide_left_li .slide_left_li_postion').css('backgroundColor','#b61d1d')
	})


	/*-----------------------------------------------------------图片JQ滚动--------------------------------------------------*/
	var x=null,timer1=null;
	function slide_automove(){
		var x=-1;
		timer1=setInterval(function(){
			x++;
			if (x>=$('#slide_mid .slide_mid_con a img').length) {
				x=0;
			};
			$('#slide_mid .slide_mid_con a').eq(x).fadeIn('slow').siblings().hide();
			$('#slide_mid .slide_mid_num li').eq(x).addClass('num_select').siblings().removeClass('num_select');
		},2000)
	}
	slide_automove();
	$('#slide_mid .slide_mid_lef').click(function(){
		clearInterval(timer1);
		x--;
		if (x<=0) {
			x=$('#slide_mid .slide_mid_con a img').length-1;
		};
		$('#slide_mid .slide_mid_con a').eq(x).fadeIn('slow').siblings().hide();
		$('#slide_mid .slide_mid_num li').eq(x).addClass('num_select').siblings().removeClass('num_select');
	})
	slide_automove();
	$('#slide_mid .slide_mid_rig').click(function(){
		clearInterval(timer1);
		x++;
		if (x>=$('#slide_mid .slide_mid_con a img').length) {
			x=0;
		};
		$('#slide_mid .slide_mid_con a').eq(x).fadeIn('slow').siblings().hide();
		$('#slide_mid .slide_mid_num li').eq(x).addClass('num_select').siblings().removeClass('num_select');
	})
	slide_automove();
	$('#slide_mid .slide_mid_num li').mouseover(function(){
		clearInterval(timer1);
		var tar=$('#slide_mid .slide_mid_num li').index(this);
		x=tar;
		$('#slide_mid .slide_mid_con a').eq(x).fadeIn('slow').siblings().hide();
		$('#slide_mid .slide_mid_num li').eq(x).addClass('num_select').siblings().removeClass('num_select');
	})
	slide_automove();


	/*------------------------------------------------slide_rig动画效果-------------------------------------------------------*/
	$('#slide_rig .life .icon_cor_head span').mouseover(function(){
		var tar=$('#slide_rig .life .icon_cor_head span').index(this);
		$('#slide_rig .life .icon_cor_head span').eq(tar).css({borderBottom:'1px solid #fff',borderTop:'2px solid #c81623'}).siblings().css({borderBottom:'1px solid #E8E8E7',borderTop:'2px solid #fff'})
		$('#slide_rig .life .icon_cor_con>div').eq(tar).show().siblings().hide();
	})
	$('#slide_rig .life .icon_cor_con>div').mouseover(function(){
		var tar=$('#slide_rig .life .icon_cor_con>div').index(this);
		$('#slide_rig .life .icon_cor_head span').eq(tar).css({borderBottom:'1px solid #fff',borderTop:'2px solid #c81623'}).siblings().css({borderBottom:'1px solid #E8E8E7',borderTop:'2px solid #fff'})
	})



	$('#slide_rig .life .icon_cor_con .con_huafei>a').mouseover(function(){
		var tar=$('#slide_rig .life .icon_cor_con .con_huafei>a').index(this);
		$('#slide_rig .life .icon_cor_con .con_huafei>a').eq(tar).addClass('con_huafei_select').siblings('a').removeClass('con_huafei_select');
		$('#slide_rig .life .icon_cor_con .con_huafei>div').eq(tar).show().siblings('div').hide();
	})

	$('#slide_rig .life .icon_cor_con .con_jipiao h4 span').mouseover(function(){
		var tar=$('#slide_rig .life .icon_cor_con .con_jipiao h4 span').index(this);
		$('#slide_rig .life .icon_cor_con .con_jipiao h4 span').eq(tar).addClass('con_jipiao_select').siblings('span').removeClass('con_jipiao_select');
		$('#slide_rig .life .icon_cor_con .con_jipiao>div').eq(tar).show().siblings('div').hide();
	})

	$('#slide_rig .life .icon_cor_con .con_dypiao h4>span').mouseover(function(){
		var tar=$('#slide_rig .life .icon_cor_con .con_dypiao h4>span').index(this);
		$('#slide_rig .life .icon_cor_con .con_dypiao h4>span').eq(tar).addClass('dypiao_select').siblings('span').removeClass('dypiao_select');
		$('#slide_rig .life .icon_cor_con .con_dypiao ol').eq(tar).show().siblings('ol').hide();
	})

	$('#slide_rig .life .icon_cor_con .con_youxi h4>span').mouseover(function(){
		var tar=$('#slide_rig .life .icon_cor_con .con_youxi h4>span').index(this);
		$('#slide_rig .life .icon_cor_con .con_youxi h4>span').eq(tar).addClass('con_youxi_select').siblings('span').removeClass('con_youxi_select');
		$('#slide_rig .life .icon_cor_con .con_youxi>div').eq(tar).show().siblings('div').hide();
	})

	


	$('#slide_rig .life .icon_cor .icon_cor_con p').click(function(){
		$('#slide_rig .life .life_icon').slideDown();
	})



	$('#slide_rig .life .life_icon>li:lt(4)').mouseover(function (ev){
		var event=ev||window.event;
		var from=event.fromElement||event.relatedTarget;
		if (from.innerHTML=='x') {
			return false;
		};
		while(from){
			if (this==from) {
				return false;
			};
			from=from.parentNode;
		}
		var tar=$('#slide_rig .life .life_icon>li').index(this);
		$('#slide_rig .life .life_icon').slideUp();
		$('#slide_rig .life .icon_cor_head span').eq(tar).css({borderBottom:'1px solid #fff',borderTop:'2px solid #c81623'}).siblings().css({borderBottom:'1px solid #E8E8E7',borderTop:'2px solid #fff'})
		$('#slide_rig .life .icon_cor_con>div').eq(tar).show().siblings('div').hide();
	})


	/*-------------------------------------------今日推荐效果-------------------------------------------------------------*/
	$('.today_recommend_rig').mouseover(function(){
		$('.today_recommend_rig_lef').show();
		$('.today_recommend_rig_rig').show();
	})
	$('.today_recommend_rig').mouseout(function(){
		$('.today_recommend_rig_lef').hide();
		$('.today_recommend_rig_rig').hide();
	})
	var commend_x=4;
	$('.today_recommend_rig_con').scrollLeft($('.today_recommend_rig_con_inn li').width()*4);
	$('.today_recommend_rig_lef').click(function(){
		commend_x=commend_x-4;
		if (commend_x<0) {
			$('.today_recommend_rig_con').scrollLeft($('.today_recommend_rig_con_inn li').width()*16);
			commend_x=12;
		} 
		$('.today_recommend_rig_con').animate({scrollLeft:$('.today_recommend_rig_con_inn li').width()*commend_x},'slow');
	})
	$('.today_recommend_rig_rig').click(function(){
		commend_x=commend_x+4;
		if (commend_x>20) {
			$('.today_recommend_rig_con').scrollLeft($('.today_recommend_rig_con_inn li').width()*4);
			commend_x=8;
		} 
		$('.today_recommend_rig_con').animate({scrollLeft:$('.today_recommend_rig_con_inn li').width()*commend_x},'slow');
	})

	/*----------------------------------------------------------------猜你喜欢动画----------------------------------------*/
	var guess_x=0;
	$('#guessloved .guess_head span').click(function(){
		$('#guessloved .guess_body .guess_body_move').css('left','0px')
		guess_x++;
		if (guess_x>=$('.guess_body .guess_con').length) {
			guess_x=0;
		};
		$('.guess_body ul').eq(guess_x).addClass('guess_con_show').siblings('ul').removeClass('guess_con_show');
		$('#guessloved .guess_body .guess_body_move').animate({left:'845px'})
	})

	
	$(window).scroll(function(){
		if (($('body').scrollTop()>=859-400)&&($('body').scrollTop()<859-200)){
			$('#guessloved .guess_body .guess_body_move').animate({left:'845px'})
		}else{
			$('#guessloved .guess_body .guess_body_move').css('left','0px');
		}
	})



	/*-------------------------------------------------------------楼层TAB切换------------------------------------------*/
	$.fn.extend({
		imgTAB:function(){
			var $_this=$(this);
			$_this.find('.tab li').mouseover(function(){
				var tar=$_this.find('.tab li').index(this);
				$_this.find('.tab li').eq(tar).addClass('tab_selected').siblings().removeClass('tab_selected');
				$_this.find('.tab li span').eq(tar).hide();
				$_this.find('.mc .mc_right').eq(tar).addClass('mc_right_selected').siblings('div').removeClass('mc_right_selected');
			})
			$_this.find('.tab li').mouseout(function(){
				var tar=$_this.find('.tab li').index(this);			
				$_this.find('.tab li span').eq(tar).show();				
			})
		}
	})

	$('.onefloor').imgTAB();
	$('.twofloor').imgTAB();
	$('.threefloor').imgTAB();
	$('.fourfloor').imgTAB();
	$('.fivefloor').imgTAB();
	$('.sixfloor').imgTAB();
	$('.sevenfloor').imgTAB();
	$('.eightfloor').imgTAB();
	$('.ninefloor').imgTAB();
	$('.tenfloor').imgTAB();
	$('.elevenfloor').imgTAB();
	



	/*-----------------------------------------------------大图滚动extend-----------------------------------------------------*/
	$('.onefloor').imgRoll();
	$('.twofloor').imgRoll();
	$('.threefloor').imgRoll();
	$('.fourfloor').imgRoll();
	$('.fivefloor').imgRoll();
	$('.sixfloor').imgRoll();
	$('.sevenfloor').imgRoll();
	$('.eightfloor').imgRoll();
	$('.ninefloor').imgRoll();
	$('.tenfloor').imgRoll();
	$('.elevenfloor .mc_right1').imgRoll();
	$('.elevenfloor .mc_right2').imgRoll();

	/*---------------------------------------------------今日抄底滚动JS代码---------------------------------------------*/
	var srcollhei=$('.jinrichaodi .remen .sw li').height()+20;
	// alert(srcollhei);
	var chaodi_timer=null,chaodi_timer_x=6;
	$('.jinrichaodi .remen .sw').scrollTop(chaodi_timer_x*srcollhei);	
	chaodi_timer=setInterval(function(){
		chaodi_timer_x--;
		if (chaodi_timer_x<=1) {
			$('.jinrichaodi .remen .sw').scrollTop(8*srcollhei);
			chaodi_timer_x=7;
		};
		$('.jinrichaodi .remen .sw').animate({scrollTop:chaodi_timer_x*srcollhei});
	},3000)

	/*----------------------------------------------------今日抄底图片的微动-------------------------------*/
	$('.jinrichaodi .chaodi .mc .margin_left').mouseover(function (ev){
		var from=event.fromElement||event.relatedTarget;
		while(from){
			if (this==from) {
				return false;
			};
			from=from.parentNode;
		}
		var tar=$('.jinrichaodi .chaodi .mc .margin_left').index(this);
		$('.jinrichaodi .chaodi .mc .margin_left .p_img img').eq(tar).animate({marginLeft:'-10px'});
	})

	$('.jinrichaodi .chaodi .mc .margin_left').mouseout(function (ev){
		var event=ev||window.event;
		var to=event.toElement||event.relatedTarget;
		//在mouseout事件中to，表示鼠标指向那个元素，也是事件委托类型，和target与srcElement相反
		// alert(to)
		while(to){
			if (this==to) {
				return false;
			};
			to=to.parentNode;
		}
		var tar=$('.jinrichaodi .chaodi .mc .margin_left').index(this);
		$('.jinrichaodi .chaodi .mc .margin_left .p_img img').eq(tar).animate({marginLeft:'0px'});
	})
	

	/*----------------------------------------------------------slide-left导航效果----------------------------------------*/
	


	$('.slide_left ul li').mouseover(function(){
		var tar=$('.slide_left ul li').index(this);
		$('.slide_left ul li .slide_floor').eq(tar).hide();
		$('.slide_left ul li .etitle').eq(tar).show();
		$('.slide_left ul li').eq(tar).css('backgroundColor','#c81623');
		$('.slide_left ul li .etitle').eq(tar).css('color','#fff');
	})

	$('.slide_left ul li').mouseout(function(){
		var tar=$('.slide_left ul li').index(this);
		$('.slide_left ul li .slide_floor').eq(tar).show();
		$('.slide_left ul li .etitle').eq(tar).hide();
		$('.slide_left ul li').eq(tar).css('backgroundColor','#fff');
		$('.slide_left ul li .etitle').eq(tar).css('color','#c81623');	
		for (var i = 0; i < $('.slide_left ul li .etitle').length; i++) {
			if ($('.slide_left ul li .etitle').eq(i).html()==$('.slide_left ul .select').html()) {
				$('.slide_left ul li .slide_floor').eq(i).hide();
				$('.slide_left ul li .etitle').eq(i).show();
			};
		};
	})

	$('.slide_left ul li').click(function(){
		var tar=$('.slide_left ul li').index(this);
		$('.slide_left ul li a[class*=select]').hide().removeClass('select').siblings().show();
		$('.slide_left ul li .slide_floor').eq(tar).hide();
		$('.slide_left ul li .etitle').eq(tar).show().addClass('select');
	})

	$('.slide_left ul li').eq(0).click(function(){
		$('body').animate({scrollTop:'1737px'});
	})
	$('.slide_left ul li').eq(1).click(function(){
		$('body').animate({scrollTop:'2504px'});
	})
	$('.slide_left ul li').eq(2).click(function(){
		$('body').animate({scrollTop:'3111px'});
	})
	$('.slide_left ul li').eq(3).click(function(){
		$('body').animate({scrollTop:'3719px'});
	})
	$('.slide_left ul li').eq(4).click(function(){
		$('body').animate({scrollTop:'4327px'});
	})
	$('.slide_left ul li').eq(5).click(function(){
		$('body').animate({scrollTop:'4935px'});
	})
	$('.slide_left ul li').eq(6).click(function(){
		$('body').animate({scrollTop:'5542px'});
	})
	$('.slide_left ul li').eq(7).click(function(){
		$('body').animate({scrollTop:'6149px'});
	})
	$('.slide_left ul li').eq(8).click(function(){
		$('body').animate({scrollTop:'6756px'});
	})
	$('.slide_left ul li').eq(9).click(function(){
		$('body').animate({scrollTop:'7363px'});
	})
	$('.slide_left ul li').eq(10).click(function(){
		$('body').animate({scrollTop:'7970px'});
	})

	function byclass2(classn){//局部获取类
		var tags=document.getElementsByTagName('*');
		var arr=[];
		// var reg=/\bclassn\b/g;//里面不能放变量
		var reg=new RegExp("\\b"+classn+"\\b");//无需全局属性！
		for (var i = 0; i < tags.length; i++) {
			//可获取有多个类名的元素
			// if (tags[i].className.indexOf(classn)!=-1) {
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	// var floor=byclass2('onefloor');
	// var floor=byclass2('twofloor');
	// var floor=byclass2('threefloor');
	// var floor=byclass2('fourfloor');
	// var floor=byclass2('fivefloor');
	// var floor=byclass2('sixfloor');
	// var floor=byclass2('sevenfloor');
	// var floor=byclass2('eightfloor');
	// var floor=byclass2('ninefloor');
	// var floor=byclass2('tenfloor');
	// var floor=byclass2('elevenfloor');
	// alert(reds.length)//3
	// alert(floor[0].innerHTML)


	function offsetTL(obj){//获取到body的offsetTop和offsetLeft
		var t=0,l=0;
		while(obj){
			t=t+obj.offsetTop;
			l=l+obj.offsetLeft;
			obj=obj.offsetParent;
		}
		return {top:t,left:l};
	}
	// alert(offsetTL(floor[0]).top);

	/*---------------------------------------------slide_right--------------------------------------------*/
	$('.slide_right .toolbar li').mouseover(function(){
		var tar=$('.slide_right .toolbar li').index(this);
		$('.slide_right .toolbar li .tab_ico').eq(tar).css('backgroundColor','#c81623');
		$('.slide_right .toolbar li .tab_text').eq(tar).css('backgroundColor','#c81623');
		$('.slide_right .toolbar li .tab_text').eq(tar).stop().animate({left:'-63px'})
	})
	$('.slide_right .toolbar li').mouseout(function(){
		var tar=$('.slide_right .toolbar li').index(this);
		$('.slide_right .toolbar li .tab_ico').eq(tar).css('backgroundColor','#7a6e6e');
		$('.slide_right .toolbar li .tab_text').eq(tar).css('backgroundColor','#7a6e6e');
		$('.slide_right .toolbar li .tab_text').eq(tar).stop().animate({left:'35px'})
	})

	$('.slide_right .toolbar .toolbar_footer .top').click(function(){
		$('body').animate({scrollTop: '0px'});
	})

})