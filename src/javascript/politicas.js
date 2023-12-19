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