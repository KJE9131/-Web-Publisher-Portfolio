// 메인 video play
var vn = 2;
function video() {
  if (vn == 1) {
    $(".video1").addClass("play").siblings().removeClass("play");
    $(".video_page li:first-child")
      .addClass("select")
      .siblings()
      .removeClass("select");
    vn = 2;
  } else if (vn == 2) {
    $(".video2").addClass("play").siblings().removeClass("play");
    $(".video_page li:last")
      .addClass("select")
      .siblings()
      .removeClass("select");
    vn = 1;
  }
}

setInterval("video();", 30000);

$(".video_page li a").click(function () {
  n = $(this).parent().index() + 1;
  $(".video" + n)
    .addClass("play")
    .siblings()
    .removeClass("play");
  $(this).parent().siblings().removeClass("select");
  $(this).parent().addClass("select");
});
// 메인 video play

// top으로 이동
$("#top").click(function () {
  $("html").animate({ scrollTop: "0" }, 700);
});
// top으로 이동

// popup 슬라이드
var pln = $(".popup_bnr li").length;
var pn = 0;
var chk = 0; // false
function slide1() {
  pn++;
  if (pn > pln - 1) {
    pn = 0;
  }
  $(".popup_bnr").animate({ left: "-455px" }, 300, function () {
    $(this).append($(".popup_bnr li:first-child")).css({ left: "0" });
  });
  $(".popup_page li").eq(pn).addClass("select").siblings().removeClass();
}

var auto = setInterval("slide1();", 5000);
// popup 슬라이드

// popup 내부 버튼
$(".popup .prev").click(function () {
  if (chk == 0) {
    clearInterval(auto);
    auto = setInterval("slide1();", 5000);
  }
  pn--;
  if (pn < 0) {
    pn = pln - 1;
  }
  $(".popup_bnr")
    .css({ left: "-455px" })
    .prepend($(".popup_bnr li:last-child"))
    .animate({ left: 0 }, 300);
  $(".popup_page li").eq(pn).addClass("select").siblings().removeClass();
});

$(".popup .next").click(function () {
  if (chk == 0) {
    clearInterval(auto);
    auto = setInterval("slide1();", 5000);
  }
  slide1();
});

$(".top_menu1").click(function () {
  $(".popup").addClass("on");
  $("#black_bg").addClass("click_on");
});

$(".popup .close").click(function () {
  $(".popup").removeClass("on");
  $("#black_bg").removeClass("click_on");
});
// popup 내부버튼

// LANGUAGE 팝업
$(".top_menu2").click(function () {
  $(".top_menu ul").toggleClass("on");
});
// LANGUAGE 팝업

// gnb 메뉴바 애니메이션
$(".gnb > li > a").hover(
  function () {
    var txt = $(this).children("p").attr("data-txt");
    $(this).animate({ width: "260px" }, 100, function () {
      $(this).css({ background: "rgba(12,40,96,0.8)" });
      $(this).children("p").text(txt);
    });
  },
  function () {
    var tet = $(this).children("p").attr("data-tet");
    $(this).animate({ width: "230px" }, 100, function () {
      $(this).css({ background: "rgba(0,0,0,0.5)" });
      $(this).children("p").text(tet);
    });
  }
);
// gnb 메뉴바 애니메이션

// gnb 메뉴바 슬라이드
$(".gnb > li > .menu_click").click(function () {
  $(".gnb > li > .menu_click").animate({ right: "430px" }, 300);
  $(".gnb > li > .menu_click_none").animate({ right: "430px" }, 300);
  $(this).parent().siblings().children("nav").animate({ right: "-430px" }, 300);
  $(this).next().animate({ right: "0" }, 300);
  $("body").addClass("stop_sc");
});

$(".gnb .quick_menu_button li:last-child").click(function () {
  $(".gnb > li > .menu_click").animate({ right: "0" }, 300);
  $(".gnb > li > .menu_click_none").animate({ right: "0" }, 300);
  $(".gnb .main_menu .gnb_right").animate({ right: "-430px" }, 300);
  $(this).parents("nav").animate({ right: "-430px" }, 700);
  $("body").removeClass("stop_sc");
});

