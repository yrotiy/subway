$(function () {
      let url = window.location.href.split('3000')[1];
      let ary = [];
      const subMenu = document.querySelectorAll('.sub-menu a');
      const subHdLnb = document.querySelectorAll('.sub-hd-lnb a');

      for (let i = 0; i < subMenu.length; i++) {
            ary[i] = subMenu[i].pathname;
            if (url == ary[i]) {
                  subMenu[i].classList.add('subMenu-active');
                  let mainMenu = subMenu[i].parentElement.parentElement.parentElement;
                  mainMenu.classList.add('mainMenu-active');
                  subHdLnb[i-6].classList.add('subHd-active');
                  console.log(i);
            }
      }
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