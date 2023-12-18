const aboutGaranties = '../src/json/garanties.json';
const divContain = document.getElementById('divContainer');


fetch(aboutGaranties)
    .then(response => response.json())
    .then(garantias => {
        function garantiesFor() {
            for (let index = 0; index < garantias.length; index++) {
                const garantia = garantias[index]; // Cambio aquí
                const divElement = document.createElement('div');
                divElement.classList.add('section-info--garanties'); // Quité el punto antes de 'section-info'
                divElement.innerHTML = `<img src="${garantia.imagen}" alt="">
                <h3>${garantia.titulo}</h3>
                <p>${garantia.parrafo}</p>`; // Cambio aquí

                divContain.appendChild(divElement);
            }
        }
        garantiesFor();
    });

    // menu 

    const home = document.getElementById('home').addEventListener('click', ()=>{
        window.location.href = '../index.html'
    })

    const testimonials = document.getElementById('testimonials').addEventListener('click',()=>{
        window.location.href = '../index.html#section-six' 
    })

    const contact = document.getElementById('contact').addEventListener('click',()=>{
        window.location.href = '../php/index.php'
    })

    const portafolio = document.getElementById('portfolio').addEventListener('click',()=>{
        window.open('https://portafolio.continentaldetrasteos.com/')
        window.close();
    })