
let timeleft
const to_finish_game = () => {
    clearInterval(downloadTimer)
    localStorage.setItem("change_3_items",change_3_items)
    localStorage.setItem("timer",timeleft)
        timeleft = 0;
        window.location.href = "Summary.html";
    };


let le= JSON.parse(localStorage.getItem("level"))
if (le == "High "){
    timeleft = 400
}
else
    timeleft = 600
var downloadTimer = setInterval(function () {
    document.getElementById("timer").innerHTML = timeleft;
    timeleft -= 1;
    localStorage.setItem("timer",timeleft)
    if (timeleft <= 0) {
        localStorage.setItem("timer",0)
        window.location.href = "Summary.html";
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "game over";
    }
}, 1000);


