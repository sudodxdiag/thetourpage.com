(function() {
    var cx = '016496734496592151987:pxl1h9ovhn8';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
$(".myBox").click(function() {
    window.location = $(this).find("a").attr("href");
    return false
});
$(function() {
    $("a").each(function() {
        if ($(this).prop("href") == window.location.href) {
            $(this).addClass("highlightedatoz")
        }
    })
});
$(document).ready(function() {
    var currentScroll = 0;
    var fixedHeaderHeight = $('.navigation-new').height();
    var extrapadding = 40;
    $('.par-read-more').click(function() {
        if (!$('.par-container').hasClass('expanded')) {
            var t = $('.target_1');
            currentScroll = t.offset().top;
        };
        $('.par-container').toggleClass('expanded')
        $('.par-container p:nth-child(2)').toggleClass('fauxp');
        if (!$('.par-container').hasClass('expanded')) {
            currentScroll -= fixedHeaderHeight;
            currentScroll -= extrapadding;
            $(window).scrollTop(currentScroll);
            $('.par-read-more').text('Read More');
        } else {
            $('.par-read-more').text('Close');
        }
    });
});
$(".video-play").click(function() {
    $("#page-fade").show();
    $("#movie1").get(0).play()
});
$(".video-play-close").click(function() {
    $("#page-fade").hide()
});
$("#show-search").click(function() {
    $("#search-bar-wrap").toggle()
});
$("#show-hamburger").click(function() {
    $(".navigation-menu ul.top-nav").toggle();
    $("#search-bar-wrap").hide()
});
$(".play-pause-button").click(function() {
    $("#movie1").get(0).pause()
});
$(document).ready(function() {
    $("#tabs div.section").hide();
    $("#tabs div.section:first").show();
    $("#tabs ul.section-nav li:first").addClass("active");
    $("#tabs ul.section-nav li a:not(.kill-click)").click(function() {
        $("#tabs ul.section-nav li").removeClass("active");
        $(this).parent().addClass("active");
        var b = $(this).attr("href");
        $("#tabs div.section").hide();
        $(b).show();
        if (document.getElementById("map-canvas-new")) {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        }
        return false;
    });
});
$(document).ready(function() {
    $("#tabsx div.section").hide();
    $("#tabsx div.section:first").show();
    $("ul.j-fix li:first").addClass("active-tab");
    $("ul.j-fix li a:not(.kill-click)").click(function() {
        $("ul.j-fix li").removeClass("active-tab");
        $(this).parent().addClass("active-tab");
        var b = $(this).attr("href");
        $("#tabsx div.section").hide();
        $(b).show();
        if (document.getElementById("map-canvas-new")) {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        }
        return false;
    });
});
$(document).ready(function() {
    $("#tabs-side div.section-side").hide();
    $("#tabs-side div.section-side:first").show();
    $("#tabs-side ul.section-nav-side li:first").addClass("active");
    $("#tabs-side ul.section-nav-side li a").click(function() {
        $("#tabs-side ul.section-nav-side li").removeClass("active");
        $(this).parent().addClass("active");
        var b = $(this).attr("href");
        $("#tabs-side div.section-side").hide();
        $(b).show();
        if (document.getElementById("map-canvas-new")) {
            google.maps.event.trigger(map, "resize");
            map.setCenter(latlng)
        }
        return false
    })
});
$(document).ready(function() {
    $("#country-tabs-side div.country-section-side").hide();
    $("#country-tabs-side div.country-section-side:first").show();
    $("#country-tabs-side ul.country-section-nav-side li:first").addClass("active");
    $("#country-tabs-side ul.country-section-nav-side li a").click(function() {
        $("#country-tabs-side ul.country-section-nav-side li").removeClass("active");
        $(this).parent().addClass("active");
        var b = $(this).attr("href");
        $("#country-tabs-side div.country-section-side").hide();
        $(b).show();
        return false
    })
});
$(document).ready(function() {
    $("#tabs-right div.section-right").hide();
    $("#tabs-right div.section-right:first").show();
    $("#tabs-right ul.section-nav-right li:first").addClass("active");
    $("#tabs-right ul.section-nav-right li a").click(function() {
        $("#tabs-right ul.section-nav-right li").removeClass("active");
        $(this).parent().addClass("active");
        var b = $(this).attr("href");
        $("#tabs-right div.section-right").hide();
        $(b).show();
        if (document.getElementById("map-canvas-new")) {
            google.maps.event.trigger(map, "resize");
            map.setCenter(latlng)
        }
        return false
    })
});
$(".MenuItem > div.MenuItemLink, .MenuItem > .menu-plus").click(function() {
    $(this).closest('li.MenuItem').find('.nav-sub-menu').toggle();
});
$("li.MenuItem").mouseover(function() {
    if (!$(this).find('div.MenuItemLink').is(":visible"))
        $(this).find('.nav-sub-menu').show();
}).mouseout(function() {
    if (!$(this).find('div.MenuItemLink').is(":visible"))
        $(this).find('.nav-sub-menu').hide();
});
$(document).ready(function() {
    if (typeof jQuery.ui !== 'undefined') {
        $(".mydatepicker").each(function() {
            $(this).datepicker({
                inline: true,
                dateFormat: "yy-mm-dd"
            });
        });
        if ($("#xa_start_date").length) {
            var minDate1 = new Date();
            minDate1.setDate(minDate1.getDate() + 7);
            $("#xa_start_date").datepicker("option", "minDate", minDate1);
            $("#xa_start_date").datepicker('option', 'onSelect', (function() {
                var minDate2 = $(this).datepicker('getDate');
                $("#xa_end_date").datepicker("option", "minDate", minDate2);
            }));
        }
    }
});
$(function() {
    $("#dialog_link, ul#icons li").hover(function() {
        $(this).addClass("ui-state-hover")
    }, function() {
        $(this).removeClass("ui-state-hover")
    })
});

function curved_line_generate(e) {
    var e = e || {};
    var y = e.latStart || null;
    var s = e.lngStart || null;
    var w = e.latEnd || null;
    var m = e.lngEnd || null;
    var n = e.strokeColor || "#FF0000";
    var t = e.strokeOpacity || 1;
    var p = e.strokeWeight || 3;
    var a = e.gapWidth || 0;
    var f = e.horizontal;
    var o = e.multiplier || 1;
    var c = e.resolution || 0.1;
    var l = map;
    if (f == undefined) {
        f = true
    }
    var u = y;
    var d = s;
    var v;
    var r;
    var g = new Array;
    var i = new Array;
    for (point = 0; point <= 1; point += c) {
        g.push(point);
        offset = 0.6 * Math.sin(Math.PI * point / 1);
        i.push(offset)
    }
    var b = 0;
    if (f == 1) {
        var E = (m - s) * 0.1
    } else {
        var E = (w - y) * 0.1
    }
    for (var h = 0; h < g.length; h++) {
        if (h == 4) {
            b = 1.5 * o
        }
        if (h >= 5) {
            b = E * i[h] * o
        } else {
            b = E * i[h] * o
        }
        if (f == 1) {
            v = y + (w - y) * g[h] + b;
            r = s + (m - s) * g[h]
        } else {
            v = y + (w - y) * g[h];
            r = s + (m - s) * g[h] + b
        }
        curved_line_create_segment(u, d, v, r, n, t, p, a, l);
        u = v;
        d = r
    }
    curved_line_create_segment(u, d, w, m, n, t, p, a, l)
}

function curved_line_create_segment(n, f, t, a, r, e, u, i, l) {
    evenOdd++;
    if (evenOdd % (i + 1)) {
        return
    }
    var o = new Array;
    o[0] = new google.maps.LatLng(n, f);
    o[1] = new google.maps.LatLng(t, a);
    var s = new google.maps.Polyline({
        path: o,
        geodesic: false,
        strokeColor: r,
        strokeOpacity: e,
        strokeWeight: u
    });
    s.setMap(l)
}
evenOdd = 0;
$(".itemSpan").click(function() {
    $(".sprite-icon_open-3", this).toggleClass('open');
    if ($(".sprite-icon_open-3", this).hasClass('open')) {
        $(".sprite-icon_open-3", this).css("backgroundPosition", "-5px -10880px")
    } else {
        $(".sprite-icon_open-3", this).css("backgroundPosition", "-5px -10930px")
    }
});
$(".faq-span").click(function() {
    $(".sprite-icon_open-4", this).toggleClass('open');
    if ($(".sprite-icon_open-4", this).hasClass('open')) {
        $(".sprite-icon_open-4", this).css("backgroundPosition", "-242px -80px");
    } else {
        $(".sprite-icon_open-4", this).css("backgroundPosition", "-198px -80px");
    }
});
$(".mb-filter-open button").click(function() {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).css("backgroundPosition", "-172px -238px");
    } else {
        $(this).css("backgroundPosition", "-121px -238px");
    }
    $(".dest-form-wrapper-2").toggle();
});
$(".start-trip-button").click(function() {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).css("backgroundPosition", "-58px -332px");
    } else {
        $(this).css("backgroundPosition", "10px -332px");
    }
    $(".start-trip-option").toggle();
});
$(".stbb").click(function() {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(".start-trip-button").css("backgroundPosition", "-230px -555px");
    } else {
        $(".start-trip-button").css("backgroundPosition", "-230px -494px");
    }
    $(".start-trip-option").toggle();
});
(function(c) {
    function d(a) {
        var b = c(".content", a).outerHeight(true);
        a.toggleClass("open");
        if (a.hasClass("open")) {
            a.css("max-height", 99999)
        } else {
            a.css("max-height", 0)
        }
    }
    c(".itemSpan").on("click", function(a) {
        var b = c(this).parent();
        a.preventDefault();
        d(c(".content_w", b))
    })
})(jQuery);
(function(c) {
    function d(a) {
        var b = c(".country-faq-content-2", a).outerHeight(true);
        if (b == null) {
            b = c(".country-faq-content-1", a).outerHeight(true)
        }
        a.toggleClass("open");
        if (a.hasClass("open")) {
            a.css("max-height", b)
        } else {
            a.css("max-height", 0)
        }
    }
    c(".country-faq-click").on("click", function(a) {
        a.preventDefault();
        var b = c(".country-faq-container-2", c(this).parent());
        if (!b.length) {
            b = c(".country-faq-container-1", c(this).parent())
        }
        d(b)
    })
})(jQuery);
$(".country-faq-click").click(function() {
    $(".sprite-icon_open-4", this).toggleClass('open');
    if ($(".sprite-icon_open-4", this).hasClass('open')) {
        $(".sprite-icon_open-4", this).css("backgroundPosition", "-242px -80px");
    } else {
        $(".sprite-icon_open-4", this).css("backgroundPosition", "-198px -80px");
    }
});
(function(c) {
    function d(a) {
        var b = c(".content-c", a).outerHeight(true);
        if (b == null) {
            b = c(".content-b", a).outerHeight(true)
        }
        a.toggleClass("open");
        if (a.hasClass("open")) {
            a.css("max-height", b)
        } else {
            a.css("max-height", 0)
        }
    }
    c(".faq-span").on("click", function(a) {
        a.preventDefault();
        var b = c(".content_w-c", c(this).parent());
        if (!b.length) {
            b = c(".content_w-b", c(this).parent())
        }
        d(b)
    })
})(jQuery);
(function(c) {
    function d(a) {
        var b = c(".content-e", a).outerHeight(true);
        a.toggleClass("open");
        if (a.hasClass("open")) {
            a.css("max-height", b)
        } else {
            a.css("max-height", 0)
        }
    }
    c(".itemSpan-b").on("click", function(a) {
        var b = c(this).parent();
        a.preventDefault();
        d(c(".content_w-e", b))
    })
})(jQuery);
$("#hide-identity").click(function() {
    $("#hide-identity-a, #hide-identity-b ").toggle();
});
$("#hide-identity").click(function() {
    $(".hide-info-but").toggleClass('open');
    if ($(".hide-info-but").hasClass('open')) {
        $(".hide-info-but").css("backgroundPosition", "-172px -238px");
    } else {
        $(".hide-info-but").css("backgroundPosition", "-121px -238px");
    }
});

