
(function ($) {
  "use strict";

  $(function () {
    var header = $('.start-style');
    var startScroll = $(window).scrollTop();;
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      console.log('scrolling:', scroll);
      console.log('start scroll:', startScroll);
      var endScroll = $(window).scrollTop();
      console.log('End Scroll:', endScroll);
      var difference = endScroll - startScroll;
      console.log('difference: ', difference);
      startScroll = scroll;

      if (scroll >= 10) {
        header.removeClass('start-style').addClass('scroll-on');
        if (difference <= 0) {
          header.removeClass('hide');
        } else {
          // clearTimeout($.data(this, 'scrollTimer'));
          // $.data(this, 'scrollTimer', setTimeout(function () {
            if (scroll > 100) {
              console.log('why is this happening??', scroll);
              header.addClass('hide');
            }
          // }, 250));
        }
      } else {
        header.removeClass('scroll-on').addClass('start-style');
      }
    });



  });

  //Animation

  $(document).ready(function () {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
      setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });



})(jQuery);

// Blank Target External Links
$(document.links).filter(function () {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');