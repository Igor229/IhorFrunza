const hamburger = document.querySelector('.burger__btn')
const navMenu = document.querySelector('.header__navigation')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})