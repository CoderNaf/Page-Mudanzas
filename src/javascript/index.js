const data = './src/json/data.json'
const dataProcess = 'src/json/process.json'
const container = document.querySelector('.section-two--services')
const containerProcess = document.querySelector('.article-section--four')
const modal = document.getElementById('window-background')
const modalContainer = document.getElementById ('window-container')
const titleModal = document.getElementById('titleModal')
const paragrafModal = document.getElementById('paragrafModal')
const buttonCloseModal = document.getElementById('close-button')

const buttonWhatsApp = document.querySelector('.button-whatsApp').addEventListener('click', ()=>{
    const messageWhatsAppX = '¡Hola! Mi nombre es [ Tu Nombre ] y quiero más información sobre sus servicios'
    setTimeout(() => {
        window.open('http://wa.me/' + 573043171488  + "?text=" + encodeURIComponent(messageWhatsAppX));
    }, 200);
})


fetch(data)
    .then(response => response.json())
    .then(data => { 
        function dataFunction(){
            for(let i = 0; i < data.length; i++){
                const item = data[i];
                const date = document.createElement('div');
                date.innerHTML = `<img src="${item.imagen}" alt="">
                <h3>${item.name}</h3>
                <p class="verModal">ver mas</p>`;

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
                            window.open('http://wa.me/' + 573043171488  + "?text=" + encodeURIComponent(messageModalInfo));
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
                <p class="verInfoModalTwo">conoce mas</p>`;

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

