$(function() {
	initTheme();
	initComponent()
});
function initTheme() {
	$(".menu-list > a").click(function() {
		var b = $(this).parent();
		var a = b.find("> ul");
		if (!$("body").hasClass("sidebar-collapsed")) {
			if (a.is(":visible")) {
				a.slideUp(300, function() {
					$(".body-content").css({
						height : ""
					});
					adjustMainContentHeight()
				})
			} else {
				visibleSubMenuClose();
				b.addClass("nav-active");
				a.slideDown(300, function() {
					adjustMainContentHeight()
				})
			}
		}
		return false
	});
	$(".side-navigation > li").hover(function() {
		$(this).addClass("nav-hover")
	}, function() {
		$(this).removeClass("nav-hover")
	});
	$(".toggle-btn").click(function() {
		if ($(".body-content.no-sidebar-left").length > 0) {
			return false
		}
		var a = $("body");
		var b = a.css("position");
		if (b != "relative") {
			if (!a.hasClass("sidebar-collapsed")) {
				a.addClass("sidebar-collapsed");
				$(".side-navigation ul").attr("style", "")
			} else {
				a.removeClass("sidebar-collapsed");
				$(".side-navigation li.active ul").css({
					display : "block"
				})
			}
		} else {
			if (a.hasClass("sidebar-open")) {
				a.removeClass("sidebar-open")
			} else {
				a.addClass("sidebar-open")
			}
			adjustMainContentHeight()
		}
	});
	$(window).resize(function() {
		if ($("body").css("position") == "relative") {
			$("body").removeClass("sidebar-collapsed")
		} else {
			$("body").css({
				left : "",
				marginRight : ""
			})
		}
		searchform_reposition()
	});
	searchform_reposition()
}
function searchform_reposition() {
	if ($(".search-content").css("position") == "relative") {
		$(".search-content").insertBefore(".sidebar-left-info .search-field")
	} else {
		$(".search-content").insertAfter(".right-notification")
	}
}
function visibleSubMenuClose() {
	$(".menu-list").each(function() {
		var a = $(this);
		if (a.hasClass("nav-active")) {
			a.find("> ul").slideUp(300, function() {
				a.removeClass("nav-active")
			})
		}
	})
}
function adjustMainContentHeight() {
	var a = $(document).height();
	if (a > $(".body-content").height()) {
		$(".body-content").height(a)
	}
}
function initComponent() {
	setBodySmall();
	$(".showhide").on("click", function(c) {
		c.preventDefault();
		var d = $(this).closest("div.hpanel");
		var b = $(this).find("i:first");
		var a = d.find("div.panel-body");
		var e = d.find("div.panel-footer");
		a.slideToggle(300);
		e.slideToggle(200);
		b.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
		d.toggleClass("").toggleClass("panel-collapse");
		setTimeout(function() {
			d.resize();
			d.find("[id^=map-]").resize()
		}, 50)
	});
	$(".closebox").on("click", function(a) {
		a.preventDefault();
		var b = $(this).closest("div.hpanel");
		b.remove();
		if ($("body").hasClass("fullscreen-panel-mode")) {
			$("body").removeClass("fullscreen-panel-mode")
		}
	});
	$(".fullscreen").on("click", function() {
		var b = $(this).closest("div.hpanel");
		var a = $(this).find("i:first");
		$("body").toggleClass("fullscreen-panel-mode");
		a.toggleClass("fa-expand").toggleClass("fa-compress");
		b.toggleClass("fullscreen");
		setTimeout(function() {
			$(window).trigger("resize")
		}, 100)
	});
	$(".small-header-action").on("click", function(b) {
		b.preventDefault();
		var a = $(this).find("i:first");
		var c = $(this).parent().find("#hbreadcrumb");
		$(this).parent().parent().parent().toggleClass("small-header");
		c.toggleClass("m-t-lg");
		a.toggleClass("fa-arrow-up").toggleClass("fa-arrow-down")
	});
	setTimeout(function() {
		fixWrapperHeight()
	});
	$(window).bind("resize click", function() {
		setBodySmall();
		setTimeout(function() {
			fixWrapperHeight()
		}, 300)
	});
	$("[data-toggle=popover]").popover();
	$(".modal").appendTo("body")
}
function fixWrapperHeight() {
}
function setBodySmall() {
	if ($(this).width() < 769) {
		$("body").addClass("page-small")
	} else {
		$("body").removeClass("page-small");
		$("body").removeClass("show-sidebar")
	}
}
$.fn.animatePanel = function() {
	var e = $(this);
	var i = $(this).data("effect");
	var f = $(this).data("delay");
	var d = $(this).data("child");
	if (!i) {
		i = "zoomIn"
	}
	if (!f) {
		f = 0.06
	} else {
		f = f / 10
	}
	if (!d) {
		d = ".row > div"
	} else {
		d = "." + d
	}
	var g = 0;
	var c = Math.abs(f) + g;
	var a = e.find(d);
	a.addClass("opacity-0");
	a = e.find(d);
	a.addClass("stagger").addClass("animated-panel").addClass(i);
	var b = a.length + 10;
	var h = (b * f * 10000) / 10;
	a.each(function(k, l) {
		c += f;
		var j = Math.round(c * 10) / 10;
		$(l).css("animation-delay", j + "s");
		$(l).removeClass("opacity-0")
	});
	setTimeout(function() {
		$(".stagger").css("animation", "");
		$(".stagger").removeClass(i).removeClass("animated-panel").removeClass(
				"stagger")
	}, h)
};