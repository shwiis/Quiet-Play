
const overlay = document.getElementById('overlay');
const btnOpenMenu = document.getElementById('btnOpenMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const MenuContainer = document.getElementById('MenuContainer');
const btnMovie = document.getElementById('btnMovie');
const MoviePanel = document.getElementById('MoviePanel');
const btnStory = document.getElementById('btnStory');
const StoryPanel = document.getElementById('StoryPanel');
const btnGame = document.getElementById('btnGame');
const GamePanel = document.getElementById('GamePanel');

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


const firstMovie = document.getElementById('firstMovie');
const moviePlayer = document.getElementById('moviePlayer');

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
});

btnGame.addEventListener('click', () => {
    MoviePanel.style.display = 'none';
    StoryPanel.style.display = 'none';
    GamePanel.style.display = 'block';
});

//Movie Panel 
const btnWatch = document.getElementById('btnWatch');
const btnFullScreen = document.getElementById('btnFullScreen');
const btnCCSetting = document.getElementById('btnCC');
const btnSetting = document.getElementById('btnSetting');
const fontSelect = document.getElementById('fontStyle');
const fontSize = document.getElementById('fontSize');
const fontColor = document.getElementById('fontColor');
const subtitle = document.getElementById('subtitle');

btnWatch.addEventListener('click', () => {
    firstMovie.style.display = 'none';
    moviePlayer.style.display = 'flex';
});

btnCC.addEventListener('click', ()=> {
    if(subtitle.style.display == 'none') {
        subtitle.style.display = 'block';
    } else {
        subtitle.style.display = 'none';
    }
});

btnSetting.addEventListener('click', ()=>{
    const settingPanel = document.getElementById('settingPanel');
    settingPanel.classList.toggle('active');
});
fontSelect.addEventListener("change", () =>{
    subtitle.style.fontFamily = fontSelect.value;
});
fontSize.addEventListener('input', () => {
    subtitle.style.fontSize = fontSize.value + 'px';
});
fontColor.addEventListener('input', ()=> {
    subtitle.style.color = fontColor.value;
});

btnFullScreen.addEventListener('click', () => {
    if (!document.fullscreenElement){
        moviePlayer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});