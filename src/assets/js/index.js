(function() {
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
     * 选中
     */
    $(document).on("click", ".list-style2 a>i", function() {
        console.log($(this))
        $(this).toggleClass("icon-weixuanzhong").toggleClass("icon-duihao2b")
    })

    /**
     * 改价弹窗
     */
    $$('.prompt-ok').on('click', function() {
        var hasToFu = $(".hasToFu").text();
        hasToFu = hasToFu.substring(1, hasToFu.length);
        var modal = myApp.modal({
            title: '修改价格',
            text: '应付价格 <span class="model_price">￥' + hasToFu + '</span>',
            afterText: '<div class="model-after"><input type="number" placeholder="请输入优惠金额"/><p>实付价格 <span class="model_price2">￥' + hasToFu + '</span></p></div>',
            buttons: [{
                    text: "取消"
                },
                {
                    text: '确定',
                    onClick: function() {
                        $(".hasToFu").html($(".model_price2").html());
                    }
                },
            ]
        })
        myApp.swiper($$(modal).find('.swiper-container'), { pagination: '.swiper-pagination' });
    });
    /**
     * 改价input
     */
    $(document).on("keyup", ".model-after input", function() {
        var hasToFu = $(".hasToFu").text();
        hasToFu = hasToFu.substring(1, hasToFu.length);
        if (parseFloat(hasToFu) > parseFloat($(this).val())) {
            var aprice = parseFloat(hasToFu) - parseFloat($(this).val());
            $(".model_price2").html("￥" + xiaoshu(aprice));
            $(this).attr("placeholder", "请输入优惠金额");
        } else {
            $(".model_price2").html("￥" + parseFloat(hasToFu));
            $(this).val("");
            $(this).attr("placeholder", "不能大于应付价格");
        }
    });
    // 小数补0
    function xiaoshu(x) {
        var f = parseFloat(x);
        var f = Math.round(x * 100) / 100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + 2) {
            s += '0';
        }
        return s;
    }


    /**
     * 商品管理页面选择栏
     */
    $(document).on("click", ".subnavbar>div", function() {
        if ($(this).hasClass("compre")) {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(this).siblings().children().children().removeClass("active");

            $(this).find(".icon-xiangxia11").addClass("active");
            var _this = $(this);
            $(".subnavbar>div.compre-list ul li").each(function() {
                if (_this.attr("data-type") === $(this).attr("value")) {
                    $(this).addClass("active");
                }
            })
        } else if ($(this).hasClass("sales")) {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(this).siblings().children().children().removeClass("active");
            if ($(this).attr("data-type") == "saleslower") {
                $(this).attr("data-type", "saleshigher");
                $(this).find(".icon-icon-up1").addClass("active");
                $(this).find(".icon-up").removeClass("active");
            } else if ($(this).attr("data-type") == "saleshigher") {
                $(this).attr("data-type", "saleslower");
                $(this).find(".icon-up").addClass("active");
                $(this).find(".icon-icon-up1").removeClass("active");
            }
            var rank = $(this).attr("data-type");
            // $.ajax({
            //     data: { "keywords": $(".search-input").val(), "rank": rank },
            //     url: "/search/api",
            //     success: function(data) {
            //         $(".dky-list .js-load-more").html(data);
            //         $(".page-content").scrollTop(0);
            //         page = 2;
            //         loading = false;
            //         $(".site-over").remove();
            //     },
            // });
        } else if ($(this).hasClass("price")) {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(this).siblings().children().children().removeClass("active");
            if ($(this).attr("data-type") == "lower") {
                $(this).attr("data-type", "higher");
                $(this).find(".icon-icon-up1").addClass("active");
                $(this).find(".icon-up").removeClass("active");
            } else if ($(this).attr("data-type") == "higher") {
                $(this).attr("data-type", "lower");
                $(this).find(".icon-up").addClass("active");
                $(this).find(".icon-icon-up1").removeClass("active");
            }
            var rank = $(this).attr("data-type");
            // $.ajax({
            //     data: { "keywords": $(".search-input").val(), "rank": rank },
            //     url: "/search/api",
            //     success: function(data) {
            //         $(".dky-list .js-load-more").html(data);
            //         $(".page-content").scrollTop(0);
            //         page = 2;
            //         loading = false;
            //         $(".site-over").remove();
            //     },
            // });
        }
    });

    /**
     * 商品管理页面展开商品子集
     */
    $(document).on("click", ".goods-list .right>span", function() {
        $(this).toggleClass("active");
        var id = $(this).parents(".goods-list").attr("data-id");
        $(".no-icon-item-" + id).each(function() {
            $(this).toggleClass("flex");
        })
    })

    /**
     * 选择配送员
     */
    $$(document).on('click', '.open-picker', function() {
        $(".model-layout1").fadeIn();
        myApp.pickerModal('.picker-1');
        $('body,html,.page-content,.page').addClass('G-hidden');
    });
    $(document).on('click', "#server-content p", function() {
        var th = $(this);
        th.addClass('active');
        th.siblings().removeClass('active');
    });
    /**
     * 选择物流
     */
    $$(document).on('click', '.open-trans', function() {
        $(".model-layout2").fadeIn();
        myApp.pickerModal('.picker-2');
        $('body,html,.page-content,.page').addClass('G-hidden');
    });
    /**
     * 点击蒙版关闭
     */
    $(document).on('click', ".model-layout1", function() {
        $(".model-layout1").fadeOut();
        myApp.closeModal('.picker-1');
        $('body,html,.page-content,.page').removeClass('G-hidden');
    });
    $(document).on('click', ".model-layout2", function() {
        $(".model-layout2").fadeOut();
        myApp.closeModal('.picker-2');
        $('body,html,.page-content,.page').removeClass('G-hidden');
    });
    /**
     * 选择配送员
     */
    $(document).on('click', "#sure-people", function() {
        var name = $(this).parents(".picker-modal-inner").find("#server-content p.active .name").text();
        var tel = $(this).parents(".picker-modal-inner").find("#server-content p.active .tel-inner").text();
        $("#change1").show();
        $("#change1").find(".name1").text(name);
        $("#change1").find(".tel1").text(tel);
        $(".model-layout1").fadeOut();
        myApp.closeModal('.picker-1');

        $('body,html,.page-content,.page').removeClass('G-hidden');
    });
    $(document).on('click', "#sure-trans", function() {
        var transname = $(this).parents(".picker-modal-inner").find("#server-content p.active .transname").text();
        $("#trans").show();
        $("#trans").find(".trans1").text(transname);
        $(".model-layout2").fadeOut();
        myApp.closeModal('.picker-2');
        $('body,html,.page-content,.page').removeClass('G-hidden');
    });
    /**
     * 发票开启与否
     */
    $(document).on('click', ".invoice .top label", function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        if ($(this).attr("data-status") === "true") {
            $(".invoice .bottom").show();
        } else {
            $(".invoice .bottom").hide();
        }
    });


    // 个人中心修改生日
    $('#user-data-edit').on("click", function(e) {
        e.stopPropagation();
    })
    var today = new Date();
    var pickerInline = myApp.picker({
        input: '#user-data-edit',
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
            var daysInMonth = new Date(picker.value[0], +picker.value[1] * 1, 0).getDate();
            if (values[2] > daysInMonth && picker.cols[2]) {
                picker.cols[2].setValue(daysInMonth);
            }
        },
        onClose: function(picker) {
            $(".date-layout").fadeOut();
            var data = { birthday: picker.value };
            console.log(data)
            $(document).on("click", "#UserSaveDate", function() {
                $('input#date').val(picker.value[0] + '-' + (parseInt(picker.value[1]) + 1) + '-' + picker.value[2]);
            })
        },
        onOpen: function(picker) {
            $(".date-layout").fadeIn(200);
            // 编辑后再次打开的回调
            var n = $('#user-data-edit').find("input").val();
            if (n) {
                var dateStart = n.split("-");
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
            {
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                displayValues: ('1日, 2日, 3日, 4日, 5日, 6日, 7日, 8日, 9日, 10日, 11日, 12日, 13日, 14日, 15日, 16日, 17日, 18日, 19日, 20日, 21日, 22日, 23日, 24日, 25日, 26日, 27日, 28日, 29日, 30日, 31日').split(","),
                textAlign: 'right'
            },
        ]
    });
})()