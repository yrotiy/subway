// ============ main-hd =============
$('.lnb').on('mouseenter', function () {
      $('.main-hd-bg').stop().animate({'height':'220px'});
      $('.sub-menu').stop().slideDown();
})
$('.lnb').on('mouseleave', function () {
      $('.main-hd-bg').stop().animate({'height':0});
      $('.sub-menu').stop().slideUp();
})

const mobileSlider = $('.mobile-slider').bxSlider({
      auto: true,
      autoControls: false,
      stopAutoOnClick: true,
      pager: true,
      controls: false,
      speed: 500,
      touchEnabled: true
});


// slideMenuBtn
$('.mbMenu-openBtn').on('click', function(){
      $('.mobile-menu').css({'left': 0,  'transition' : '0.3s'});
      $('.mobileMenuBg').css({'left': 0, 'opacity' : '1'});
})
$('.mb-menu-closeBtn').on('click', function(){
      $('.mobile-menu').css({'left': '-100%',  'transition' : '0.3s'});
      $('.mobileMenuBg').css({'left': '-100%', 'opacity' : '1'});
      mbLnbBtns.forEach(btn => {
            btn.classList.remove('active');
      })
      mbLnbContents.forEach(content => {
            content.classList.remove('active');
      })
})

//mobile-lnb
const mbLnbBtns = document.querySelectorAll('.mb-lnb-header');
const mbLnbContents = document.querySelectorAll('.mb-lnb-body');

mbLnbBtns.forEach(btn => {
      btn.addEventListener('click', function(event){
            mbLnbContents.forEach(content => {
                  if(event.target.nextElementSibling !== content && content.classList.contains('active')) {
                        content.classList.remove('active');
                        mbLnbBtns.forEach(btn => btn.classList.remove('active'));
                  }
            })
            console.log(event.target);

            const panel = btn.nextElementSibling;

            btn.classList.toggle('active');
            panel.classList.toggle('active');
      })
})

