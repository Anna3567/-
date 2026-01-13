const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
if(localStorage.getItem('bg-color')!==null){
    color=localStorage.getItem('bg-color')
    header.style.background=color
    footer.style.background=color
}

function choiseDark(){
header.style.background = 'rgb(59, 59, 59)';
header.style.transition='1s'
footer.style.background= 'rgb(59, 59, 59)';
footer.style.transition='1s'
localStorage.setItem('bg-color', 'black')

}

function choiseWhite(){
    header.style.background='white';
    header.style.transition='1s'
    footer.style.background='white';
    footer.style.transition='1s'
    localStorage.setItem('bg-color', 'white')
}