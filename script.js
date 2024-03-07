document.getElementById('btnMenu').addEventListener('click', function(){
    let menuBarr = document.getElementById('menu');
    let screenWidth = window.innerWidth; // Obtém a largura da janela do navegador

    if(screenWidth <= 630){
        menuBarr.classList.toggle('show-menu');
        /* se a classe existir, será removida, e se não existir, será adicionada */
    }
});

