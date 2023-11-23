new Swiper('.travel-info .swiper', {
  spaceBetween: 30, 
  slidesPerView: 3,
  navigation: {
    prevEl: '.travel-info .swiper-prev',
    nextEl: '.travel-info .swiper-next',
  }
});

const hoverEl = document.querySelectorAll('.guide__contents');
const on = document.querySelector('.travel-guide .inner');

hoverEl.forEach((El) => {
  El.addEventListener('mouseover', () => {
    on.classList.add('on')
  });
  El.addEventListener('mouseout', () => {
    on.classList.remove('on')
  })
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const topBtn = document.querySelector('#top-btn');

window.addEventListener('scroll', _.throttle(() => {
  if(window.scrollY > 500) {
    gsap.to(topBtn, .1, {
      opacity : 1
    })
  } else {
    gsap.to(topBtn, .1, {
      opacity : 0
    })
  }
}, 300));

topBtn.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


