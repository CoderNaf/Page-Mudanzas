// const data

const data = './src/json/data.json'
const dataProcess = 'src/json/process.json'
const container = document.querySelector('.section-two--services')
const containerProcess = document.querySelector('.article-section--four')
const modal = document.getElementById('window-background')
const modalContainer = document.getElementById ('window-container')
const titleModal = document.getElementById('titleModal')
const paragrafModal = document.getElementById('paragrafModal')
const buttonCloseModal = document.getElementById('close-button')
const buttonCloseMenu = document.querySelector('.menu-mobile-icon')
const menuMobile = document.querySelector('.mobile-menu')
const buttonOpenMenu = document.getElementById('icon-menu')
const facebook = document.querySelector('.facebook')
const instagram = document.querySelector('.instagram')
const iconWhatsapp = document.querySelector('.whatsapp')

// functions

const logoFoter = document.getElementById('logo-footer').addEventListener('click',()=>{
    window.location = '/index.html'
})
const buttonQuote = document.querySelector('.quote').addEventListener('click',()=>{
    const form = document.querySelector('.section-one--picture')
    form.scrollIntoView({behavior: 'smooth'})
})
const buttonWhatsApp = document.querySelector('.button-whatsApp').addEventListener('click', ()=>{
    const messageWhatsAppX = '¡Hola! He visto su página web y me gustaría obtener más información sobre sus servicios. Mi nombre es: [Tu nombre].'
    setTimeout(() => {
        window.open('http://wa.me/' + 573115386102  + "?text=" + encodeURIComponent(messageWhatsAppX));
    }, 200);
})


// ciclos

fetch(data)
    .then(response => response.json())
    .then(data => { 
        function dataFunction(){
            for(let i = 0; i < data.length; i++){
                const item = data[i];
                const date = document.createElement('div');
                date.innerHTML = `<img src="${item.imagen}" alt="">
                <h3>${item.name}</h3>
                <p class="verModal">Ver más</p>`;

                // Almacena el nombre del servicio antes de agregar el evento
                const serviceName = item.name;

                const buttonModal = date.querySelector('.verModal').addEventListener('click', () => {
                    modal.style.display = 'flex';
                    titleModal.innerHTML = `servicio de ${serviceName}`;
                    paragrafModal.innerHTML = `${item.description}`;
                });

                const buttonInfoModal = document.querySelector('.button-info--modal').addEventListener('click', () => {
                    const messageInfoModal = `Hola mi nombre es [Tu nombre], y estoy interesad@ en obtener más información sobre uno de sus servicios`
                    const messageModalInfo = messageInfoModal;
                    function messagueWhatsApp(){
                        setTimeout(() => {
                            window.open('http://wa.me/' + 573115386102  + "?text=" + encodeURIComponent(messageModalInfo));
                        }, 350);
                    }
                    messagueWhatsApp();
                });

                container.appendChild(date);
            }
        }
        dataFunction();
    });


buttonCloseModal.addEventListener('click', ()=>{
    modal.style.display = 'none'
})

