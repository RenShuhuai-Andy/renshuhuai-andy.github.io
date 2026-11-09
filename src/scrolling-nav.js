//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var $navbar = $(".navbar-fixed-top");
    if (!$navbar.length) {
        return;
    }
    if ($navbar.offset().top > 50) {
        $navbar.addClass("top-nav-collapse");
    } else {
        $navbar.removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }
        if (this.host !== window.location.host || this.pathname !== window.location.pathname ||
            this.search !== window.location.search || !this.hash) {
            return;
        }

        var target = document.getElementById(this.hash.slice(1));
        if (!target) {
            return;
        }

        event.preventDefault();

        var headerHeight = $('.navbar-header').outerHeight() || 0;
        var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var $menu = $('.navbar-collapse.in');
        if ($menu.length && $.fn.collapse) {
            $menu.collapse('hide');
        }

        $('html, body').stop().animate({
            scrollTop: Math.max(0, $(target).offset().top - headerHeight)
        }, reducedMotion ? 0 : 1500, 'easeInOutExpo');

        if (window.history.pushState && window.location.hash !== this.hash) {
            window.history.pushState(null, '', this.hash);
        }
    });
});
