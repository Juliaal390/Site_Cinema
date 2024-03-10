/* todos os elementos com a classe 'movie' */
const elementos = document.getElementsByClassName('movie');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', ()=> {
        window.location.href = 'emCartaz.html';
    });
}

//array de obj com o id de index e o id de Em Cartaz
const filmesRedirecionar = [
    { id: 'ff1', ancora: 'f1' },
    { id: 'ff2', ancora: 'f2' },
    { id: 'ff3', ancora: 'f3' },
    { id: 'ff4', ancora: 'f4' }
];
//para cada id de filmesRedirecionar, é adicionado um evento
filmesRedirecionar.forEach(e => {
    const redirecionar = document.getElementById(e.id);
    redirecionar.addEventListener('click', () => {
        window.location.href = `emCartaz.html#${e.ancora}`;
    });
});

