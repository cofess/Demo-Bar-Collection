var MobileEsp = {
    initCompleted: !1,
    isWebkit: !1,
    isMobilePhone: !1,
    isIphone: !1,
    isAndroid: !1,
    isAndroidPhone: !1,
    isTierTablet: !1,
    isTierIphone: !1,
    isTierRichCss: !1,
    isTierGenericMobile: !1,
    engineWebKit: "webkit",
    deviceIphone: "iphone",
    deviceIpod: "ipod",
    deviceIpad: "ipad",
    deviceMacPpc: "macintosh",
    deviceAndroid: "android",
    deviceGoogleTV: "googletv",
    deviceHtcFlyer: "htc_flyer",
    deviceWinPhone7: "windows phone os 7",
    deviceWinPhone8: "windows phone 8",
    deviceWinMob: "windows ce",
    deviceWindows: "windows",
    deviceIeMob: "iemobile",
    devicePpc: "ppc",
    enginePie: "wm5 pie",
    deviceBB: "blackberry",
    deviceBB10: "bb10",
    vndRIM: "vnd.rim",
    deviceBBStorm: "blackberry95",
    deviceBBBold: "blackberry97",
    deviceBBBoldTouch: "blackberry 99",
    deviceBBTour: "blackberry96",
    deviceBBCurve: "blackberry89",
    deviceBBCurveTouch: "blackberry 938",
    deviceBBTorch: "blackberry 98",
    deviceBBPlaybook: "playbook",
    deviceSymbian: "symbian",
    deviceSymbos: "symbos",
    deviceS60: "series60",
    deviceS70: "series70",
    deviceS80: "series80",
    deviceS90: "series90",
    devicePalm: "palm",
    deviceWebOS: "webos",
    deviceWebOShp: "hpwos",
    engineBlazer: "blazer",
    engineXiino: "xiino",
    deviceNuvifone: "nuvifone",
    deviceBada: "bada",
    deviceTizen: "tizen",
    deviceMeego: "meego",
    deviceKindle: "kindle",
    engineSilk: "silk-accelerated",
    vndwap: "vnd.wap",
    wml: "wml",
    deviceTablet: "tablet",
    deviceBrew: "brew",
    deviceDanger: "danger",
    deviceHiptop: "hiptop",
    devicePlaystation: "playstation",
    devicePlaystationVita: "vita",
    deviceNintendoDs: "nitro",
    deviceNintendo: "nintendo",
    deviceWii: "wii",
    deviceXbox: "xbox",
    deviceArchos: "archos",
    engineOpera: "opera",
    engineNetfront: "netfront",
    engineUpBrowser: "up.browser",
    engineOpenWeb: "openweb",
    deviceMidp: "midp",
    uplink: "up.link",
    engineTelecaQ: "teleca q",
    engineObigo: "obigo",
    devicePda: "pda",
    mini: "mini",
    mobile: "mobile",
    mobi: "mobi",
    maemo: "maemo",
    linux: "linux",
    mylocom2: "sony/com",
    manuSonyEricsson: "sonyericsson",
    manuericsson: "ericsson",
    manuSamsung1: "sec-sgh",
    manuSony: "sony",
    manuHtc: "htc",
    svcDocomo: "docomo",
    svcKddi: "kddi",
    svcVodafone: "vodafone",
    disUpdate: "update",
    uagent: "",
    InitDeviceScan: function() {
        this.initCompleted = !1;
        navigator && navigator.userAgent && (this.uagent = navigator.userAgent.toLowerCase());
        this.isWebkit = this.DetectWebkit();
        this.isIphone = this.DetectIphone();
        this.isAndroid = this.DetectAndroid();
        this.isAndroidPhone = this.DetectAndroidPhone();
        this.isTierIphone = this.DetectTierIphone();
        this.isTierTablet = this.DetectTierTablet();
        this.isMobilePhone = this.DetectMobileQuick();
        this.isTierRichCss = this.DetectTierRichCss();
        this.isTierGenericMobile = this.DetectTierOtherPhones();
        this.initCompleted = !0
    },
    DetectIphone: function() {
        return this.initCompleted || this.isIphone ? this.isIphone: -1 < this.uagent.search(this.deviceIphone) ? this.DetectIpad() || this.DetectIpod() ? !1 : !0 : !1
    },
    DetectIpod: function() {
        return - 1 < this.uagent.search(this.deviceIpod) ? !0 : !1
    },
    DetectIphoneOrIpod: function() {
        return this.DetectIphone() || this.DetectIpod() ? !0 : !1
    },
    DetectIpad: function() {
        return - 1 < this.uagent.search(this.deviceIpad) && this.DetectWebkit() ? !0 : !1
    },
    DetectIos: function() {
        return this.DetectIphoneOrIpod() || this.DetectIpad() ? !0 : !1
    },
    DetectAndroid: function() {
        return this.initCompleted || this.isAndroid ? this.isAndroid: -1 < this.uagent.search(this.deviceAndroid) || this.DetectGoogleTV() ? !0 : -1 < this.uagent.search(this.deviceHtcFlyer) ? !0 : !1
    },
    DetectAndroidPhone: function() {
        return this.initCompleted || this.isAndroidPhone ? this.isAndroidPhone: this.DetectAndroid() && -1 < this.uagent.search(this.mobile) || this.DetectOperaAndroidPhone() ? !0 : -1 < this.uagent.search(this.deviceHtcFlyer) ? !0 : !1
    },
    DetectAndroidTablet: function() {
        return ! this.DetectAndroid() || this.DetectOperaMobile() || -1 < this.uagent.search(this.deviceHtcFlyer) ? !1 : -1 < this.uagent.search(this.mobile) ? !1 : !0
    },
    DetectAndroidWebKit: function() {
        return this.DetectAndroid() && this.DetectWebkit() ? !0 : !1
    },
    DetectGoogleTV: function() {
        return - 1 < this.uagent.search(this.deviceGoogleTV) ? !0 : !1
    },
    DetectWebkit: function() {
        return this.initCompleted || this.isWebkit ? this.isWebkit: -1 < this.uagent.search(this.engineWebKit) ? !0 : !1
    },
    DetectWindowsPhone: function() {
        return this.DetectWindowsPhone7() || this.DetectWindowsPhone8() ? !0 : !1
    },
    DetectWindowsPhone7: function() {
        return - 1 < this.uagent.search(this.deviceWinPhone7) ? !0 : !1
    },
    DetectWindowsPhone8: function() {
        return - 1 < this.uagent.search(this.deviceWinPhone8) ? !0 : !1
    },
    DetectWindowsMobile: function() {
        return this.DetectWindowsPhone() ? !1 : -1 < this.uagent.search(this.deviceWinMob) || ( - 1 < this.uagent.search(this.deviceIeMob) || -1 < this.uagent.search(this.enginePie)) || -1 < this.uagent.search(this.devicePpc) && !( - 1 < this.uagent.search(this.deviceMacPpc)) ? !0 : -1 < this.uagent.search(this.manuHtc) && -1 < this.uagent.search(this.deviceWindows) ? !0 : !1
    },
    DetectBlackBerry: function() {
        return - 1 < this.uagent.search(this.deviceBB) || -1 < this.uagent.search(this.vndRIM) ? !0 : this.DetectBlackBerry10Phone() ? !0 : !1
    },
    DetectBlackBerry10Phone: function() {
        return - 1 < this.uagent.search(this.deviceBB10) && -1 < this.uagent.search(this.mobile) ? !0 : !1
    },
    DetectBlackBerryTablet: function() {
        return - 1 < this.uagent.search(this.deviceBBPlaybook) ? !0 : !1
    },
    DetectBlackBerryWebKit: function() {
        return this.DetectBlackBerry() && -1 < this.uagent.search(this.engineWebKit) ? !0 : !1
    },
    DetectBlackBerryTouch: function() {
        return this.DetectBlackBerry() && ( - 1 < this.uagent.search(this.deviceBBStorm) || -1 < this.uagent.search(this.deviceBBTorch) || -1 < this.uagent.search(this.deviceBBBoldTouch) || -1 < this.uagent.search(this.deviceBBCurveTouch)) ? !0 : !1
    },
    DetectBlackBerryHigh: function() {
        return this.DetectBlackBerryWebKit() ? !1 : this.DetectBlackBerry() && (this.DetectBlackBerryTouch() || -1 < this.uagent.search(this.deviceBBBold) || -1 < this.uagent.search(this.deviceBBTour) || -1 < this.uagent.search(this.deviceBBCurve)) ? !0 : !1
    },
    DetectBlackBerryLow: function() {
        return this.DetectBlackBerry() ? this.DetectBlackBerryHigh() || this.DetectBlackBerryWebKit() ? !1 : !0 : !1
    },
    DetectS60OssBrowser: function() {
        return this.DetectWebkit() ? -1 < this.uagent.search(this.deviceS60) || -1 < this.uagent.search(this.deviceSymbian) ? !0 : !1 : !1
    },
    DetectSymbianOS: function() {
        return - 1 < this.uagent.search(this.deviceSymbian) || -1 < this.uagent.search(this.deviceS60) || -1 < this.uagent.search(this.deviceSymbos) && this.DetectOperaMobile || -1 < this.uagent.search(this.deviceS70) || -1 < this.uagent.search(this.deviceS80) || -1 < this.uagent.search(this.deviceS90) ? !0 : !1
    },
    DetectPalmOS: function() {
        return this.DetectPalmWebOS() ? !1 : -1 < this.uagent.search(this.devicePalm) || -1 < this.uagent.search(this.engineBlazer) || -1 < this.uagent.search(this.engineXiino) ? !0 : !1
    },
    DetectPalmWebOS: function() {
        return - 1 < this.uagent.search(this.deviceWebOS) ? !0 : !1
    },
    DetectWebOSTablet: function() {
        return - 1 < this.uagent.search(this.deviceWebOShp) && -1 < this.uagent.search(this.deviceTablet) ? !0 : !1
    },
    DetectOperaMobile: function() {
        return - 1 < this.uagent.search(this.engineOpera) && ( - 1 < this.uagent.search(this.mini) || -1 < this.uagent.search(this.mobi)) ? !0 : !1
    },
    DetectOperaAndroidPhone: function() {
        return - 1 < this.uagent.search(this.engineOpera) && -1 < this.uagent.search(this.deviceAndroid) && -1 < this.uagent.search(this.mobi) ? !0 : !1
    },
    DetectOperaAndroidTablet: function() {
        return - 1 < this.uagent.search(this.engineOpera) && -1 < this.uagent.search(this.deviceAndroid) && -1 < this.uagent.search(this.deviceTablet) ? !0 : !1
    },
    DetectKindle: function() {
        return - 1 < this.uagent.search(this.deviceKindle) && !this.DetectAndroid() ? !0 : !1
    },
    DetectAmazonSilk: function() {
        return - 1 < this.uagent.search(this.engineSilk) ? !0 : !1
    },
    DetectGarminNuvifone: function() {
        return - 1 < this.uagent.search(this.deviceNuvifone) ? !0 : !1
    },
    DetectBada: function() {
        return - 1 < this.uagent.search(this.deviceBada) ? !0 : !1
    },
    DetectTizen: function() {
        return - 1 < this.uagent.search(this.deviceTizen) ? !0 : !1
    },
    DetectMeego: function() {
        return - 1 < this.uagent.search(this.deviceMeego) ? !0 : !1
    },
    DetectDangerHiptop: function() {
        return - 1 < this.uagent.search(this.deviceDanger) || -1 < this.uagent.search(this.deviceHiptop) ? !0 : !1
    },
    DetectSonyMylo: function() {
        return - 1 < this.uagent.search(this.manuSony) && ( - 1 < this.uagent.search(this.qtembedded) || -1 < this.uagent.search(this.mylocom2)) ? !0 : !1
    },
    DetectMaemoTablet: function() {
        return - 1 < this.uagent.search(this.maemo) ? !0 : -1 < this.uagent.search(this.linux) && -1 < this.uagent.search(this.deviceTablet) && !this.DetectWebOSTablet() && !this.DetectAndroid() ? !0 : !1
    },
    DetectArchos: function() {
        return - 1 < this.uagent.search(this.deviceArchos) ? !0 : !1
    },
    DetectGameConsole: function() {
        return this.DetectSonyPlaystation() || this.DetectNintendo() || this.DetectXbox() ? !0 : !1
    },
    DetectSonyPlaystation: function() {
        return - 1 < this.uagent.search(this.devicePlaystation) ? !0 : !1
    },
    DetectGamingHandheld: function() {
        return - 1 < this.uagent.search(this.devicePlaystation) && -1 < this.uagent.search(this.devicePlaystationVita) ? !0 : !1
    },
    DetectNintendo: function() {
        return - 1 < this.uagent.search(this.deviceNintendo) || -1 < this.uagent.search(this.deviceWii) || -1 < this.uagent.search(this.deviceNintendoDs) ? !0 : !1
    },
    DetectXbox: function() {
        return - 1 < this.uagent.search(this.deviceXbox) ? !0 : !1
    },
    DetectBrewDevice: function() {
        return - 1 < this.uagent.search(this.deviceBrew) ? !0 : !1
    },
    DetectSmartphone: function() {
        return this.DetectTierIphone() || this.DetectS60OssBrowser() || this.DetectSymbianOS() || this.DetectWindowsMobile() || this.DetectBlackBerry() || this.DetectPalmOS() ? !0 : !1
    },
    DetectMobileQuick: function() {
        return this.DetectTierTablet() ? !1 : this.initCompleted || this.isMobilePhone ? this.isMobilePhone: this.DetectSmartphone() || -1 < this.uagent.search(this.mobile) || this.DetectKindle() || this.DetectAmazonSilk() || -1 < this.uagent.search(this.deviceMidp) || this.DetectBrewDevice() || this.DetectOperaMobile() || this.DetectArchos() || -1 < this.uagent.search(this.engineObigo) || -1 < this.uagent.search(this.engineNetfront) || -1 < this.uagent.search(this.engineUpBrowser) || -1 < this.uagent.search(this.engineOpenWeb) ? !0 : !1
    },
    DetectMobileLong: function() {
        return this.DetectMobileQuick() || this.DetectGameConsole() || (this.DetectDangerHiptop() || this.DetectMaemoTablet() || this.DetectSonyMylo() || this.DetectGarminNuvifone()) || -1 < this.uagent.search(this.devicePda) && !( - 1 < this.uagent.search(this.disUpdate)) || -1 < this.uagent.search(this.manuSamsung1) || -1 < this.uagent.search(this.manuSonyEricsson) || -1 < this.uagent.search(this.manuericsson) || -1 < this.uagent.search(this.svcDocomo) || -1 < this.uagent.search(this.svcKddi) || -1 < this.uagent.search(this.svcVodafone) ? !0 : !1
    },
    DetectTierTablet: function() {
        return this.initCompleted || this.isTierTablet ? this.isTierTablet: this.DetectIpad() || this.DetectAndroidTablet() || this.DetectBlackBerryTablet() || this.DetectWebOSTablet() ? !0 : !1
    },
    DetectTierIphone: function() {
        return this.initCompleted || this.isTierIphone ? this.isTierIphone: this.DetectIphoneOrIpod() || this.DetectAndroidPhone() || this.DetectWindowsPhone() || this.DetectBlackBerry10Phone() || this.DetectPalmWebOS() || this.DetectBada() || this.DetectTizen() || this.DetectGamingHandheld() ? !0 : this.DetectBlackBerryWebKit() && this.DetectBlackBerryTouch() ? !0 : !1
    },
    DetectTierRichCss: function() {
        return this.initCompleted || this.isTierRichCss ? this.isTierRichCss: this.DetectTierIphone() || (this.DetectKindle() || this.DetectTierTablet()) || !this.DetectMobileQuick() ? !1 : this.DetectWebkit() ? !0 : this.DetectS60OssBrowser() || this.DetectBlackBerryHigh() || this.DetectWindowsMobile() || -1 < this.uagent.search(this.engineTelecaQ) ? !0 : !1
    },
    DetectTierOtherPhones: function() {
        return this.initCompleted || this.isTierGenericMobile ? this.isTierGenericMobile: this.DetectTierIphone() || this.DetectTierRichCss() || this.DetectTierTablet() ? !1 : this.DetectMobileLong() ? !0 : !1
    }
};
MobileEsp.InitDeviceScan();

