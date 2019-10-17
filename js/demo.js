
let oWrap = document.getElementById("wrap");
let y = 0,
    chgTime1 = 1,
    nowIdx = 0;

//全屏滚动
window.onmousewheel = function(e){
    // console.log(e.wheelDelta);
    if( chgTime1 === 1 ){
        if( e.wheelDelta <= -120 ){
            y = y - 20;
            if( y < -120 ) y = -120;
            oWrap.style.transform = "translateY("+y+"%)";

            if( nowIdx < 6 ){
                aNavLi[nowIdx].classList.remove("navShow");
                nowIdx++;
                aNavLi[nowIdx].classList.add("navShow");
            }

        }
        else if( e.wheelDelta >= 120 ){
            y = y + 20;
            if( y > 0 ) y = 0;
            oWrap.style.transform = "translateY("+y+"%)";

            if( nowIdx > 0 ){
                aNavLi[nowIdx].classList.remove("navShow");
                nowIdx--;
                aNavLi[nowIdx].classList.add("navShow");
            }

        }
        chgTime1 = 0;
        setTimeout( function(){chgTime1 = 1},1000 )
    }
    // console.log(y);
    //进入页面时加载特效
    setTimeout( reload,500 );
    line();

};

//nav特效


let aNavLi = document.querySelectorAll("#head_nav .nav li"),
    oNavLine = document.querySelector("#head_nav>.nav>.line");

[...aNavLi].forEach(function (dom,index) {

    //hover
    dom.onmouseover = function () {
        if( nowIdx !== index ) {
            aNavLi[index].classList.add("navShow");
        }
    };
    dom.onmouseout = function () {
        if( nowIdx !== index ){
            aNavLi[index].classList.remove("navShow");
        }
    };

    //点击
    dom.onclick = function () {
        if( nowIdx !== index ){
            aNavLi[nowIdx].classList.remove("navShow");
            aNavLi[index].classList.add("navShow");
            nowIdx = index;

            if( y/20 !== nowIdx ){
                y = index*-20;
                // console.log(y);
                oWrap.style.transform = "translateY("+y+"%)";
            }
            setTimeout( reload,500 );
            // console.log(nowIdx);
            line();
        }
    };

});

//顶部导航下划线特效
function line(){
    let liLeft = aNavLi[nowIdx].offsetLeft + aNavLi[nowIdx].offsetWidth/2;
    oNavLine.style.left = liLeft - oNavLine.offsetWidth/2 + "px";
}



//index轮播
let oBan = document.querySelector("#index .ban");
let banIndex = 2;

function lunbo() {
    oBan.classList.remove("retran");
    oBan.style.left = "-"+ banIndex*100 +"%";
    banIndex++;

    if( banIndex > 3 ){
        setTimeout( function () {
            oBan.classList.add("retran");
            oBan.style.left = "-"+ 100 +"%";
            banIndex = 2;
        },1100 )

    }
}
setInterval( lunbo , 3000 );


//能做的 板块
let aP3Div1 = document.querySelectorAll("#page3>div"),
    aP3Div2 = document.querySelectorAll("#page3 .wallpaper"),
    aP3Div3 = document.querySelectorAll("#page3 .wallpaper>.p3msg"),
    aP3H2 = document.querySelectorAll("#page3 .wallpaper>h2"),
    aP3Close = document.querySelectorAll("#page3 i");
let state = false;

[...aP3Div2].forEach(function (dom,index) {
    if( state === false ){
        aP3Div2[index].onclick = function () {
            aP3Div1[index].classList.add("p3show");
            aP3Div1[index].style.zIndex = "5";
            aP3Div3[index].classList.add("msgShow");
            aP3Close[index].style.opacity = "1";
            aP3H2[index].style.opacity = "0";
            state = true;
            // oP3Div1.onclick = null;
        }
    }
    aP3Close[index].onclick = function () {
        aP3Div1[index].classList.remove("p3show");
        aP3Div1[index].style.zIndex = "4";
        setTimeout( function () {
            aP3Div1[index].style.zIndex = "0";
        },1000 );
        aP3Div3[index].classList.remove("msgShow");
        aP3Close[index].style.opacity = "0";
        setTimeout( function () {
            aP3H2[index].style.opacity = "1";
        },400 );
        setTimeout( function(){state = false},1000 );
    }
});



//给予的 板块
let oP4LMove = document.getElementsByClassName("lMove")[0],
    oP4RMove = document.getElementsByClassName("rMove")[0],
    oP4Up = document.getElementsByClassName("p4Up")[0],
    oP4Down = document.getElementsByClassName("p4Down")[0],
    oP4UpI = document.querySelector(".p4Up>i"),
    oP4DownI = document.querySelector(".p4Down>i");
let p4Y = 1;

//下按钮
oP4Down.onclick = function () {
    if( p4Y < 4 ){
        oP4LMove.style.transform = "translateY("+ p4Y*25 +"%)";
        oP4RMove.style.transform = "translateY(-"+ p4Y*25 +"%)";
        p4Y++;
        if( p4Y > 1 ){
            oP4UpI.classList.remove("icon-yuanquan");
            oP4UpI.classList.add("icon-jiantou-shang");
        }
        if( p4Y === 4 ){
            oP4DownI.classList.remove("icon-jiantou-xia");
            oP4DownI.classList.add("icon-yuanquan");
        }
    }
};

