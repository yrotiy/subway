// ============ main-hd =============
$('.lnb').on('mouseenter', function (ev) {
      ev.stopPropagation();
      $('.main-hd-bg').animate({
            'height': '280px'
      });
      $('.sub-menu').slideDown().css('display', 'block');
})
$('.lnb').on('mouseleave', function (ev) {
      ev.stopPropagation();
      $('.main-hd-bg').animate({
            'height': 0
      });
      $('.sub-menu').slideUp();
})