if (0 < $("#demo-page").length) {
    $(function() {
        var a = document.querySelector && document.querySelector('meta[name="viewport"]'),
        b = navigator.userAgent,
        c = function() {
            a.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
        };
        a && (/iPhone|iPad/.test(b) && !/Opera Mini/.test(b)) && (a.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0", document.addEventListener("gesturestart", c, !1))
    });
    var calcHeight = function() {
        var a = $("#headerlivedemo").height();
        $("#advanced").hasClass("closed") ? $("#iframelive").height($(window).height() + 3) : $("#iframelive").height($(window).height() - a)
    };
    $(document).ready(function() {
        calcHeight()
    });
    $(window).resize(function() {
        calcHeight()
    }).load(function() {
        calcHeight()
    });
    $(function() {
        mobileCss = function() {
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Opera Mini/)) $("#dropdown.box-drop ul.list-drop li .popover").css("top", "-1000px").css("display", "none !important"),
            $("#qr").hide(),
            $("body").css({
                height: "auto"
            }),
            $("html").css({
                height: "auto"
            }),
            $("#headerlivedemo").addClass("mobile")
        };
        mobileCss()
    });
    0 < $(".is-responsive").length ? $(document).ready(function() {
        if (!navigator.userAgent.match(/iPhone/i) && !navigator.userAgent.match(/iPod/i) && !navigator.userAgent.match(/iPad/i) && !navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Opera Mini/)) {
            var a = document.getElementById("frame");
            $("#responsivator").show();
            $("#responsivator .response").click(function() {
                $("#responsivator .response").removeClass("active");
                $(this).addClass("active");
                var b = $(this).attr("id");
                $("#iframelive").removeAttr("class").addClass(b);
                a.src = a.src
            });
            $(".responsive-block").show()
        }
    }) : $(".js-demo-upper-menu").addClass("js-no-responsive");
    $(function() {
        function a() {
            var a = $(".js-popupi-3").width(),
            b = $(".js-price").width(),
            c = $(".price-title").width(),
            b = b + c + 39;
            b > a && 500 < window.width && $(".js-popupi-3").width(b)
        }
        a();
        $(".js-offer-trigger").on("click",
        function() {
            a()
        });
        var b = 0 < $(".livemonstroid").length ? "-60px": "-53px";
        $("#advanced").css({
            marginTop: "0px"
        }).removeClass("closed");
        $("#headerlivedemo .trigger").toggle(function() {
            $(".js-popup-content").hide();
            $(this).removeClass("icon-arrow-small-up").addClass("icon-arrow-small-down");
            $("#advanced").addClass("closed").animate({
                marginTop: b
            },
            "fast",
            function() {
                calcHeight()
            });
            strCookies2 = $.cookie("panel2", null);
            strCookies = $.cookie("panel", "boo")
        },
        function() {
            $(this).removeClass("icon-arrow-small-down").addClass("icon-arrow-small-up");
            $("#advanced").removeClass("closed").animate({
                marginTop: "0px"
            },
            "fast",
            function() {
                calcHeight()
            });
            //strCookies2 = $.cookie("panel2", "opened");
            //strCookies = $.cookie("panel", null)
        });
        $(".js-popup-open").on("click ",
        function() {
            var a = $(this).attr("data-popupi"),
            a = $(".js-popup-content." + a);
            if (a.is(":visible")) return ! 1;
            if ("js-popupi-4" == $(this).data("popupi")) {
                $(".js-demo-flexslider").css("display", "block").animate({
                    top: 60
                },
                400);
                $("#monstroid-templates").owlCarousel({
                    items: 4,
                    navigation: !0,
                    navigationText: ["", ""],
                    slideSpeed: 800,
                    pagination: !1,
                    itemsDesktop: [1279, 3],
                    itemsDesktopSmall: [995, 2],
                    itemsTablet: [960, 2],
                    itemsTabletSmall: [740, 1],
                    lazyLoad: !0
                });
                var b = $("#headerlivedemo").data("template_id");
                $(".thumb-wr").each(function() {
                    $(this).data("tid") == b && $(this).addClass("active")
                });
                $(this).addClass("active");
                return ! 1
            }
            $(this).addClass("active");
            a.fadeIn(100)
        });
        jQuery(function(a) {
            a(document).on("mouseup",
            function(b) {
                var c = a(".js-popup-content");
                if (!c.is(b.target) && 0 === c.has(b.target).length) {
                    if (c.prev(".theme-choose").hasClass("active")) return a(".js-demo-flexslider").animate({
                        top: -260
                    },
                    400,
                    function() {
                        a(this).css("display", "none")
                    }),
                    a(".js-popup-open").removeClass("active"),
                    !1;
                    c.fadeOut(100);
                    a(".js-popup-open").removeClass("active")
                }
            })
        });
        $(".icon-close").mouseup(function() {
            $(".js-popup-content").fadeOut(100);
            $(".js-popup-open").removeClass("active")
        });
        $(".js-demo-list-li .js-drop").on("click",
        function() {
            var a = $(this).parent().attr("data-variant"),
            b,
            c = $(this).parent(),
            f = $(this).parent().data("price") || $(".js-price", c).data("price"),
            c = $(".js-price", c).data("price");
            b = $("#advanced").hasClass("livemonstroid") ? $(this).children(".recommended-wrap").text() : tm.stringUtils.bareText($(this));
            $(".js-popup-content").fadeOut(100);
            $(".js-popup-open").removeClass("active");
            $(".js-offer-trigger .price-title").text(b);
            b = appDic.require("language");
            var g = '<span class="new-price">' + b.formatMoney(f) + "</span> ";
            c != f && (g = '<span class="discount">' + b.formatMoney(c) + "</span> " + g);
            $(".js-offer-trigger .js-price").html(g);
            $(".js-demo-buy-button[data-variant=" + a + "]").removeClass("js-none").siblings().addClass("js-none");
            $(".js-popupi-3").css("width", "auto")
        });
        $(".js-drop").hover(function() {
            $(this).siblings(".popover").css("opacity", "1").css("z-index", "999")
        },
        function() {
            $(".list-drop li .popover").css("opacity", "0").css("z-index", "-999")
        });
        $.browser.msie && $("body").addClass("ie");
        var c = navigator.userAgent.toLowerCase(),
        g = function(a) {
            return - 1 != c.indexOf(a)
        },
        f = document.getElementsByTagName("html")[0],
        g = [!/opera|webtv/i.test(c) && /msie (\d)/.test(c) ? "ie ie" + RegExp.$1: g("firefox/2") ? "gecko ff2": g("firefox/3") ? "gecko ff3": g("gecko/") ? "gecko": g("opera/9") ? "opera opera9": /opera (\d)/.test(c) ? "opera opera" + RegExp.$1: g("konqueror") ? "konqueror": g("safari/") ? "webkit safari": g("mozilla/") ? "gecko": "", g("x11") || g("linux") ? " linux": g("mac") ? " mac": g("win") ? " win": ""].join(" ");
        if (f.className) {
            var h = f.className;
            f.className = h + (" " + g)
        } else f.className = g;
        f = $(".js-template-id");
        f.data("free-trial") && !f.data("mobile") && (new Tm.MotoTrial({
            auto_open_timeout: 30,
            template_id: f.data("template_id")
        })).init()
    }); (function() {
        function a() {
            g.hasClass("block-hidden") && !f && (g.removeClass("block-hidden"), f = 1)
        }
        function b() {
            f && (g.addClass("block-hidden"), f = 0)
        }
        //var c = $.cookie("country_code"),
        g = $("#advanced .js-demo-bar-phone"),
        f = 0;
        if ("US" === c) {
            later.date.UTC();
            var c = later.parse.recur().after("00:00").time().before("07:00").time().on(2, 3, 4, 5).dayOfWeek().and().after("11:00").time().before("13:00").time().on(2, 3, 4, 5).dayOfWeek().and().after("00:00").time().before("07:00").time().on(6).dayOfWeek().and().after("11:00").time().before("17:00").time().on(7).dayOfWeek().and().after("03:00").time().before("13:00").time().on(1).dayOfWeek(),
            h = later.parse.recur().after("07:00").time().before("11:00").time().on(2, 3, 4, 5).dayOfWeek().and().after("03:00").time().before("00:00").time().on(2, 3, 4, 5).dayOfWeek().and().after("07:00").time().before("00:00").time().on(6).dayOfWeek().and().after("17:00").time().before("11:00").time().on(7).dayOfWeek().and().after("13:00").time().before("03:00").time().on(1).dayOfWeek();
            later.setInterval(a, c);
            later.setInterval(b, h)
        }
    })()
};