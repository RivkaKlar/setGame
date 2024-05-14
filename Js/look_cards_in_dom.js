
let items_on_the_game = [];
let mor_three=0;
const user_name = () => {
    document.getElementById("name").innerHTML = localStorage.getItem("userName")
}
//////////////////////////https://dev.to/sprite421/how-to-use-html-data-attributes-adc/////=
//random  numbers to the game 
function getRandomValue(numOfrundom) {
    let random
    for (let i = 0; i < numOfrundom; i++) {
        random = Math.floor(Math.random() * allShapes.length);
        items_on_the_game.push(allShapes[random])
        allShapes.splice(random, 1)
    }
}

function makeElementHTML(kind, className, className2, addTo, addToChoesed) {
    let item;
    item = document.createElement(kind);
    if (className2 != "") {
        item.classList.add(className2);
    }
    item.classList.add(className);
    if (addTo === "") {
        // console.log(addToChoesed);
        addToChoesed.append(item)
    }
    else {
        document.querySelector(addTo).append(item);
    }

    return item
}
const add_1_item_to_dom = (li_ul, draw) => {
    let new_li;
    let new_ul;
    new_ul = makeElementHTML(kind = 'ul', className = "item", className2 = draw.id, addTo = "", addToChoesed = li_ul)
    for (let a of attributes_items) {
        new_ul.setAttribute(a, draw[a]);
    }
    new_ul.setAttribute('id', draw.id);
    for (let j = 0; j < draw.numOfShapes; j++) {
        new_li = makeElementHTML(kind = 'li', className = "li", className2 = "", addTo = "", addToChoesed = new_ul)
        styles(new_li, draw.color, draw.background)
        shape_item(new_li, draw.shape)
    }
    return new_ul
}

const add_items_to_dom = (arr_to_draw) => {
    let li_ul
    for (let i of arr_to_draw) {
        li_ul = makeElementHTML(kind = 'li', className = "li_ul", className2 = "", addTo = "#list")
        add_1_item_to_dom(li_ul, i)
    }

}
//styles of color and background
function styles(item, color, background) {
    item.style.color = color
    if (background === "full") {
        item.style.backgroundColor = color
    }

    else
        if (background === "lines") {
                item.style.backgroundImage = `linear-gradient(to right, ${color} 1px,transparent 1px)`
                item.style.backgroundSize = "5px";
        }

}

const shape_item = (item, shape) => {
    if (shape === "Square") {
        item.style.height = "3vw";
        item.style.width = "3vw"
    }
    else
        if (shape === "Circle") {
            item.style.height = "3vw";
            item.style.width = "3vw"
            item.style.borderRadius = "50%"
        }
        else
            if (shape === "Rhombus") {
                item.style. transform= "rotate(67.5deg) skewX(45deg) scaleY(cos(45deg))";
                item.style.height = "3vw";
                item.style.width = "3vw"

            }
    item.style.border = "2px solid"
}
// const add_three_items_to_the_game=()=>{
//     if(mor_three!=3)
//     for (let i = 0; i < 3; i++) {
//         mor_three=3
//         add_1_item_to_dom( li_ul = makeElementHTML(kind = 'li', className = "li_ul", className2 = "", addTo = "#list"),setRandomValue()) 
//     }
 
// }
function Main() {
    getRandomValue(12);
    add_items_to_dom(items_on_the_game);
    user_name();

}
Main()