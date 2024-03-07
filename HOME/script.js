document.getElementById('btnMenu').addEventListener('click', function(){
    let menuBarr = document.getElementById('menu');
    let screenWidth = window.innerWidth; // largura da janela do navegador

    if(screenWidth <= 660){
        if (menuBarr.classList.contains('show-menu')) {
            menuBarr.classList.remove('show-menu'); // remove a classe 
        } else {
            menuBarr.classList.add('show-menu'); // adiciona a classe
        }
    } else {
        menuBarr.classList.remove('show-menu'); // fecha o menu burguer ao aumentar a tela
    }
});



/* todos os elementos com a classe 'movie' */
const elementos = document.getElementsByClassName('movie');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
        window.location.href = '../Em Cartaz/EmCartaz.html';
    });
}

