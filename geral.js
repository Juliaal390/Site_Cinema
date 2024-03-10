document.getElementById('btnMenu').addEventListener('click', ()=>{
    let menuBarr = document.getElementById('menu');
    let screenWidth = window.innerWidth; // largura da janela do navegador

    if(screenWidth <= 660){
        if (menuBarr.classList.contains('show-menu')) {
            menuBarr.classList.remove('show-menu'); // remove a classe 
        } else {
            menuBarr.classList.add('show-menu'); // adiciona a classe
            let redirecionarConta = document.getElementById('conta');
            redirecionarConta.addEventListener('click', ()=>{
                window.location.href='minhaConta.html';
            })
        }
    } else {
        menuBarr.classList.remove('show-menu'); // fecha o menu burguer ao aumentar a tela
    }
});

const btnConta = document.getElementById('conta');
const telaLogin = document.getElementById('formLogin');

btnConta.addEventListener('click', (event) => {
    event.preventDefault();
    if (telaLogin.style.display === "block") {
        telaLogin.style.display = "none";
    } else {
        telaLogin.style.display = "block";
    }
});



