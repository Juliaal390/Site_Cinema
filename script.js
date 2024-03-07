document.getElementById('btnMenu').addEventListener('click', function(){
    let menuBarr = document.getElementById('menu');

    if(menuBarr.style.display === 'none'){
        menuBarr.style.display = 'flex';
    } else {
        menuBarr.style.display = 'none';
    }
});
