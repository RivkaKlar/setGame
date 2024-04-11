
document.getElementById("name").innerHTML = localStorage.getItem("userName")
document.getElementById("level").innerHTML =JSON.parse(localStorage.getItem("level"))  + "-level";
let s
if (localStorage.getItem("level") == "hard")
    s = 200
else
    s = 400
let time = s- localStorage.getItem("timer") 

let num_of_set=localStorage.getItem("num_of_set")
document.getElementById("num_of_set").innerHTML ="you made "+num_of_set+ " set in "+time+ " seconds"
// document.getElementById("num_of_set").innerHTML = num_of_set
let points=time/num_of_set
if(points<=20){
document.getElementById("mark").innerHTML="well"
document.getElementById("points").innerHTML="your points: "+ num_of_set*10
}

else if(points<=90){
    document.getElementById("mark").innerHTML="nice"
    document.getElementById("points").innerHTML="your points: "+ num_of_set*5
}
else{
    document.getElementById("points").innerHTML="your points: "+ num_of_set*2
    document.getElementById("mark").innerHTML="bad"
}
