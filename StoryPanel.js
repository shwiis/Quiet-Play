const firstStory = document.getElementById('firstStory');
const btnRead = document.getElementById('btnRead');
const bookReader = document.getElementById('bookReader');
const fontSelectR = document.getElementById('fontStyleR');
const fontSizeR = document.getElementById('fontSizeR');
const fontColorR = document.getElementById('fontColorR');
const paragraph = document.getElementById('paragraph') ;

btnRead.addEventListener('click', ()=> {
    firstStory.style.display = 'none';
    controlPanelR.style.display = 'flex';
    bookReader.style.display = 'flex';
});
fontSelectR.addEventListener("change", () =>{
    paragraph.style.fontFamily = fontSelectR.value;
});
fontSizeR.addEventListener('input', () => {
    paragraph.style.fontSize = fontSizeR.value + 'px';
});
fontColorR.addEventListener('input', ()=> {
    paragraph.style.color = fontColorR.value;
});
