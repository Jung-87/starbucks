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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window는 우리가 보고 있는 화면 자체
// 300은 0.3s임
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기style
    // badgeEl.style.display= 'none';
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl,.2, {
      x: 0
    });

  } else {
    // 배지 보이기
    // badgeEl.style.display= 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl,.2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간) 함수를 시간에 따라 동작 시킴. 주로 스크롤에 많이 적용함 
// 적용하지 않으면 scroll 할때마다 너무 많은 동작을 센싱해서 화면이 버벅일수 있음 

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1 ) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  })
});

// new 는 자바스크립트에서 쓰는 생성자 클래스 
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // direction 부분은 기본이 horizantal? 이라 안해줘도 됨
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween:30,
  slidesPerView:5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    // 반복
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당년도
 