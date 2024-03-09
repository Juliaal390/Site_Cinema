/* todos os elementos com a classe 'movie' */
const elementos = document.getElementsByClassName('movie');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', ()=> {
        window.location.href = 'emCartaz.html';
    });
}

