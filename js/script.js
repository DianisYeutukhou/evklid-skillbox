const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
    const menuBody = document.querySelector('.header__nav');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    }) 
}

const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.work__info');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work__btn-active')});
    e.currentTarget.classList.add('work__btn-active');

    tabsItem.forEach(function(element){ element.classList.remove('work__info-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__info-active');
  });
});
