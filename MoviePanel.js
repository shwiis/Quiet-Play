const firstMovie = document.getElementById('firstMovie');
const moviePlayer = document.getElementById('moviePlayer');
const btnWatch = document.getElementById('btnWatch');
const btnFullScreen = document.getElementById('btnFullScreen');
const btnCC = document.getElementById('btnCC');
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


