/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-10 16:21:28
 * @version $Id$
 */

$(function(){

	let $wrap = $("#wrap"),
		$navLi = $("#head_nav .nav li")
	;
	let y = 0, //页面高度百分比
    	chgTime = 0, //滚动间隔
    	nowIdx = 0 //当前序号
    ;

	//全屏滚动
	$(window).mousewheel(function(e,d){
		//设置滚动间隔
		// if( new Date() - chgTime < 1000 )return;
		// chgTime = new Date();
		//判断滚动方向并设置li样式
		if( d < 0 ){
            y = y - 20;
            if( y < -120 ) y = -120;
            $wrap.css("transform", `translateY(${y}%)`);
            if( nowIdx < 6 ){
                nowIdx++;
                $navLi.eq(nowIdx).addClass("navShow").siblings().removeClass("navShow");
            }
        }else{
            y = y + 20;
            if( y > 0 ) y = 0;
            $wrap.css("transform", `translateY(${y}%)`);
            if( nowIdx > 0 ){
                nowIdx--;
                $navLi.eq(nowIdx).addClass("navShow").siblings().removeClass("navShow");
            }
        }
        //进入页面时加载特效
        // setTimeout( reload,500 );
        line();
	});

	//设置nav交互
    $navLi.each(function (index,ele) {
        //hover事件
        let $ele = $(ele);
        $ele.hover(function () {
            if( nowIdx === index )return;
            $(this).toggleClass("navShow");
        });
        //点击事件
        $ele.click(function () {
            if( nowIdx === index )return;
            $navLi.eq(nowIdx).removeClass("navShow");
            $(this).addClass("navShow");
            nowIdx = index;
            //滚动页面
            if( y/20 === nowIdx )return;
            y = index*-20;
            $wrap.css("transform", `translateY(${y}%)`);
            //进入页面时加载特效
            // setTimeout(reload, 500);
            line();
        });
    });

    //nav下划线特效函数
    let $navLine = $("#head_nav>.nav>.line");
    function line(){
        let $nowLi = $navLi.eq(nowIdx);
        let liLeft = $nowLi.position().left + $nowLi.width()/2;
        $navLine.css("left", liLeft - $navLine.width() / 2);
    }

    //index轮播
    let $ban = $("#index .ban");
    let banIndex = 2;
    function lunbo() {
        $ban.removeClass("retran");
        $ban.css("left", "-"+ banIndex*100 +"%");
        banIndex++;
        if( banIndex > 3 ){
            setTimeout( function () {
                $ban.addClass("retran");
                $ban.css("left", "-"+ 100 +"%");
                banIndex = 2;
            },1100 )
        }
    }
    setInterval( lunbo , 3000 );

    //能做的 板块
    let $P3Div1 = $("#page3>div"),
        $P3Div2 = $("#page3 .wallpaper"),
        $P3Div3 = $("#page3 .wallpaper>.p3msg"),
        $P3H2 = $("#page3 .wallpaper>h2"),
        $P3Close = $("#page3 i")
    ;
    let state = false;

    $P3Div2.each(function (index,dom) {
        if( state === false ){
            $P3Div2.eq(index).click = function () {

                state = true;
            }
        }
        $P3Close.eq(index).click(function () {

        })
    });

})