$(".gnb .quick_menu_btm li:last-child").click(function () {
  $(".gnb > li > .menu_click").animate({ right: "0" }, 300);
  $(".gnb > li > .menu_click_none").animate({ right: "0" }, 300);
  $(this).parents("nav").animate({ right: "-430px" }, 300);
});

$(".gnb .quick_menu > .menu_click").click(function () {
  $(".gnb > li > .menu_click").animate({ right: "0" }, 100);
  $(".gnb > li > .menu_click_none").animate({ right: "0" }, 100);
  $(this).next().addClass("on").siblings().removeClass("on");
  $("#black_bg").addClass("click_on");
});

$(".gnb .gnb_center > a").click(function () {
  $("#black_bg").removeClass("click_on");
  $(this).parent().removeClass("on");
});

$("#gnb .gnb_icon").click(function () {
  $(this).css({ display: "none" });
  $(".gnb .main_menu .gnb_right").animate({ right: "0" }, 300);
  $("body").addClass("stop_sc");
});
// gnb 메뉴바 슬라이드

// 메인메뉴 퀵메뉴 탭메뉴
$(".gnb .gnb_center .quick_menu_tabmenu li").click(function () {
  $(this).addClass("select").siblings().removeClass("select");
  var n = $(this).index() + 1;
  $(".quick_menu_tab" + n)
    .addClass("on")
    .siblings("ul")
    .removeClass("on");
});
// 메인메뉴 퀵메뉴 탭메뉴

// 메인메뉴 탭메뉴
$(".main_menu .quick_menu_list > li > a").click(function () {
  $(this).next().slideToggle(300);
  $(this).children("img").toggleClass("select");
});
// 메인메뉴 탭메뉴

// 공지사항 큰 탭메뉴
$("#gnb .notice .notice_tabmenu li").click(function () {
  $(this).addClass("select").siblings().removeClass("select");
  var n = $(this).index() + 1;
  $(".notice_tab" + n)
    .addClass("on")
    .siblings("div")
    .removeClass("on");
});
// 공지사항 큰 탭메뉴

// 공지사항 작은 탭메뉴
$("#gnb .notice .notice_tab_list .list_title").click(function () {
  $(this).siblings().toggleClass("on");
  $(this).children("img").attr("src", "images/q-more-on.png");
});
// 공지사항 작은 탭메뉴

