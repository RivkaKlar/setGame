// let time_of_game=setTimeout(function () {
//     alert("game over")
// },5000
let timeleft
const to_finish_game = () => {
    clearInterval(downloadTimer)
    localStorage.setItem("timer",timeleft)
        timeleft = 0;
        document.getElementById("timer").innerHTML=0
        window.location.href = "Summary.html";
    };


// var enterDate = new Date();
// function secondsSinceEnter()
// {
//   return (new Date() - enterDate) / 1000;
// }


if (localStorage.getItem("level") == "hard")
    timeleft = 200
else
    timeleft = 400
var downloadTimer = setInterval(function () {
    document.getElementById("timer").innerHTML = timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
        localStorage.setItem("timer",0)
        window.location.href = "Summary.html";
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "game over";
    }
}, 1000);


