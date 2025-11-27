const firstMovie = document.getElementById('firstMovie');
const moviePlayer = document.getElementById('moviePlayer');
const overlay = document.getElementById('overlay');
const btnOpenMenu = document.getElementById('btnOpenMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const MenuContainer = document.getElementById('MenuContainer');
const btnMovie = document.getElementById('btnMovie');
const MoviePanel = document.getElementById('MoviePanel');
const btnStory = document.getElementById('btnStory');
const StoryPanel = document.getElementById('StoryPanel');
const firstStory = document.getElementById('firstStory');
const btnGame = document.getElementById('btnGame');
const GamePanel = document.getElementById('GamePanel');
const firstGame = document.getElementById('firstGame');
const gamePlay = document.getElementById('gamePlay');
const controlPanelR = document.getElementById('controlPanelR');

btnOpenMenu.addEventListener('click', () => {
    const w1 = document.getElementById('welcome');
    w1?.remove();

    overlay.classList.remove('close');
    overlay.classList.add('open');

    MenuContainer.classList.remove('close');
    MenuContainer.classList.add('open'); 
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
    overlay.classList.add('close');
    MenuContainer.classList.remove('open');
    MenuContainer.classList.add('close');
});
btnCloseMenu.addEventListener('click', () => {
    overlay.classList.remove('open');
    overlay.classList.add('close');

    MenuContainer.classList.remove('open');
    MenuContainer.classList.add('close');
});

btnMovie.addEventListener('click', () => {
    GamePanel.style.display = 'none';
    StoryPanel.style.display = 'none';
    MoviePanel.style.display = 'flex';
    
    moviePlayer.style.display = 'none';
    firstMovie.style.display = 'flex';
});

btnStory.addEventListener('click', () => {
    MoviePanel.style.display = 'none';
    GamePanel.style.display = 'none';
    StoryPanel.style.display = 'flex';
    
    controlPanelR.style.display = 'none';    
    bookReader.style.display = 'none';
    firstStory.style.display = 'flex';
});

btnGame.addEventListener('click', () => {
    MoviePanel.style.display = 'none';
    StoryPanel.style.display = 'none';
    GamePanel.style.display = 'block'; 

    gamePlay.style.display = 'none';
    firstGame.style.display = 'flex';
});