function bindPkgExpanders() {
    $(".hide-identity-c").click(function() {
        $(this).parent().find('.hide-identity-c-a').toggle();
        infobut = $(this).find('.hide-info-but-c');
        infobut.toggleClass('open');
        if (infobut.hasClass('open')) {
            infobut.css("backgroundPosition", "-172px -238px");
        } else {
            infobut.css("backgroundPosition", "-121px -238px");
        }
    });
}
bindPkgExpanders();
$(document).ready(function() {
    var doc = document.location.href.match(/[^\/]+$/);
    if (doc == null)
        return;
    doc = doc[0];
    var options = $('div.dest-form-list-mobile > form >select option');
    $.map(options, function(option) {
        var optRef = option.value.match(/[^\/]+$/)[0];
        if (optRef == "")
            optRef = option.value;
        if (optRef == doc) {
            $(option).prop('selected', true);
        }
    });
});
$(document).ready(function() {
    $('.dropPageSelect').change(function() {
        $("#tabsx div.section").hide();
        var b = $(this).val();
        $(b).show();
    });
});
$(document).ready(function() {
    $("#switcher").click(function() {
        $("#switcher").toggleClass("open");
    });
    $("#switcher > ul > li").click(function(e) {
        $("#flagCurrency").attr("class", "flags flags-" + this.innerText);
        document.cookie = "currency=" + this.innerText + ";max-age=2678400;path=/";
        location.reload();
    });
});

function toggleText(el, c) {
    var itincontent = document.getElementById(c);
    if (itincontent.classList.contains("open")) {
        itincontent.classList.remove("open");
        el.innerHTML = "READ MORE";
    } else {
        itincontent.classList.add("open");
        el.innerHTML = "READ LESS";
    }
}