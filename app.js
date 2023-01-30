const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('header_active')
    } else if(window.scrollY < 50) {
        header.classList.remove('header_active')
    }
})

const menuBtn = document.getElementById('menu-btn')
const navMenu = document.querySelector('.nav-list')

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-list_active')
})