//上按钮
oP4Up.onclick = function () {
    if( p4Y > 1 ){
        oP4LMove.style.transform = "translateY("+ (p4Y-2)*25 +"%)";
        oP4RMove.style.transform = "translateY(-"+ (p4Y-2)*25 +"%)";
        p4Y--;
        if( p4Y < 4 ){
            oP4DownI.classList.remove("icon-yuanquan");
            oP4DownI.classList.add("icon-jiantou-xia");
        }
        if( p4Y === 1 ){
            oP4UpI.classList.remove("icon-jiantou-shang");
            oP4UpI.classList.add("icon-yuanquan");
        }
    }
};


//做到的 板块
let aP5Li = document.querySelectorAll("#page5 .piece li"),
    // aP5Hover = document.querySelectorAll("#page5 .piece .p5Hover"),
    aP5Mask = document.querySelectorAll("#page5 .piece .p5Mask"),
    aP5P = document.querySelectorAll("#page5 .piece p"),
    aP5H4 = document.querySelectorAll("#page5 .piece h4"),
    aP5Btn = document.querySelectorAll("#page5 .piece .p5Btn");
let p5Idx = 2;

[...aP5Li].forEach(function (dom,index) {
    aP5Mask[p5Idx].style.opacity = "1";
    aP5P[p5Idx].style.transform = "translateY(-75px)";
    aP5H4[p5Idx].style.transform = "translateY(-85px)";
    aP5Btn[p5Idx].classList.add("p5BtnShow");

    dom.onmouseover = function () {
        aP5Mask[p5Idx].style.opacity = "0";
        aP5P[p5Idx].style.transform = "translateY(0)";
        aP5H4[p5Idx].style.transform = "translateY(0)";
        aP5Btn[p5Idx].classList.remove("p5BtnShow");

        aP5Mask[index].style.opacity = "1";
        aP5P[index].style.transform = "translateY(-75px)";
        aP5H4[index].style.transform = "translateY(-85px)";
        aP5Btn[index].classList.add("p5BtnShow");

        p5Idx = index;
    }

});



//页面载入
let oP2Left = document.getElementsByClassName("p2Left")[0],
    oP2Right = document.getElementsByClassName("p2Right")[0],
    aP3CanDo = document.querySelectorAll("#page3>div"),
    oP4H2 = document.querySelector("#page4 .lMove>div:last-of-type .p4Lit>h2"),
    oP4P = document.querySelector("#page4 .lMove>div:last-of-type .p4Lit>p"),
    oP4Btn = document.querySelector("#page4 .lMove>div:last-of-type .p4Lit>.p4Btn"),
    oP5H3 = document.querySelector("#page5 .p5Content .p5Top>h3"),
    oP5More = document.getElementsByClassName("p5More")[0],
    oP5Piece = document.getElementsByClassName("piece")[0],
    oP6H3 = document.querySelector("#page6 .p6Content>h3"),
    oP6Span = document.querySelector("#page6 .p6Content>span"),
    aP6Li = document.querySelectorAll("#page6 .p6Main li"),
    oP7Mask = document.getElementsByClassName("p7Mask")[0],
    oP7H2 = document.querySelector("#page7 .p7Main h2"),
    oP7TMask = document.getElementsByClassName("p7TopMask")[0];

function reload() {
    switch (nowIdx ) {
        case 1:
            oP2Left.style.transform = "translateX(0)";
            oP2Right.style.transform = "translateX(0)";
            oP2Left.style.opacity = "1";
            oP2Right.style.opacity = "1";
            break;
        case 2:
            aP3CanDo[0].style.transform = "translateY(0)";
            setTimeout( function () {
                aP3CanDo[1].style.transform = "translateY(0)";
            },120 );
            setTimeout( function () {
                aP3CanDo[2].style.transform = "translateY(0)";
            },240 );
            setTimeout( function () {
                aP3CanDo[3].style.transform = "translateY(0)";
            },360 );
            setTimeout( function () {
                aP3CanDo[4].style.transform = "translateY(0)";
            },480 );
            break;
        case 3:
            oP4Up.style.transform = "translateX(0)";
            oP4Up.style.opacity = "1";
            oP4Down.style.transform = "translateX(0)";
            oP4Down.style.opacity = "1";
            oP4H2.classList.add("p4Show");
            oP4P.classList.add("p4Show");
            oP4Btn.classList.add("p4Show");
            break;
        case 4:
            oP5H3.style.transform = "translateX(0)";
            oP5H3.style.opacity = "1";
            oP5More.style.opacity = "1";
            oP5Piece.style.transform = "translateX(-50%)";
            break;
        case 5:
            oP6H3.style.transform = "translateX(0)";
            oP6H3.style.opacity = "1";
            aP6Li[0].style.transform = "translateX(0)";
            aP6Li[0].style.opacity = "1";
            setTimeout( function () {
                oP6Span.style.transform = "translateX(0)";
                oP6Span.style.opacity = "1";
                aP6Li[1].style.transform = "translateX(0)";
                aP6Li[1].style.opacity = "1";
            },100 );
            setTimeout( function () {
                aP6Li[2].style.transform = "translateX(0)";
                aP6Li[2].style.opacity = "1";
            },200 );
            setTimeout( function () {
                aP6Li[3].style.transform = "translateX(0)";
                aP6Li[3].style.opacity = "1";
            },300 );
            break;
        case 6:
            oP7TMask.style.opacity = "0";
            setTimeout( function () {
                oP7Mask.style.opacity = "1";
                oP7H2.style.opacity = "1";
                oP7H2.style.transform = "translateY(0)";
            },1500 );
            break;
    }
}