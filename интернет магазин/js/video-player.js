const video = document.getElementById("myVideo")
const btnPlay = document.getElementById("play")
const btnSound = document.getElementById("mute")
const playList = ["video1", "video2", "video3"]
let number = 0
const titleVideo = document.querySelector('.video__title')
const textVideo = document.querySelector('.video__text')
const playName=["I bought the most BEAUTIFUL Phones on the Internet!", "Названия — это мощный инструмент продвижения на Ютубе", "Загадочные технологии: 10 невероятных фактов о телефонах" ]
const playText=["I spend a LOT of time trying to make my videos as concise, polished and useful as possible for you", "Кропотливая работа с определенными элементами Ютуба — это один из самых действенных способов", "«10 способов набрать 1000 подписчиков на Ютубе»"]

function play(){
if (video.paused){
    video.play()
    btnPlay.innerText="Пауза"

}
else {
    video.pause()
    btnPlay.innerText="Включить"
}
}


function sound(){
    if (video.muted){
        video.muted = false;
        btnSound.innerText="Выключить звук"

    }
else{
video.muted= true;
btnSound.innerText="Включить звук"
} 
}


function next(){
    if(number<playList.length-1){
        number+=1;
    }
    else{
        number=0;
    }
    video.src=`video/${playList[number]}.mp4`
    titleVideo.innerText=playName[number];
    textVideo.innerText=playText[number]
}


function exit(){
    if(number!=0){
        number-=1;
    }
    else{
        number=playList.length-1
    }
    video.src=`video/${playList[number]}.mp4`
    titleVideo.innerText=playName[number];
    textVideo.innerText=playText[number]
}