// 스크롤 이벤트 //
$(window).scroll(function () {
  var sc = $(this).scrollTop(); // 윈도우 top값
  var wow = window.innerWidth; // 브라우저 화면의 너비
  var chk = 0; // flase
  console.log(sc);

  // top 클릭버튼
  if (sc >= 100) {
    $("#top").addClass("on"); // top 클릭버튼
    $(".gnb .pc").css({ display: "none" }); // gnb메뉴 전체 숨기기
    $("header .top_menu1").css({ display: "none" }); // gnb메뉴 전체 숨기기
    $("header .top_menu2").css({ display: "none" }); // gnb메뉴 전체 숨기기
  } else if (sc <= 99) {
    $("#top").removeClass("on");
    $(".gnb .pc").css({ display: "block" });
    $("header .top_menu1").css({ display: "block" });
    $("header .top_menu2").css({ display: "block" });
  }

  // 우측 햄버거메뉴 아이콘
  if (sc > 100 && wow > 801) {
    $("header .gnb_icon").css({ display: "block", opacity: "1" });
  } else if (wow <= 800) {
    $("header .gnb_icon").css({ display: "block", opacity: "1" });
  } else {
    $("header .gnb_icon").css({ display: "none", opacity: "0" });
  }

  // 모바일 글자이동
  if (sc < 100) {
    $("#cont1 .mob_text b:nth-child(1)").css({ left: "20px" });
    $("#cont1 .mob_text b:nth-child(2)").css({ right: "20px" });
    $(" #cont1 .mob_text p").css({ opacity: "0", bottom: "-50px" });
  } else if (sc <= 200) {
    $("#cont1 .mob_text b:nth-child(1)").css({ left: "25px" });
    $("#cont1 .mob_text b:nth-child(2)").css({ right: "15px" });
    $(" #cont1 .mob_text p").css({ opacity: "0.3", bottom: "-30px" });
  } else if (sc <= 300) {
    $("#cont1 .mob_text b:nth-child(1)").css({ left: "60px" });
    $("#cont1 .mob_text b:nth-child(2)").css({ right: "35px" });
    $(" #cont1 .mob_text p").css({ opacity: "0.6", bottom: "-10px" });
  } else {
    $("#cont1 .mob_text b:nth-child(1)").css({ left: "100px" });
    $("#cont1 .mob_text b:nth-child(2)").css({ right: "60px" });
    $(" #cont1 .mob_text p").css({ opacity: "1", bottom: "0" });
  }

  // pc cont1 텍스트
  if (sc < 1100 && wow > 801) {
    $("#cont1 .pc_text b").removeClass("on");
    $("#cont1 .pc_text p").removeClass("on");
    $("#cont1 .pc_text b").removeClass("size");
    $("#cont1 .pc_text p").removeClass("size");
    $("#cont1 .ul_wrap").css({ opacity: "0" });
  } else if (sc >= 1100 && sc < 1500) {
    $("#cont1 .pc_text b").addClass("on");
    $("#cont1 .pc_text p").addClass("on");
    $("#cont1 .pc_text b").removeClass("size");
    $("#cont1 .pc_text p").removeClass("size");
    $("#cont1 .ul_wrap").css({ opacity: "0" });
  } else {
    $("#cont1 .pc_text b").addClass("size");
    $("#cont1 .pc_text p").addClass("size");
    $("#cont1 .ul_wrap").css({ opacity: "1" });
  }

  // pc cont2 스크롤 텍스트
  if (sc <= 3300 && wow > 801) {
    $("#cont2 .bg_text .p1").css({ left: "0" });
    $("#cont2 .bg_text .p3").css({ right: "0" });
    $("#cont2 article").removeClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc <= 3400 && wow > 801) {
    $("#cont2 .bg_text .p1").css({ left: "-200px" });
    $("#cont2 .bg_text .p3").css({ right: "-200px" });
    $("#cont2 article").addClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc <= 3500 && wow > 801) {
    $("#cont2 .bg_text .p1").css({ left: "-400px" });
    $("#cont2 .bg_text .p3").css({ right: "-400px" });
    $("#cont2 article").addClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc <= 3600 && wow > 801) {
    $("#cont2 .bg_text .p1").css({ left: "-400px" });
    $("#cont2 .bg_text .p3").css({ right: "-400px" });
    $("#cont2 article").addClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc >= 7600 && wow > 801) {
    $("#cont2 article").addClass("end");
    $("#cont2 article").removeClass("on");
  }

  // mob cont2 스크롤 텍스트
  if (sc <= 1300 && wow < 801) {
    $("#cont2 .bg_text .p1").css({ left: "-200px" });
    $("#cont2 .bg_text .p3").css({ right: "-200px" });
    $("#cont2 article").removeClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc <= 1350 && wow < 801) {
    $("#cont2 .bg_text .p1").css({ left: "-100px" });
    $("#cont2 .bg_text .p3").css({ right: "-100px" });
    $("#cont2 article").addClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc <= 1400 && wow < 801) {
    $("#cont2 .bg_text .p1").css({ left: "0" });
    $("#cont2 .bg_text .p3").css({ right: "-0" });
    $("#cont2 article").addClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc <= 3450 && wow < 801) {
    $("#cont2 article").addClass("on");
    $("#cont2 article").removeClass("end");
  } else if (sc >= 3500 && wow < 801) {
    $("#cont2 article").addClass("end");
    $("#cont2 article").removeClass("on");
  }

  // pc cont4 text효과
  if (sc < 9700 && wow > 801) {
    $("#cont4 h2").css({ top: "150px", opacity: "0.1" });
    $("#cont4 > i").css({ top: "-10px", opacity: "0.1" });
  } else if (sc >= 9700 && wow > 801) {
    $("#cont4 h2").css({ top: "50px", opacity: "1" });
    $("#cont4 > i").css({ top: "-160px", opacity: "1" });
  }
  // mob cont4 text효과
  if (sc < 5100 && wow < 801) {
    $("#cont4 h2").css({ top: "90px", opacity: "0.1" });
    $("#cont4 > i").css({ top: "-60px", opacity: "0.1" });
  } else if (sc >= 5100 && wow < 801) {
    $("#cont4 h2").css({ top: "50px", opacity: "1" });
    $("#cont4 > i").css({ top: "-30px", opacity: "1" });
  }

  // mob 캠퍼스 영역
  if (sc < 7000 && wow < 801) {
    $("#cont5 .campus_start .st1").removeClass("zoom1");
    $("#cont5 .campus_start .st1").removeClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom3");
    $("#cont5 .campus_start .st2").removeClass("zoom1");
    $("#cont5 .campus_start .st2").removeClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom3");
    $("#cont5 .campus_start .st3").removeClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 7200 && wow < 801) {
    $("#cont5 .campus_start .st1").addClass("zoom1");
    $("#cont5 .campus_start .st1").removeClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom3");
    $("#cont5 .campus_start .st2").addClass("zoom1");
    $("#cont5 .campus_start .st2").removeClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom3");
    $("#cont5 .campus_start .st3").removeClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 7400 && wow < 801) {
    $("#cont5 .campus_start .st1").addClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom1");
    $("#cont5 .campus_start .st1").removeClass("zoom3");
    $("#cont5 .campus_start .st2").addClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom1");
    $("#cont5 .campus_start .st2").removeClass("zoom3");
    $("#cont5 .campus_start .st3").removeClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 7600 && wow < 801) {
    $("#cont5 .campus_start .st1").addClass("zoom3");
    $("#cont5 .campus_start .st1").removeClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom1");
    $("#cont5 .campus_start .st2").addClass("zoom3");
    $("#cont5 .campus_start .st2").removeClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom1");
    $("#cont5 .campus_start .st3").addClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 9500 && wow < 801) {
    $("#cont5 .campus_end > div").addClass("fixed");
  } else if (sc >= 12000 && wow < 801) {
    $("#cont5 .campus_end > div").removeClass("fixed");
  }

  // pc 캠퍼스 영역
  if (sc < 12000 && wow > 801) {
    $("#cont5 .campus_start .st1").removeClass("zoom1");
    $("#cont5 .campus_start .st1").removeClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom3");
    $("#cont5 .campus_start .st2").removeClass("zoom1");
    $("#cont5 .campus_start .st2").removeClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom3");
    $("#cont5 .campus_start .st3").removeClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 12500 && wow > 801) {
    $("#cont5 .campus_start .st1").addClass("zoom1");
    $("#cont5 .campus_start .st1").removeClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom3");
    $("#cont5 .campus_start .st2").addClass("zoom1");
    $("#cont5 .campus_start .st2").removeClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom3");
    $("#cont5 .campus_start .st3").removeClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 12700 && wow > 801) {
    $("#cont5 .campus_start .st1").addClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom1");
    $("#cont5 .campus_start .st1").removeClass("zoom3");
    $("#cont5 .campus_start .st2").addClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom1");
    $("#cont5 .campus_start .st2").removeClass("zoom3");
    $("#cont5 .campus_start .st3").removeClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 13000 && wow > 801) {
    $("#cont5 .campus_start .st1").addClass("zoom3");
    $("#cont5 .campus_start .st1").removeClass("zoom2");
    $("#cont5 .campus_start .st1").removeClass("zoom1");
    $("#cont5 .campus_start .st2").addClass("zoom3");
    $("#cont5 .campus_start .st2").removeClass("zoom2");
    $("#cont5 .campus_start .st2").removeClass("zoom1");
    $("#cont5 .campus_start .st3").addClass("on");
    $("#cont5 .campus_end > div").removeClass("fixed");
  } else if (sc <= 17500 && wow > 801) {
    $("#cont5 .campus_end > div").addClass("fixed");
  } else if (sc <= 19000 && wow > 801) {
    $("#cont5 .campus_end > div").removeClass("fixed");
  }

  // pc cont6
  if (sc < 18000 && wow > 801) {
    $("#cont6 h2").removeClass("on");
    $("#cont6 ul li").removeClass("on");
  } else if (sc <= 18200 && wow > 801) {
    $("#cont6 h2").addClass("on");
  } else if (sc <= 18400 && wow > 801) {
    $("#cont6 ul li:nth-child(1)").addClass("on");
  } else if (sc <= 18450 && wow > 801) {
    $("#cont6 ul li:nth-child(2)").addClass("on");
  } else if (sc <= 18500 && wow > 801) {
    $("#cont6 ul li:nth-child(3)").addClass("on");
  } else if (sc <= 18550 && wow > 801) {
    $("#cont6 ul li:nth-child(4)").addClass("on");
  } else if (sc <= 18600 && wow > 801) {
    $("#cont6 ul li:nth-child(5)").addClass("on");
  } else if (sc <= 18650 && wow > 801) {
    $("#cont6 ul li:nth-child(6)").addClass("on");
  }

  // mob cont6
  if (sc < 12000 && wow < 801) {
    $("#cont6 h2").removeClass("on");
    $("#cont6 ul li").removeClass("on");
  } else if (sc <= 12100 && wow < 801) {
    $("#cont6 h2").addClass("on");
  } else if (sc <= 12200 && wow < 801) {
    $("#cont6 ul li:nth-child(1)").addClass("on");
  } else if (sc <= 12250 && wow < 801) {
    $("#cont6 ul li:nth-child(2)").addClass("on");
  } else if (sc <= 12300 && wow < 801) {
    $("#cont6 ul li:nth-child(3)").addClass("on");
  } else if (sc <= 12350 && wow < 801) {
    $("#cont6 ul li:nth-child(4)").addClass("on");
  } else if (sc <= 12400 && wow < 801) {
    $("#cont6 ul li:nth-child(5)").addClass("on");
  } else if (sc <= 12450 && wow < 801) {
    $("#cont6 ul li:nth-child(6)").addClass("on");
  }
});

// 과소개 hover
$("#cont1 .ul_wrap ul li a").hover(
  function () {
    $(this).children("p:nth-child(2)").addClass("off");
    $(this).next().addClass("on");
  },
  function () {
    $(this).children("p:nth-child(2)").removeClass("off");
    $(this).next().removeClass("on");
  }
);

// mob 학과소개

var i;

for (i = 1; i <= 7; i++) {
  if (i == 1) {
    $(".cont2_page").append("<li>0" + i + "</li>");
  } else {
    $(".cont2_page").append("<li>0" + i + "</li>");
  }
}

var si = 1;
$("#cont1 .next").click(function () {
  si++;
  if (si >= 8) {
    si = 1;
  }
  $("#cont1 .school").animate({ left: "-450px" }, 300, function () {
    $(this).append($("#cont1 .school li:first-child")).css({ left: "0" });
  });
  $("#cont1 .ul_select ul li").text(si);
});

$("#cont1 .prev").click(function () {
  si--;
  if (si <= 0) {
    si = 8 - 1;
  }
  $("#cont1 .school")
    .css({ left: "-450px" })
    .prepend($("#cont1 .school li:last-child"))
    .animate({ left: "0" }, 300);
  $("#cont1 .ul_select ul li").text(si);
});
