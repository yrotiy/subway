$('.sbuMenu-tag-bx > button:nth-child(1)').addClass('active');
$('.sbuMenu-tag-bx > button').on('click', function () {
      let num = $(this).index();
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(`.sbuMenu-contents > div`).hide();
      $(`.sbuMenu-contents > div:nth-child(${num + 1})`).show();
})

const stepImgs = document.querySelectorAll('.storeOrder-slider > div');
const stepPagers = document.querySelectorAll('.pager-item');
const stepPagerIcons = document.querySelectorAll('.btw-i');
const stepPanelItems = document.querySelectorAll('.stepPanel-item');
const stepBtns = document.querySelectorAll('.storeOrder-slider-controls>button');
const stepPanelContents = document.querySelectorAll('.stepPanel-content');

let curStep = 1;

stepPagers[0].classList.add('currentPager');
$(stepPanelItems[0]).show();
stepBtns[0].disabled = true;
stepBtns[1].classList.add('activeBtn');
$(stepPanelContents[0]).animate({
      'margin-top': '15px',
      'opacity': '1'
});

document.querySelector('.next').addEventListener('click', stepNext);

function stepNext() {
      if (curStep < 5) {
            if (curStep > 1) {
                  $(stepImgs[curStep - 2]).css({
                        'left': '-80%',
                        'transform': 'scale(0.7)'
                  });
                  $(stepImgs[curStep - 1]).css({
                        'left': '-63%',
                        'transform': 'scale(0.7)'
                  });
                  $(stepImgs[curStep]).css({
                        'left': 0,
                        'transform': 'scale(1)'
                  });
                  $(stepImgs[curStep + 1]).css({
                        'left': '100%',
                        'transform': 'scale(0.7)'
                  });
            }
            $(stepImgs[curStep - 1]).css({
                  'left': '-60%',
                  'transform': 'scale(0.7)'
            });
            $(stepImgs[curStep]).css({
                  'left': 0,
                  'transform': 'scale(1)'
            });
            $(stepImgs[curStep + 1]).css({
                  'left': '100%',
                  'transform': 'scale(0.7)'
            });
            stepPagers[curStep].classList.add('currentPager');
            stepPagerIcons[curStep - 1].classList.add('active');
            stepPagers[curStep - 1].classList.remove('currentPager');
            stepPagers[curStep - 1].classList.add('beforePager');

            stepBtns.forEach(btn => {
                  btn.disabled = false;
                  btn.classList.add('activeBtn');
            })
            curStep += 1;
      }
      if (curStep == 5) {
            stepBtns[0].disabled = false;
            stepBtns[0].classList.add('activeBtn');
            stepBtns[1].disabled = true;
            stepBtns[1].classList.remove('activeBtn');
      }
      stepPanel();
}

document.querySelector('.prev').addEventListener('click', stepPrev);

function stepPrev() {
      curStep -= 1;
      $(stepImgs[curStep - 2]).css({
            'left': '-63%',
            'transform': 'scale(0.7)'
      });
      $(stepImgs[curStep - 1]).css({
            'left': 0,
            'transform': 'scale(1)'
      });
      $(stepImgs[curStep]).css({
            'left': '100%',
            'transform': 'scale(0.7)'
      });
      $(stepImgs[curStep + 1]).css({
            'left': '140%',
            'transform': 'scale(0.7)'
      });

      stepPagers[curStep].classList.remove('currentPager');
      stepPagerIcons[curStep - 1].classList.remove('active');
      stepPagers[curStep - 1].classList.add('currentPager');
      stepPagers[curStep - 1].classList.remove('beforePager');

      stepPanel();

      if (curStep == 1) {
            stepBtns[0].disabled = true;
            stepBtns[0].classList.remove('activeBtn');
            stepBtns[1].disabled = false;
      }
      if (curStep == 4) {
            stepBtns.forEach(btn => {
                  btn.disabled = false;
                  btn.classList.add('activeBtn');
            })
      }
}

function stepPanel() {
      $(stepPanelItems[curStep - 1]).show();
      $(stepPanelItems[curStep - 1]).siblings().hide();
      $(stepPanelContents[curStep - 1]).animate({
            'margin-top': '15px',
            'opacity': '1'
      });
      $(stepPanelContents).css({
            'margin-top': '40px',
            'opacity': '0'
      });
}


document.querySelectorAll('.sbuMenu-tag-bx > button').forEach(btn => {
      btn.addEventListener('click', function(){
            let check = btn.parentElement.nextElementSibling.children[1].style.display;
            console.log(check);
            if(check == 'block') {
                  // orderTip();
                  console.log('주문tip 페이지 열림')
            }
      })
})

const options = {
      root : null,
      rootMargin : '0px',
      threshold: .25,
}

const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
            if(entry.isIntersecting) {
                  entry.target.classList.add('active');
            } else {
                  entry.target.classList.remove('active');
            }
      });
}, options);

const orderTipImgs = document.querySelectorAll('.orderTipImg');

orderTipImgs.forEach(li => observer.observe(li));