fetch(dataProcess)
    .then(Response => Response.json())
    .then( process => {
        function processFuncion(){
            for(let i = 0; i < process.length; i++){
                const processItems = process[i];
                const createItems = document.createElement ('article')
                createItems.innerHTML = `<img src="${processItems.icono}" alt="">
                <h2>${processItems.paso}</h2>
                <p class="verInfoModalTwo">Conoce más</p>`;

                const buttonInfoModal = createItems.querySelector('.verInfoModalTwo').addEventListener('click',()=>{
                    modal.style.display = 'flex'
                    titleModal.innerHTML = `${processItems.name}`
                    paragrafModal.innerHTML = `${processItems.copy}`
                })

                containerProcess.appendChild(createItems)
            }

        }
        processFuncion();
    })


    // formulario

    const enviarC = document.querySelector('.cotiza').addEventListener('click', () => {
        const transporteDesde = document.getElementById('desde').value;
        const transporteHasta = document.getElementById('hasta').value;
        const fecha = document.getElementById('fecha').value;
        const nombre = document.getElementById('nombre').value;
        const numero = document.getElementById('numero').value;
    
        // Validar cada campo antes de continuar
        if (!validarCampo(transporteDesde) || !validarCampo(transporteHasta) || !validarCampo(fecha) || !validarCampo(nombre) || !validarCampo(numero)) {
            // Si algún campo no es válido, puedes mostrar un mensaje o realizar otra acción
            alert("Todos los campos son obligatorios. Por favor, completa la información correctamente.");
            return;
        }
    
        const mensajeDeCotizacion = `Hola, mi nombre es ${nombre}. Me gustaría cotizar un servicio de mudanza y transporte para el día ${fecha}, desde ${transporteDesde} hasta ${transporteHasta}. Agradezco ponerse en contacto al siguiente número: ${numero}.`;
    
        setTimeout(() => {
            window.open('http://wa.me/573115386102?text=' + encodeURIComponent(mensajeDeCotizacion));
        }, 350);

        setTimeout(()=>{
            document.getElementById('desde').value = '';
            document.getElementById('hasta').value = '';
            document.getElementById('fecha').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('numero').value = '';
        }, 400);
    });
    
    function validarCampo(valor) {
        // Puedes agregar lógica de validación más específica según tus necesidades
        return valor.trim() !== ''; // Verifica que el campo no esté vacío
    }

    // menu

    const testimonials = document.querySelector('.testimonials').addEventListener('click',()=>{
        const testimonial = document.getElementById('js_widget')
        testimonial.scrollIntoView({behavior: 'smooth'})
    })
    const home = document.querySelector('.home').addEventListener('click',()=>{
        const sectionOne = document.getElementById('section-one')
        sectionOne.scrollIntoView({behavior: 'smooth'})
    })
    const contactHeader = document.querySelector('.contactHeader').addEventListener('click',()=>{
        window.location.href = './php/index.php'
    })
    const aboutUs = document.querySelector('.aboutUs').addEventListener('click',()=>{
        window.location.href = './html/aboutme.html'
    })
    const portfolio = document.querySelector('.portfolio').addEventListener('click',()=>{
        window.open('https://portafolio.continentaldetrasteos.com/')
        window.close()
    })
    const buttonQuorer = document.getElementById('buttonQuorer').addEventListener('click', ()=>{
        window.open('https://portafolio.continentaldetrasteos.com/')
        window.close()
    })
    
    const politicas = document.querySelector('.Qukies').addEventListener('click',()=>{
        window.location.href = './html/politica.html'
    })
    buttonCloseMenu.addEventListener('click',()=>{
        menuMobile.style.display = 'none'
    })
    buttonOpenMenu.addEventListener('click',()=>{
        menuMobile.style.display = 'flex'
    })
    const homeMobile = document.querySelector('.homeMobile').addEventListener('click',()=>{
        const sectionOne = document.getElementById('section-one')
        sectionOne.scrollIntoView({behavior: 'smooth'})
        menuMobile.style.display = 'none'
    })
    const aboutUsMobile = document.querySelector('.aboutUsMobile').addEventListener('click',()=>{
        window.location.href = './html/aboutme.html'
    })
    const portafolioMobile = document.querySelector('.portfolioMobile').addEventListener('click',()=>{
        window.open('https://portafolio.continentaldetrasteos.com/')
        window.close()
    })
    const testimonialMobile = document.querySelector('.testimonialsMobile').addEventListener('click',()=>{
        const testimonial = document.getElementById('js_widget')
        testimonial.scrollIntoView({behavior: 'smooth'})
        menuMobile.style.display = 'none'
    })
    const contactoMobile = document.querySelector('.contactUsMobile').addEventListener('click',()=>{
        window.location.href = './php/index.php'
    })

    // header one
    facebook.addEventListener('click',()=>{
        window.open('https://www.facebook.com/Continentaldetrasteos')
    })
    instagram.addEventListener('click',()=>{
        window.open('https://www.instagram.com/continentaldetrasteos/')
    })
    iconWhatsapp.addEventListener('click',()=>{
        const messageInfoModal = `Hola mi nombre es [Tu nombre], y estoy interesad@ en obtener más información sobre uno de sus servicios`
        window.open('http://wa.me/' + 573115386102  + "?text=" + encodeURIComponent(messageInfoModal));
        
    })