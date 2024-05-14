let choesed_items = [];
let change_3_items=0
let three_items_the_same = []

function change_3_items_in_game(){
    change_3_items+=1;
    let items_to_change=[]
    for (let i = 0; i < 3; i++) {
        items_to_change.push(Random_value_from_game())
        
    }
   delete_items_from_game(items_to_change)
}

//help func to Listeners
const aad_Listener_to_1_item = (f) => {
    f.addEventListener("click", (e) => {
        if (choesed_items.length < 3) {
            choesed_items.push(e.currentTarget);
            e.currentTarget.classList.add('choesed')
        }
        if (choesed_items.length === 3)
            setTimeout(Three_wher_choesed, 1000)//timer after 1 second
    }
    )
}
//listem when the user choose an item and  save the items in the choesed_items arr.
const Listeners = () => {
    choesed_items = [];
    let game = document.querySelectorAll(".item");
    for (i of game) {
        aad_Listener_to_1_item(i)
    }
}
/////////////////////////// check_set//////////////////////
//help funct to check_set
const the_same_style = (item, style) => {
    if (choesed_items[2].getAttribute(style) != item)
        return false;
    three_items_the_same.push(1)
    return true;
}
//help funct to check_set
const not_the_same_style = (item1, item2, style) => {
    if (choesed_items[2].getAttribute(style) === item1 || choesed_items[2].getAttribute(style) === item2)
        return false;
    return true;

}
//if the user choosed 3 items the func send them to check_set
function Three_wher_choesed() {
    let uns = true
    three_items_the_same = []
    for (let a of attributes_items) {
        uns = check_set(a)
        if (!uns)
            break;
    }
    if (allShapes.length == 0) {
        alert("game over")
        window.location.href = "Summary.html";
    }
    else {
        if (uns === true && three_items_the_same.length != 4) {
            delete_items_from_game(choesed_items)
            num_of_set += 1
        }
        else
            remove_items()
    }
    localStorage.setItem("num_of_set", num_of_set)
    choesed_items = []
}
//get three items and returns true if its a set and false if not
function check_set(style) {
    if (choesed_items[0].getAttribute(style) === choesed_items[1].getAttribute(style))
        color = the_same_style(choesed_items[0].getAttribute(style), style)
    else
        color = not_the_same_style(choesed_items[0].getAttribute(style), choesed_items[1].getAttribute(style), style)
    return color
}
//help func to delete_items_from_game
const change_item_in_game = (on_game, random) => {
    for (let a of attributes_items) {
        on_game[a] = random[a]
    }
    on_game.id = random.id
}
//if the user made a set , removes the choosed itemes and put other item;
const delete_items_from_game = (items_to_delete) => {
    let random
    let element_to_delete
    let father_to_add_new_element
    items_to_delete.forEach(choesed => {
        items_on_the_game = items_on_the_game.map(on_game => {
            if (on_game.id == choesed.id) {
                element_to_delete = document.getElementById(on_game.id);
                father_to_add_new_element = element_to_delete.parentElement
                element_to_delete.parentNode.removeChild(element_to_delete);
                random = setRandomValue()
                change_item_in_game(on_game, random)
                let f = add_1_item_to_dom(father_to_add_new_element, on_game);
                aad_Listener_to_1_item(f)
            }
            return on_game;
        }
        );
    });
}
function Random_value_from_game(){
    let res
    random = Math.floor(Math.random() * items_on_the_game.length);
    res = items_on_the_game[random]
    return res
}
function setRandomValue() {
    let res
    random = Math.floor(Math.random() * allShapes.length);
    res = allShapes[random]
    allShapes.splice(random, 1)
    return res

}
//if the set is not correct removes the classlist "choesed" from the items
const remove_items = () => {
    for (let i of choesed_items) {
        i.classList.remove("choesed");
    }
}
function Main() {
    localStorage.setItem("num_of_set", 0)
    Listeners()
}
Main()
