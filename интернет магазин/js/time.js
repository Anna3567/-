function currentTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.querySelector("#time").innerHTML= year + ' ' + month + ' ' + hours + ":" + minute + ":" + second
    setTimeout(currentTime, 1000)

}
currentTime()

