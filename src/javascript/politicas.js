const menuMobile = document.querySelector('.mobile-menu')



const home = document.querySelector('.home').addEventListener('click', ()=>{
    window.location.href = '../index.html'
})
const about = document.querySelector('.aboutUs').addEventListener('click', ()=>{
    window.location.href = '../html/aboutme.html'
})
const portafolio = document.querySelector('.portfolio',()=>{
    window.open('https://portafolio.continentaldetrasteos.com/')
    window.close()
})
const testimonials = document.querySelector('.testimonials').addEventListener('click',()=>{
    window.location.href = '../index.html#section-six'
})
const form = document.querySelector('.contactHeader').addEventListener('click',()=>{
    window.location.href = '../php/index.php'
})
const menuMobileButton = document.getElementById('icon-menu').addEventListener('click', ()=>{
    menuMobile.style.display = 'flex'
})
const buttonColse = document.querySelector('.menu-mobile-icon').addEventListener('click',()=>{
    menuMobile.style.display = 'none'
})
const homeMobile = document.querySelector('.homeMobile').addEventListener('click',()=>{
    window.location.href = '../index.html'
})
const aboutMobile = document.querySelector('.aboutUsMobile').addEventListener('click',()=>{
    window.location.href = '../html/aboutme.html'
})
const testimonialsMobile = document.querySelector('.testimonialsMobile').addEventListener('click',()=>{
    window.location.href = '../index.html#section-six'
})
const portafolioMobile = document.querySelector('.portfolioMobile').addEventListener('click',()=>{
    window.open('https://portafolio.continentaldetrasteos.com/')
    window.close()
})
const contact = document.querySelector('.contactUsMobile').addEventListener('click',()=>{
    window.location.href = '../php/index.php'
})