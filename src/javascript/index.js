const data = './src/json/data.json'
const dataProcess = 'src/json/process.json'
const container = document.querySelector('.section-two--services')
const containerProcess = document.querySelector('.article-section--four')

fetch(data)
    .then(Response => Response.json())
    .then(data => { 
        function dataFunction(){
            for(let i = 0; i < data.length; i++){
                const item = data[i]
                const date = document.createElement('div')
                date.innerHTML = `<img src="${item.imagen}" alt="">
                <h3>${item.name}</h3>
                <p>ver mas</p>`;

                container.appendChild(date)
                
            }
        }

        dataFunction();
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
                <p>conoce mas</p>`;

                containerProcess.appendChild(createItems)
            }
        }
        processFuncion();
    })