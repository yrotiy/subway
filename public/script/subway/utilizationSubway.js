$(function () {
      let url = window.location.href.split('.app')[1];
      let ary = [];
      const subMenu = document.querySelectorAll('.sub-menu a');
      const subHdLnb = document.querySelectorAll('.sub-hd-lnb a');
      const mbLnb = document.querySelectorAll('.mb-lnb-body a');
      for (let i = 0; i < subMenu.length; i++) {
            ary[i] = subMenu[i].pathname;
            if (url == ary[i]) {
                  let mainMenu = subMenu[i].parentElement.parentElement.parentElement;
                  mainMenu.classList.add('mainMenu-active');
                  subMenu[i].classList.add('subMenu-active');
                  subHdLnb[i - 6].classList.add('subHd-active');
                  // mbMenu
                  let mbLnbBtn = mbLnb[i].parentElement.parentElement.parentElement.previousElementSibling.children[0];
                  mbLnbBtn.classList.add('mainMenu-active');
                  mbLnb[i].classList.add('subMenu-active');
            }
      }
})