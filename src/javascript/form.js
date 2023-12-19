const buttonOpen = document.getElementById('icon-menu')
const menule2 = document.querySelector('.mobile-menu')
const buttonClose = document.querySelector('.menu-mobile-icon')

const home = document.querySelector('.home').addEventListener('click',()=>{
    window.location.href = '../index.html'
})
const testimonials = document.querySelector('.testimonials').addEventListener('click',()=>{
    window.location.href = '../index.html#section-six'
})

const about = document.getElementById('about').addEventListener('click',()=>{
    window.location.href = '../html/aboutme.html'
})

const portafolio = document.getElementById('click',()=>{
    window.open('https://portafolio.continentaldetrasteos.com/')
    window.close()
})
const politicas = document.querySelector('.Qukies').addEventListener('click',()=>{
    window.location.href = '../html/politica.html'
})
buttonOpen.addEventListener('click',()=>{
    menule2.style.display = 'flex'
})
buttonClose.addEventListener('click',()=>{
    menule2.style.display = 'none'
})
const homeMobile = document.querySelector('.homeMobile').addEventListener('click',()=>{
    window.location.href = '../index.html'
})
const portafolioMobile = document.querySelector('.portfolioMobile').addEventListener('click',()=>{
    window.open('https://portafolio.continentaldetrasteos.com/')
    window.close()
})
const aboutUsmobile = document.querySelector('.aboutUsMobile').addEventListener('click',()=>{
    window.location.href = '../html/aboutme.html'
})
const testimonialsMobile = document.querySelector('.testimonialsMobile').addEventListener('click',()=>{
    window.location.href = '../index.html#section-six'
})
