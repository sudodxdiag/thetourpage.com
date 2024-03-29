(function(a, b) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], b)
    } else {
        if (typeof exports === "object") {
            module.exports = b(require("jquery"))
        } else {
            a.lightbox = b(a.jQuery)
        }
    }
}(this, function(a) {
    function b(c) {
        this.album = [];
        this.currentImageIndex = void 0;
        this.init();
        this.options = a.extend({}, this.constructor.defaults);
        this.option(c)
    }
    b.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: false,
        fadeDuration: 500,
        fitImagesInViewport: true,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: true,
        wrapAround: false,
        disableScrolling: false
    };
    b.prototype.option = function(c) {
        a.extend(this.options, c)
    };
    b.prototype.imageCountLabel = function(d, c) {
        return this.options.albumLabel.replace(/%1/g, d).replace(/%2/g, c)
    };
    b.prototype.init = function() {
        this.enable();
        this.build()
    };
    b.prototype.enable = function() {
        var c = this;
        a("body").on("click", "a[class^=lightbox], area[class^=lightbox], a[data-lightbox], area[data-lightbox]", function(d) {
            c.start(a(d.currentTarget));
            return false
        })
    };
    b.prototype.build = function() {
        var c = this;
        a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image"  /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body"));
        this.$lightbox = a("#lightbox");
        this.$overlay = a("#lightboxOverlay");
        this.$outerContainer = this.$lightbox.find(".lb-outerContainer");
        this.$container = this.$lightbox.find(".lb-container");
        this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10);
        this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10);
        this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10);
        this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10);
        this.$overlay.hide().on("click", function() {
            c.end();
            return false
        });
        this.$lightbox.hide().on("click", function(d) {
            if (a(d.target).attr("id") === "lightbox") {
                c.end()
            }
            return false
        });
        this.$outerContainer.on("click", function(d) {
            if (a(d.target).attr("id") === "lightbox") {
                c.end()
            }
            return false
        });
        this.$lightbox.find(".lb-prev").on("click", function() {
            if (c.currentImageIndex === 0) {
                c.changeImage(c.album.length - 1)
            } else {
                c.changeImage(c.currentImageIndex - 1)
            }
            return false
        });
        this.$lightbox.find(".lb-next").on("click", function() {
            if (c.currentImageIndex === c.album.length - 1) {
                c.changeImage(0)
            } else {
                c.changeImage(c.currentImageIndex + 1)
            }
            return false
        });
        this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
            c.end();
            return false
        })
    };
    b.prototype.start = function(g) {
        var o = this;
        var c = a(window);
        c.on("resize", a.proxy(this.sizeOverlay, this));
        a("select, object, embed").css({
            visibility: "hidden"
        });
        this.sizeOverlay();
        this.album = [];
        var n = 0;

        function l(i) {
            o.album.push({
                link: i.attr("href"),
                title: i.attr("data-title") || i.attr("title")
            })
        }
        var k = g.attr("data-lightbox");
        var m;
        if (k) {
            m = a(g.prop("tagName") + '[data-lightbox="' + k + '"]');
            for (var f = 0; f < m.length; f = ++f) {
                l(a(m[f]));
                if (m[f] === g[0]) {
                    n = f
                }
            }
        } else {
            if (g.attr("class") === "lightbox") {
                l(g)
            } else {
                m = a(g.prop("tagName") + '[class="' + g.attr("class") + '"]');
                for (var e = 0; e < m.length; e = ++e) {
                    l(a(m[e]));
                    if (m[e] === g[0]) {
                        n = e
                    }
                }
            }
        }
        var h = c.scrollTop() + this.options.positionFromTop;
        var d = c.scrollLeft();
        this.$lightbox.css({
            top: h + "px",
            left: d + "px"
        }).fadeIn(this.options.fadeDuration);
        if (this.options.disableScrolling) {
            a("body").addClass("lb-disable-scrolling")
        }
        this.changeImage(n)
    };
    b.prototype.changeImage = function(f) {
        var d = this;
        this.disableKeyboardNav();
        var e = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration);
        a(".lb-loader").fadeIn("slow");
        this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide();
        this.$outerContainer.addClass("animating");
        var c = new Image();
        c.onload = function() {
            var k;
            var h;
            var i;
            var m;
            var g;
            var l;
            var j;
            e.attr("src", d.album[f].link);
            k = a(c);
            e.width(c.width);
            e.height(c.height);
            if (d.options.fitImagesInViewport) {
                j = a(window).width();
                l = a(window).height();
                g = j - d.containerLeftPadding - d.containerRightPadding - 20;
                m = l - d.containerTopPadding - d.containerBottomPadding - 120;
                if (d.options.maxWidth && d.options.maxWidth < g) {
                    g = d.options.maxWidth
                }
                if (d.options.maxHeight && d.options.maxHeight < g) {
                    m = d.options.maxHeight
                }
                if ((c.width > g) || (c.height > m)) {
                    if ((c.width / g) > (c.height / m)) {
                        i = g;
                        h = parseInt(c.height / (c.width / i), 10);
                        e.width(i);
                        e.height(h)
                    } else {
                        h = m;
                        i = parseInt(c.width / (c.height / h), 10);
                        e.width(i);
                        e.height(h)
                    }
                }
            }
            d.sizeContainer(e.width(), e.height())
        };
        c.src = this.album[f].link;
        this.currentImageIndex = f
    };
    b.prototype.sizeOverlay = function() {
        this.$overlay.width(a(document).width()).height(a(document).height())
    };
    b.prototype.sizeContainer = function(g, c) {
        var f = this;
        var e = this.$outerContainer.outerWidth();
        var j = this.$outerContainer.outerHeight();
        var i = g + this.containerLeftPadding + this.containerRightPadding;
        var d = c + this.containerTopPadding + this.containerBottomPadding;

        function h() {
            f.$lightbox.find(".lb-dataContainer").width(i);
            f.$lightbox.find(".lb-prevLink").height(d);
            f.$lightbox.find(".lb-nextLink").height(d);
            f.showImage()
        }
        if (e !== i || j !== d) {
            this.$outerContainer.animate({
                width: i,
                height: d
            }, this.options.resizeDuration, "swing", function() {
                h()
            })
        } else {
            h()
        }
    };
    b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(true).hide();
        this.$lightbox.find(".lb-image").fadeIn("slow");
        this.updateNav();
        this.updateDetails();
        this.preloadNeighboringImages();
        this.enableKeyboardNav()
    };
    b.prototype.updateNav = function() {
        var c = false;
        try {
            document.createEvent("TouchEvent");
            c = (this.options.alwaysShowNavOnTouchDevices) ? true : false
        } catch (d) {}
        this.$lightbox.find(".lb-nav").show();
        if (this.album.length > 1) {
            if (this.options.wrapAround) {
                if (c) {
                    this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1")
                }
                this.$lightbox.find(".lb-prev, .lb-next").show()
            } else {
                if (this.currentImageIndex > 0) {
                    this.$lightbox.find(".lb-prev").show();
                    if (c) {
                        this.$lightbox.find(".lb-prev").css("opacity", "1")
                    }
                }
                if (this.currentImageIndex < this.album.length - 1) {
                    this.$lightbox.find(".lb-next").show();
                    if (c) {
                        this.$lightbox.find(".lb-next").css("opacity", "1")
                    }
                }
            }
        }
    };
    b.prototype.updateDetails = function() {
        var c = this;
        if (typeof this.album[this.currentImageIndex].title !== "undefined" && this.album[this.currentImageIndex].title !== "") {
            this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(e) {
                if (a(this).attr("target") !== undefined) {
                    window.open(a(this).attr("href"), a(this).attr("target"))
                } else {
                    location.href = a(this).attr("href")
                }
            })
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var d = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(d).fadeIn("fast")
        } else {
            this.$lightbox.find(".lb-number").hide()
        }
        this.$outerContainer.removeClass("animating");
        this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return c.sizeOverlay()
        })
    };
    b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            var d = new Image();
            d.src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            var c = new Image();
            c.src = this.album[this.currentImageIndex - 1].link
        }
    };
    b.prototype.enableKeyboardNav = function() {
        a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
    };
    b.prototype.disableKeyboardNav = function() {
        a(document).off(".keyboard")
    };
    b.prototype.keyboardAction = function(f) {
        var h = 27;
        var g = 37;
        var d = 39;
        var c = f.keyCode;
        var e = String.fromCharCode(c).toLowerCase();
        if (c === h || e.match(/x|o|c/)) {
            this.end()
        } else {
            if (e === "p" || c === g) {
                if (this.currentImageIndex !== 0) {
                    this.changeImage(this.currentImageIndex - 1)
                } else {
                    if (this.options.wrapAround && this.album.length > 1) {
                        this.changeImage(this.album.length - 1)
                    }
                }
            } else {
                if (e === "n" || c === d) {
                    if (this.currentImageIndex !== this.album.length - 1) {
                        this.changeImage(this.currentImageIndex + 1)
                    } else {
                        if (this.options.wrapAround && this.album.length > 1) {
                            this.changeImage(0)
                        }
                    }
                }
            }
        }
    };
    b.prototype.end = function() {
        this.disableKeyboardNav();
        a(window).off("resize", this.sizeOverlay);
        this.$lightbox.fadeOut(this.options.fadeDuration);
        this.$overlay.fadeOut(this.options.fadeDuration);
        a("select, object, embed").css({
            visibility: "visible"
        });
        if (this.options.disableScrolling) {
            a("body").removeClass("lb-disable-scrolling")
        }
    };
    return new b()
}));