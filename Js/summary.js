const element_html = (id, massage) => {
    document.getElementById(id).innerHTML = massage
}
let change_3_items=localStorage.getItem("change_3_items")
change_3_items*=2
console.log(change_3_items-3);
element_html("name", localStorage.getItem("userName"))
//if the user choosed the hard level
if( JSON.parse(localStorage.getItem("level"))=="High "){
    element_html("level", "High level")
    let time = 400 - localStorage.getItem("timer")
    let num_of_set = localStorage.getItem("num_of_set")
    element_html("num_of_set", "you made " + num_of_set + " set in " + time + " seconds")
    let points = time / num_of_set-change_3_items
    if (points <= 20) {
        element_html("mark", "Well done")
        element_html("points", "your points: " +( num_of_set * 10-change_3_items))
    }
    else if (points <= 70) {
        element_html("mark", "nice")
        element_html("points", "your points: " + (num_of_set * 5-change_3_items))
    }
    else {
        element_html("points", "your points: " +( num_of_set * 2-change_3_items))
        element_html("mark", "maybe next time...")
    }
}
else{
    element_html("level", "low level")
    let time = 600 - localStorage.getItem("timer")
    let num_of_set = localStorage.getItem("num_of_set")
    element_html("num_of_set", "you made " + num_of_set + " set in " + time + " seconds")
    let points = time / num_of_set-change_3_items

    if (points <= 35) {
        element_html("mark", "Well done")
        element_html("points", "your points: " + (num_of_set * 10-change_3_items))
    }
    else if (points <= 110) {
        element_html("mark", "nice")
        element_html("points", "your points: " +(num_of_set * 5-change_3_items))
    }
    else {
        element_html("points", "your points: " +(num_of_set*2-change_3_items))
        element_html("mark", "maybe next time... ):")
    }
}


