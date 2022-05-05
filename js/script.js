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