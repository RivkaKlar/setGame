let choesed_items = [];



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

//help funct to check_set
const the_same_style = (item, style) => {
    if (choesed_items[2].getAttribute(style) != item)
        return false;
    return true;
}
//help funct to check_set
const not_the_same_style = (item1, item2, style) => {
    if (choesed_items[2].getAttribute(style) === item1 || choesed_items[2].getAttribute(style) === item2)
        return false;
    return true;

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
const delete_items_from_game = () => {
    let random
    let element_to_delete
    let father_to_add_new_element
    choesed_items.forEach(choesed => {
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

function setRandomValue() {
    let res
    random = Math.floor(Math.random() * allShapes.length);
    res = allShapes[random]
    allShapes.splice(random, 1)
    if(allShapes.length==66)
    alert("finish")
    return res

}
//if the set is not correct removes the classlist "choesed" from the items
const remove_items = () => {
    for (let i of choesed_items) {
        i.classList.remove("choesed");
    }
}
//if the user choosed 3 items the func send them to check_set
function Three_wher_choesed() {
    let uns = true
    for (let a of attributes_items) {
        uns = check_set(a)
        if (!uns)
            break;
    }
    if (uns === true) {
        delete_items_from_game()
        num_of_set += 1
        console.log(allShapes.length);
    }

    else
        remove_items()
    localStorage.setItem("num_of_set", num_of_set)

    console.log(localStorage.getItem("num_of_set"));
    choesed_items = []
}
function Main() {  
    
    Listeners()
}
Main()