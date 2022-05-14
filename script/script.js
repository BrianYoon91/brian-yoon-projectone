// Responsive burger menu for mobile

const burgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', ()=>{ 
    menu.classList.toggle('show');
})