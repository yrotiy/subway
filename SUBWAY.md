CSS 분류 주석
/* ======== class  ========*/

/* ---- class ---- */

/* class */


<메뉴소개> 업데이트 사항 

1. HTML
- ```sub-hd(try-1)```
```
<!-- main-hd-bg 아래 -->
<div class="try try-1">
      <p>원하는 메뉴를 클릭해보세요.</p>
      <i class="fa-solid fa-hand-point-right"></i>
</div>
```
- ```menu-tag-bx(try-2)```
```
<!-- menu-tag-bx 아래 -->
<div class="try try-2">
      <p>원하는 카테고리를 클릭해보세요.</p>
      <i class="fa-solid fa-hand-point-right"></i>
</div>
```

2. CSS
```
.try {
      width: 300px;
      height: fit-content;
      position: absolute;
      left: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 20px;
      font-weight: bolder;
      text-align: center;
      border-radius: 30px;
      background-color: var(--white-color);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;      
      z-index: 1;
      transition: 0.3s;
}

.try:hover {
      left: 33px;
      cursor: pointer;
}

.try i {
      font-size: 25px;
      padding-left: 15px;
}

.try-1 {
      top: 177px;
}

.try-2 {
      bottom: 348px;
}
```
```
<!-- try-1.active -->
.sub-hd-lnb-container.click {
      background-color: var(--primary-color);
      transition: 0.4s;
}

<!-- try-2.active-->
.menu-tag-bx.click {
      bottom: 45px;
      transition: 0.4s;
}

```
3. JS&JQuery
```
<!-- fontawesome script -->
<script src="https://kit.fontawesome.com/00632e81cf.js" crossorigin="anonymous"></script>

<!-- try-1 -->
$('.try-1').on('mouseover', function(){
      $('.sub-hd-lnb-container').addClass('click');
})
$('.try-1').on('mouseleave', function(){
      $('.sub-hd-lnb-container').removeClass('click');
})

<!-- try-2 -->
$('.try-2').on('mouseover', function(){
      $('.menu-tag-bx').addClass('click');
})
$('.try-2').on('mouseleave', function(){
      $('.menu-tag-bx').removeClass('click');
})
```