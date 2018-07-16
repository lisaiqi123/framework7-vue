var myApp = new Framework7({
    animateNavBackIcon: true, // 动态导航栏中back-link图标iOS风格化
    modalTitle: "提示", // 弹出层默认标题
    modalButtonOk: "确定", // 弹出层默认确定按钮
    modalButtonCancel: "取消", // 弹出层默认取消按钮
    modalCloseByOutside: true // 点击modal外部关闭弹出层
});
var $$ = Dom7;
// 回到顶部
var fw7ViewOptions = {
    dynamicNavbar: true,
    domCache: true,
    upscroller: { text: 'Your button label' }
};
var mainView = myApp.addView('.view-main', fw7ViewOptions);
// 滚动加载更多
var page = 2;
var loading = false;
if (($('.js-load-more').height() - 88) >= $(".infinite-scroll").height()) {
    $('.infinite-down-scroll').addClass('active');
}
$(".infinite-scroll").off("scroll").on("scroll", function(e) {
    if ((this.scrollHeight - $(this).height() - 100) <= $(this).scrollTop()) {
        // 正在加载或已加载全部，则退出
        if (loading) return;
        loading = true;
        $('.infinite-down-scroll').removeClass('active');
        $('.infinite-scroll-preloader').addClass('active');
        var n = window.location.search,
            url;
        if (n.indexOf("?") != -1) {
            url = window.location.href + '&page=' + page;
        } else {
            url = window.location.href + '?page=' + page;
        }
        $.get(url, function(html) {
            $('.infinite-scroll-preloader').removeClass('active');
            if (html.length > 0) {
                loading = false;
                $(".js-load-more").append(html);
                page++;
            } else {
                $('.infinite-scroll').append('<div class="site-over"><p><span>完</span>哥，这回真没了</p></div>');
                return;
            }
        })
    }
});
/**
 * 页面选择栏
 */
$(document).on("click", ".J-subnavbar div.compre", function() {
    var index = $(this).index();
    var _th = $(this);
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(this).find("i").addClass("active");
    $(this).siblings().find("i").removeClass("active");
    $(".compre-list").fadeIn();
    $(".compre-list ul").hide();
    $(".compre-list ul").eq(index).show();
    $(".compre-list ul").eq(index).find("a").each(function() {
        if (_th.attr("data-type") === $(this).attr("value")) {
            $(this).addClass("active");
        }
    })
});
/**
 * 综合选项收起
 */
$(document).on("click", ".compre-list", function() {
    $(".compre-list").fadeOut();
    $('.J-subnavbar div.compre').find("i").removeClass("active");
});
/**
 * 全屏大图预览
 */
$(document).on('click', ".J-review-pics img", function() {
    var photoBrowser = [];
    $(this).parent().children().each(function() {
        photoBrowser.push($(this).attr("src"));
    });
    n = $(this).index();
    var myPhotoBrowserPopup = myApp.photoBrowser({
        photos: photoBrowser,
        initialSlide: n,
        theme: 'dark',
        type: 'standalone',
        backLinkText: '返回',
        toolbar: false,
        exposition: false,
        ofText: '/'
    });
    myPhotoBrowserPopup.open();
});
/**
 * 回复框字数计算
 */
$(document).on("keyup", ".J-review-text textarea", function() {
    var length = $(this).val().length;
    $(".J-review-text p .color2").html(length);
});