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
 * 手机号呀验证
 */
$(document).on("click", "#checkedcode", function() {
    var url = $(this).data("url");
    var param = $("input[id='phone']").val();
    $.toast("d疯疯癫癫");
    // $.get(url, param, function(data) {

    // })
})

$(document).on("click", "#corChecked", function() {
    var url = $(this).data("url");
    var param = $("input[id='code']").val();
    $.toast("验证码输入不正确");
    // $.get(url, param, function(data) {

    // })
})


/**
 * 页面选择栏
 */
$(document).on("click", ".navbar-inner p", function() {
    if ($(this).hasClass("compre")) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".compre-list").fadeIn();
        $(this).find(".icon-xiangxia11").addClass("active");
        var _this = $(this);
        $("div.compre-list ul li").each(function() {
            if (_this.attr("data-type") === $(this).attr("value")) {
                $(this).addClass("active");
            }
        })
    } else if ($(this).hasClass("time")) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $("div.compre-list ul li.active").removeClass("active");
        $(".compre-list").fadeOut();
        $("p.compre").html('全部收入<i class="icon icon-xiangxia11"></i>');
        $("p.compre").attr('data-type', "all");
        var rank = $(this).attr("data-type");
        // window.rank = rank;
        // $.ajax({
        //     data: { "rank": rank, "data": window.dataObj },
        //     url: window.region_url,
        //     success: function(data) {
        //         window.url = data.url;
        //         $(".dky-list .js-load-more").html(data.html);
        //         $(".page-content").scrollTop(0)
        //         page = 2;
        //         loading = false;
        //         $(".site-over").remove();
        //     },
        // });
    }
});
/**
 * 综合选项收起
 */
$(document).on("click", ".compre-list", function() {
    $(".compre-list").fadeOut();
    $("div.compre").find("i.icon-xiangxia11").removeClass("active");
});
/**
 * 展开综合选项
 */
$(document).on("click", "div.compre-list ul li", function(e) {
    e.stopPropagation();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var type = $(this).find("span").html();
    var rank = $(this).attr("value");
    console.log(type, rank)
        // window.rank = rank;
        // $.ajax({
        //     data: { "rank": rank, "data": window.dataObj },
        //     url: window.region_url,
        //     success: function(data) {
        // window.url = data.url;
        // $(".dky-list .js-load-more").html(data.html);
        // $(".page-content").scrollTop(0);
        // page = 2;
        // loading = false;
        // $(".site-over").remove();
    $(".compre-list").fadeOut();
    $("p.compre").html(type + '<i class="icon icon-xiangxia11"></i>');
    $("p.compre").attr("data-type", rank);
    $("p.compre").addClass("active");
    $("p.compre").siblings().removeClass("active");
    //     },
    // });
});
/**
 * 时间选择
 */
var today = new Date();
var pickerInline = myApp.picker({
    input: '#date-container',
    toolbarCloseText: '确定',
    toolbarTemplate: '<div class="toolbar">' +
        '<div class="toolbar-inner G-Plr-15">' +
        '<div class="left close-picker G-color-007aff">取消</div>' +
        '<div class="right">' +
        '<a href="#" class="link close-picker G-color-007aff" id="UserSaveDate">{{closeText}}</a>' +
        '</div>' +
        '</div>' +
        '</div> ',
    rotateEffect: true,
    value: [today.getFullYear(), today.getMonth(), today.getDate()],
    onChange: function(picker, values, displayValues) {
        var daysInMonth = new Date(picker.value[0], +picker.value[1] + 1, 0).getDate();
        if (values[2] > daysInMonth && picker.cols[2]) {
            picker.cols[2].setValue(daysInMonth);
        }
    },
    onClose: function(picker) {
        $(".date-layout").fadeOut();
        var data = { birthday: picker.value };
        console.log(picker)
        $(document).on("click", "#UserSaveDate", function() {
            $('#date-id').html(picker.value[0] + '.' + (parseInt(picker.value[1]) + 1));
        })
    },
    onOpen: function(picker) {
        $(".date-layout").fadeIn(200);
        // 编辑后再次打开的回调
        var n = $('#date-id').html();
        console.log(n)
        if (n) {
            var dateStart = n.split(".");
            dateStart[1] = dateStart[1] - 1;
            picker.setValue(dateStart);
        }
    },
    formatValue: function(p, values, displayValues) {
        return values[2] + ' ' + values[1] + ', ' + values[0];
    },
    cols: [
        // Years
        {
            values: (function() {
                var arr = [];
                for (var i = 1950; i <= 2030; i++) {
                    arr.push(i);
                }
                return arr;
            })(),
            displayValues: (function() {
                var arr = [];
                for (var i = 1950; i <= 2030; i++) {
                    arr.push(i + "年");
                }
                return arr;
            })(),
            textAlign: 'left'
        },
        // Months
        {
            values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
            displayValues: ('1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月').split(' '),
            textAlign: 'right'
        },
        // Days
        // {
        //     values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        //     displayValues: ('1日, 2日, 3日, 4日, 5日, 6日, 7日, 8日, 9日, 10日, 11日, 12日, 13日, 14日, 15日, 16日, 17日, 18日, 19日, 20日, 21日, 22日, 23日, 24日, 25日, 26日, 27日, 28日, 29日, 30日, 31日').split(","),
        //     textAlign: 'center'
        // },
    ]
});

/**
 * 验证兑换码
 */
$(document).on("click", "#check_yan", function() {
    var url = $(this).data("url");
    var param = $("input[id='phone']").val();
    // $.get(url, param, function(data) {
    $("#J-code").fadeIn().text("*核销码错误");
    // })
})

/**
 * 确认核销
 */
$(document).on("click", "#J-ok", function() {
    var url = $(this).data("url");
    // $.get(url, param, function(data) {

    // })
})