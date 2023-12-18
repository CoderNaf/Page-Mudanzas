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
