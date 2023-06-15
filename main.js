// function getTime() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var timeString = hours + ":" + minutes + ":" + seconds;
//     document.querySelector(".clock").innerHTML = timeString;
// }
//   setInterval(getTime, 1000);




function getTime () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am" ;

    hours = hours > 12 ? hours - 12 : hours ;
    hours = hours < 10 ? "0"+ hours : hours ;
    minutes = minutes < 10 ? "0"+ minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    

    let timeString =hours + ":" + minutes + ":" + seconds + " " +  ampm;


    document.querySelector(".clock").innerHTML = timeString;
}
setInterval(getTime, 1000);



















