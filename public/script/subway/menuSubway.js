$('.menu-list-container:not(:first-child)').hide();
$('.menu-tag-bx li:first-child').addClass('active');

$('.menu-tag-bx li').on('click', function (event) {
      event.preventDefault();
      let num = $(this).index();
      $('.menu-list-container').hide();
      $(`.menu-list-container:nth-child(${num + 1})`).show();
      $('.menu-item').addClass('show');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
})