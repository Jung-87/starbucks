const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
   searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 속성을 지정 해주는 것, Attribute를 html에서는 속성이라고 함
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// Input 요소에 focus가 해제 됐을대, focused 라는 클래스를 제거해주는것
// 한번 속성을 지정해주면 계속 남아 있음, blur라는 거는 focus에서 제외 됐을때의 상황임
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // 생략해도 결과는 같음
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당년도