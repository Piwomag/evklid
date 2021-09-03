var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView:1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
let burger = document.querySelector('.burger');
let parent = document.querySelector('.header-container');
burger.onclick = function(){
  parent.classList.toggle('menu_show');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab_content').forEach(function(tabContent) {
        tabContent.classList.remove('tab_content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab_content_active')
    })
  })
})