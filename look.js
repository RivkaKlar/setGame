
let items_on_the_game = [];

const user_name=()=>{ 
    document.getElementById("name").innerHTML=localStorage.getItem("userName")
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
        item.innerHTML = "full"
        item.style.backgroundColor = color
    }

    else
        if (background === "lines") {
            item.classList.add("lines")
            item.innerHTML = "LI"
            // item.fillStyle = "white";/
            ///////////////////////////////////////////////////////////////////////////////

            // let canvas;
            // let ctx;
            // let w, h;
            // let config = {
            //   squareSize: 60,
            //   space: 4,
            //   lineWidth: 2,
            // };

            // // function setup() {
            // //   canvas = document.querySelector("#canvas");
            // //   ctx = canvas.getContext("2d");
            // //   reset();
            // //   window.addEventListener("resize", () => {
            // //     reset();
            // //     draw();
            // //   });  
            // // }

            // // function reset() {
            // //   w = canvas.width = window.innerWidth;
            // //   h = canvas.height = window.innerHeight; 
            // // }

            // function draw() {
            //   ctx.fillStyle = "white";
            //   ctx.fillRect(0, 0, w, h);
            //   let size = config.squareSize;
            //   let dist = Math.sqrt(2 * size * size);
            //   for(let x = -dist; x < w + dist; x += dist) {
            //     for(let y = -1; y < h / dist * 2 + 1; y += 1) {
            //       let xOffset = 0;
            //       if(Math.abs(y) % 2 === 1) {
            //         xOffset = dist / 2;
            //       }
            //       drawLines(x + xOffset, y * dist / 2, size);
            //     }
            //   }
            // }

            // // function setRandomRotationOnContext() {
            // //   let sign = Math.random() > 0.5 ? -1 : 1;
            // //   let angle = sign * Math.PI / 4;
            // //   ctx.rotate(angle);
            // // }

            // // function getSaturationOffset(x0, y0) {
            // //   let xDist = w / 2 - x0;
            // //   let yDist = h / 2 - y0;
            // //   let satOffset = 75 - Math.sqrt(xDist * xDist + yDist * yDist) / w * 60;
            // //   return satOffset;
            // // }


            // function drawLines(x0, y0, length) {
            //   ctx.save();
            //   let cx = x0 + length / 2;
            //   let cy = y0 + length / 2;
            //   ctx.translate(cx, cy);
            //   setRandomRotationOnContext();
            //   let lineWidth = config.lineWidth;
            //   ctx.lineWidth = lineWidth;
            //   let hl = lineWidth / 2;
            //   let xDist = w / 2 - x0;
            //   let yDist = h / 2 - y0;
            //   let hue = Math.random() * 10 + 30;
            //   let satOffset = getSaturationOffset(x0, y0);
            //   for(let i = -hl; i < length + hl; i += lineWidth) {
            //     ctx.beginPath();
            //     let saturation = Math.round(Math.random() * 25) + satOffset;
            //     let color = `hsl(${hue}, ${saturation}%, 50%)`;
            //     ctx.strokeStyle = color;
            //     ctx.moveTo(-length / 2 - hl, i - length / 2);
            //     ctx.lineTo(length / 2 + hl, i - length / 2);
            //     ctx.stroke();
            //   }
            //   ctx.strokeStyle = "gray";
            //   ctx.lineWidth = config.space;
            //   ctx.strokeRect(-length / 2, -length / 2, length, length);
            //   ctx.restore();
            // }

            // setup();
            // draw();


            // var some_fancy_gradient = 'linear-gradient(red, blue)';
            // // var some_fancy_image = 'your url'
            // yourelement.style.background = 'url('+some_fancy_image+') center center / cover no-repeat,'+some_fancy_gradient+' no-repeat'

            //
            //  background-image: repeating-linear-gradient(
            //   45deg,
            //   #553c9a,
            //   #ffffff 2px,
            //   #b393d3 2px,
            //   #b393d3 5px
            // );

            // item.style.backgroundSize = 'cover';
            // item.style.backgroundColor = color
            // item.style.backgroundClip = " content-box";/

        }

        else {
            item.innerHTML = "empty"
        }

}

const shape_item = (item, shape) => {
    if (shape === "Square") {
        item.style.height = "0.5vw";
        item.style.width = "5vw"
    }
    else
        if (shape === "Circle") {
            item.style.height = "5vw";
            item.style.width = "5vw"
            item.style.borderRadius = "50%"
        }
        else
            if (shape === "Rhombus") {
                item.style.height = "5vw";
                item.style.width = "5vw"

            }
    item.style.border = "2px solid"
}
function Main() {
    getRandomValue(12);
    add_items_to_dom(items_on_the_game);
    user_name();

}
Main()