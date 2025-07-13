const languages = document.querySelector('.header__language');
const phone = document.querySelector('.top-block__phone');
const hunter = document.querySelector('.interactions__hunter');
const burger = document.querySelector('.burger');
const headerRight = document.querySelector('.header__item_right');
const search = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');
const menu = document.querySelector('.header__menu');

if (window.innerWidth < 1100) {
  phone.before(languages);
  burger.after(hunter);
  headerRight.after(search);
  searchButton.textContent = '';
}

burger.addEventListener('click', () => {
  menu.classList.toggle('header__menu_open');
});
