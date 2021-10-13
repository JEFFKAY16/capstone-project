const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const displayMenu = document.querySelector('.main-menu');
const displayItems = document.querySelectorAll('.items');

openMenu.addEventListener('click', () => {
  displayMenu.classList.add('display-menu');
});

closeMenu.addEventListener('click', () => {
  displayMenu.classList.remove('display-menu');
});

displayItems.forEach((element) => {
  element.addEventListener('click', () => {
    displayMenu.classList.remove('display-menu');
  });
});
