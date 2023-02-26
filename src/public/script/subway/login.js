$(document).on('click', function(event){
      let loginInput = $('.login-form input');
      
      if(event.target.tagName == 'INPUT') {
            // form active
            loginInput.parent().parent().addClass('active');

            //label active
            let notActive = $(event.target).parent().siblings().children().first();
            $(event.target).siblings().addClass('active');
            $(notActive).removeClass('active');
      } else {
            loginInput.parent().parent().removeClass('active');
            $('.login-form label').removeClass('active');
      }
      
})

const userId = document.getElementById('userId');
const userPw = document.getElementById('userPw');
const loginBtn = document.getElementById('loginBtn');


loginBtn.addEventListener('click', login);

function login(){
      const req = {
            id : userId.value,
            pw : userPw.value
      };

      fetch('/login', {
            method : 'POST',
            headers : {
                  'Content-Type' : 'application/json'
            },
            // 문자열로 변환하기
            body : JSON.stringify(req)
      }).then((res) => res.json())
      .then((res) => {
            if(res.success) {
                  // 로그인 성공 시, index 페이지로 이동
                  location.href = '/';
                  alert(res.message);
            } else {
                  alert(res.message);
            }
      })
      .catch((err) => {
            console.error('로그인 중 에러가 발생했습니다.');
      })
}