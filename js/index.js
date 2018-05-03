$(window).load(function() {
  $()
  setInterval(function () {
    var height = $(window).innerHeight();
    $("#mycarousel>.item").height(height);
    $("#mycarousel").height(height);
    $(".fp-tableCell").height(height);
    $(".section").height(height);
    if ($(".page3.active")[0]) {
      numjump();
    } else {
      notnumjump()
    }
  }, 0)
  $("#cases_tag").on("click", "a", function (e) {
    e.preventDefault();
    var $a = $(this)
    var index = $a.index();
    $a.addClass("on").siblings().removeClass("on");
    $(".cases-list-box").children(":eq(" + index + ")").addClass("on").siblings().removeClass("on");
  })

  function numjump() {
    for (var num of $(".count-data")) {
      var $num = $(num)
      var time = parseInt($num.data("time"));
      var num = parseInt($num.data("num"));
      var position = -parseInt(toNum(num));
      $num.css("backgroundPosition", "0 0");
      $num.css("transition", "all " + time + "ms ease ");
      $num.css("backgroundPosition", "0 " + position + "px");
      // $num.css("backgroundPosition","0 -2324px");
      // console.log("0 "+position+"px !important")
      // console.log($num.css("backgroundPosition"))
    }


  }

  function notnumjump() {
    for (var num of $(".count-data")) {
      var $num = $(num)
      var time = parseInt($num.data("time"));
      var num = parseInt($num.data("num"));
      var position = -parseInt(toNum(num));
      $num.css("backgroundPosition", "0 0");
      // $num.css("transition","all "+time+"ms ease ");
      $num.css("backgroundPosition", "0 0");
      // $num.css("backgroundPosition","0 -2324px");
      // console.log("0 "+position+"px !important")
      // console.log($num.css("backgroundPosition"))
    }

  }

  function toNum(num) {
    switch (num) {
      case 0:
        return 1660;
        break;
      case 1:
        return 1743;
        break;
      case 2:
        return 1826;
        break;
      case 3:
        return 1909;
        break;
      case 4:
        return 1992;
        break;
      case 5:
        return 2075;
        break;
      case 6:
        return 2158;
        break;
      case 7:
        return 2241;
        break;
      case 8:
        return 2324;
        break;
      case 9:
        return 2407;
        break;
    }
    ;
  };
// $(".cases-list-box").on("mouseenter",".cases-list>div",function(){
//   $(this).children().find(".redShade").css("opacity",1)
//     .next().addClass("show").next().addClass("show").prev().children().find("i").addClass("show");
//
// }).on("mouseleave",".cases-list>div",function(){
//   $(this).children().find(".redShade").css("opacity",0)
//     .next().removeClass("show").next().removeClass("show");
//
// })
  var $lis = $(".bgbox>.cus-wrap>ul.customers>li");

  function changeImg() {
    var i = 0;
    var timer1 = setInterval(function () {
      $($lis[i]).addClass("light").siblings().removeClass("light");
      if (i == 17) i = 27;
      if (i == 16) {
        setTimeout(function () {
          $($lis[16]).removeClass("light")
        }, 200)
      }
      i < 8 ? i++ : i < 17 ? i++ : i--;

      if (i == 8) {
        i = 17;
      }


      if (i == 18) i = 9;

    }, 200)
    setTimeout(function () {
      clearInterval(timer1)
      // clearInterval(timer2)
    }, 5200)
    setTimeout(function(){
      // clearInterval(timer1)
      $($lis[17]).removeClass("light")
    },5200)
  }
  changeImg();
  // $('#fullpage').fullpage();
  setInterval(function () {
    $lis.height($($lis[0]).width())
  }, 0)
  $(".pcLianxi").on("mouseover", ".heibai", function () {

    $(this).addClass("on").parent().siblings().children().removeClass("on");
    var i = $(this).parent().index();
    var $con = $(".lianxi-con")
    $con.each(function (ci, elem) {
      if (ci == i) {
        $(elem).show().siblings(".lianxi-con").hide();
      }
    })
  })
  $(".navUl").on("click", "li>a", function (e) {
    // if($(this).has)
    $(this).addClass("clickRed").parent().siblings().children().removeClass("clickRed")
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    var index = $(this).parent().index();
    var $section = $(".section");
    $section.each(function (si, elem) {
      if (si == index) {
        $(elem).addClass("active").siblings(".section").removeClass("active");
      }
    })
    if ($(this).parent().index() == 4) {
      changeImg();
    }
    return false;
  })
  // $(window).scroll(function(){
  //
  // })
  // window.onmousewheel(function(e){
    //   if (e.wheelDelta > 0) { //当滑轮向上滚动时
    //     alert("滑轮向上滚动");
    //   }
    //   if (e.wheelDelta < 0) { //当滑轮向下滚动时
    //     alert("滑轮向下滚动");
  //   //   }
  //   //
  //   // })

  //
  var scrollFunc = function (e) {
    var index = $(".clickRed").parent().index();
    // var count=$(".clickRed").parent().parent().children().length;
    var count = 6;
    e = e || window.event;
    if (e.wheelDelta > 0) { //当滑轮向上滚动时
      index > 0 ? index-- : index = 0;
    }
    if (e.wheelDelta < 0) { //当滑轮向下滚动时
      index < count ? index++ : index = 5;
    }
    $(".clickRed").parent().parent().children(":eq(" + index + ")").children().click();
  }
  // 给页面绑定滑轮滚动事件
 
    document.addEventListener('DOMMouseScroll', scrollFunc, false);

  // 滚动滑轮触发scrollFunc方法a
  window.onmousewheel = scrollFunc;
})
