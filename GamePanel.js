const firstGame = document.getElementById('firstGame');
const btnPlayG = document.getElementById('btnPlayG');
const gamePlay = document.getElementById('gamePlay');

btnPlayG.addEventListener('click', ()=> {
    firstGame.style.display = 'none';
    gamePlay.style.display = 'flex';
});