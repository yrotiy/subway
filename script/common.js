// ============ main-hd =============
$('.lnb').on('mouseenter', function (ev) {
      ev.stopPropagation();
      $('.main-hd-bg').stop().animate({
            'height': '280px'
      });
      $('.sub-menu').stop().slideDown();
})
$('.lnb').on('mouseleave', function (ev) {
      ev.stopPropagation();
      $('.main-hd-bg').stop().animate({
            'height': 0
      });
      $('.sub-menu').stop().slideUp();
})

